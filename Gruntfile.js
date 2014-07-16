/**
 * Created by Ryo Osawa on 7/14/14.
 */
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sfdcAntTool: '.lib/ant-salesforce.jar',
        shell: {
            install: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> install'
                ].join('&&')
            },
            uninstall: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> uninstall'
                ].join('&&')
            },
            deploy: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> deploy'
                ].join('&&')
            },
            delete: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> delete'
                ].join('&&')
            },
            run: {
                command: [
                'cd ant',
                'ant -lib <%= sfdcAntTool %> run'
                ].join('&&')
            },
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('install', ['shell:install']);
    grunt.registerTask('uninstall', ['shell:uninstall']);
    grunt.registerTask('deploy', ['shell:deploy']);
    grunt.registerTask('delete', ['shell:delete']);
    grunt.registerTask('run', ['shell:run']);
    grunt.registerTask('default', ['run']);
};