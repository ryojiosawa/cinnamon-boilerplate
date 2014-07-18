/**
 * Created by Ryoji Osawa on 7/14/14.
 */
var jsforce = require('jsforce'),
    fs = require('fs'),
    _ = require('underscore'),
    async = require('async'),
    CLIENT_ID = '__4l3n4c',
    CINNAMON_REST_BASE_URL = '/services/apexrest/cinnamon',
    SELF_REMOTE_SITE = 'cinnamon__self';

module.exports = function (grunt) {

    var config = grunt.file.readJSON('./cinnamon.json');

    grunt.registerTask('setup', function () {
        var conn = new jsforce.Connection(),
            done = this.async();

        async.series({
            connect: function (callback) {
                conn.login(config.username, config.password, function (err, userInfo) {
                    if (err) {
                        callback(err);
                        done(err);
                    }
                    callback(null);
                });
            },
            cinnamonSettings: function (callback) {
                var data = {
                    request: {
                        proxyUrl: config.seleniumProxyURL,
                        proxyPort: Number(config.seleniumProxyPort),
                        proxyUsername: config.sauceUsername,
                        proxyToken: config.sauceAccessKey,
                        testPrefix: config.testPrefix,
                        orgUnderTestUsername: config.username,
                        orgUnderTestLoginUrl: conn.instanceUrl
                    },
                    clientId: CLIENT_ID
                };

                conn.apex.post(CINNAMON_REST_BASE_URL + '/config', data, function (err, res) {
                    if (err) {
                        callback(err);
                        done(err);
                    }

                    grunt.log.writeln("Cinnamon settings updated");
                    callback(null);
                });
            },
            remoteSiteSettings: function (callback) {
                var data = {
                    currentName: 'cinnamon__self',
                    metadata: {
                        fullName: 'cinnamon__self',
                        isActive: true,
                        url: conn.instanceUrl
                    }
                };

                conn.metadata.updateAsync('RemoteSiteSetting', data).complete(function (err, res) {
                    if (err) {
                        callback(err);
                        done(err);
                    }
                    grunt.log.writeln("Remote site settings updated");
                    callback(null);
                });
            }
        }, function (err, results) {
            grunt.log.writeln("Setup completed successfully");
            done();
        });
    });

    grunt.registerTask('show', function () {
        var conn = new jsforce.Connection(),
            done = this.async(),
            tests;

        async.series({
            connect: function (callback) {
                conn.login(config.username, config.password, function (err, userInfo) {
                    if (err) {
                        callback(err);
                        done(err);
                    }
                    callback(null);
                });
            },
            queryTests: function (callback) {
                conn.apex.get(CINNAMON_REST_BASE_URL + '/tests/definition', function (err, res) {
                    if (err) {
                        callback(err);
                        done(err);
                    }

                    grunt.log.writeln('Number of Tests:' + res.length);
                    _.chain(res)
                        .pluck('Name')
                        .sortBy(function (a, b) {
                            if (a > b) return 1;
                            if (a < b) return -1;
                            return 0;
                        })
                        .each(function (test) {
                            grunt.log.writeln(test);
                        });

                    callback(null);
                });
            }
        });
    });
};