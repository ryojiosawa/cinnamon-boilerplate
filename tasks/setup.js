/**
 * Created by Ryoji Osawa on 7/14/14.
 */
var jsforce = require('jsforce'),
    fs = require('fs'),
    CLIENT_ID = '__4l3n4c',
    REST_URL = '/services/apexrest/cinnamon/config/';

module.exports = function (grunt) {

    grunt.registerTask('setup', function () {
        var done = this.async();

        //var config = JSON.parse(fs.readFileSync('./cinnamon.json'));
        var config = grunt.file.readJSON('./cinnamon.json');
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

            grunt.log.writeln("Updating Cinnamon settings...");
            conn.apex.post(REST_URL, data, function (err, res) {
                if (err) done(err);
            });
        });
    });
};