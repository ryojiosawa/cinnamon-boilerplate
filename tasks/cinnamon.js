/**
 * Created by Ryoji Osawa on 7/14/14.
 */
var jsforce = require('jsforce'),
    fs = require('fs'),
    _ = require('underscore'),
    async = require('async'),
    CLIENT_ID = '__4l3n4c',
    CINNAMON_REST_BASEURL = '/services/apexrest/cinnamon',
    SELF_REMOTE_SITE = 'cinnamon__self';

module.exports = function (grunt) {

    var config = grunt.file.readJSON('./cinnamon.json');

    grunt.registerTask('setup', function () {
        var done = this.async();

        var conn = new jsforce.Connection();

        conn.login(config.username, config.password, function (err, userInfo) {
            if (err) done(err);

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

            conn.apex.post(CINNAMON_REST_BASEURL + '/config', data, function (err, res) {
                if (err) done(err);

                grunt.log.writeln("Cinnamon settings updated.");
                done();
            });

            // TODO: update remote site setting - self
        });
    });

    grunt.registerTask('show', function () {
        var done = this.async(),
            tests;

        var conn = new jsforce.Connection();

        conn.login(config.username, config.password, function (err, userInfo) {
            if (err) done(err);

            async.series([
                function(callback) {

                },
                function(callback) {
                    // update "self" remote site setting via metadata API
                    conn.metadata.read('RemoteSiteSetting', [SELF_REMOTE_SITE], function (err, metadata) {
                        console.log(metadata);
                    });

                    var data = {
                        currentName: SELF_REMOTE_SITE,
                        metadata: {
                            fullName: SELF_REMOTE_SITE,
                            isActive: true,
                            url: conn.instanceUrl
                        }
                    }
                    conn.metadata.updateAsync('RemoteSiteSetting', data).complete(function(err, res) {
                        if (err) done(err);
                    });
                }
            ], function(err, results) {
                if (err) done(err);

                grunt.log.writeln('Cinnamon setup completed.');
            });

            conn.apex.get(CINNAMON_REST_BASEURL + '/tests/definition', function (err, res) {
                if (err) done(err);

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

                done();
            });
        });
    });

    grunt.registerTask('meta', function () {
        var done = this.async();

        var conn = new jsforce.Connection();

        conn.login(config.username, config.password, function (err, userInfo) {
            if (err) done(err);

            conn.metadata.read('RemoteSiteSetting', ['cinnamon__self'], function (err, metadata) {
                console.log(metadata);
            });

            var data = {
                currentName: 'cinnamon__self',
                metadata: {
                    fullName: 'cinnamon__self',
                    isActive: true,
                    url: 'https://na15.salesforce.com'
                }
            }
            conn.metadata.updateAsync('RemoteSiteSetting', data).complete(function(err, res) {
                if (err) done(err);

                grunt.log.writeln(res);
                done();
            });
        });
    });
};