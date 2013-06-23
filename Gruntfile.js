/*jslint node: true */

'use strict';

module.exports = function (grunt) {

    var port = 8981;

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: port,
                    base: '.'
                }
            }
        },
        shell: {
            //assuming available localhost:8000/testrunner.html
            'mocha-phantomjs': {
                command: 'node_modules/mocha-phantomjs/bin/mocha-phantomjs -R spec http://localhost:' + 8000 + '/testrunner.html',
                options: {
                    stdout: true,
                    stderr: true
                }
            },
            'ci': {
                command: 'node_modules/mocha-phantomjs/bin/mocha-phantomjs -R spec http://localhost:' + port + '/testrunner.html',
                options: {
                    stdout: true,
                    stderr: true
                }
            }
        },
        watch: {
            js: {
                files: ['js/*.js', 'test/*.js'],
                tasks: ['shell:mocha-phantomjs']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('test', ['connect', 'shell:ci']);
};
