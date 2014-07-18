/**
 * Created by Ryo Osawa on 7/14/14.
 */
var jsforce = require('jsforce'),
    fs = require('fs'),
    CLIENT_ID = '__4l3n4c',
    REST_URL = '/services/apexrest/cinnamon/config/';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadTasks('tasks');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        props: grunt.file.readJSON('cinnamon.json'),
        sfdcAntTool: '.lib/ant-salesforce.jar',
        shell: {
            install: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> install -Dsf.username=<%= props.username %> -Dsf.password=<%= props.password %> -Dsf.serverurl=<%= props.serverUrl %>'
                ].join('&&')
            },
            uninstall: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> uninstall -Dsf.username=<%= props.username %> -Dsf.password=<%= props.password %> -Dsf.serverurl=<%= props.serverUrl %>'
                ].join('&&')
            },
            deploy: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> deploy -Dsf.username=<%= props.username %> -Dsf.password=<%= props.password %> -Dsf.serverurl=<%= props.serverUrl %>'
                ].join('&&')
            },
            delete: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> delete -Dsf.username=<%= props.username %> -Dsf.password=<%= props.password %> -Dsf.serverurl=<%= props.serverUrl %>'
                ].join('&&')
            },
            run: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> run -Dsf.username=<%= props.username %> -Dsf.password=<%= props.password %> -Dsf.serverurl=<%= props.serverUrl %>'
                ].join('&&')
            }
        }
    });

    grunt.registerTask('install', ['shell:install']);
    grunt.registerTask('uninstall', ['shell:uninstall']);
    grunt.registerTask('deploy', ['shell:deploy']);
    grunt.registerTask('delete', ['shell:delete']);
    grunt.registerTask('run', ['shell:run']);
    grunt.registerTask('default', ['run']);
};