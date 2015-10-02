'use strict';

module.exports = function(grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration
    grunt.initConfig({
        browserSync: {
            bsFiles: {
                src: [
                    'app/**/*.css',
                    'app/**/*.js',
                    'app/**/*.html',
                    'data/*.json',
                    './*.html'
                ]
            },
            options: {
                server: {
                    baseDir: "./"
                },
                port: 7070
            },
        },
        wiredep: {
            target: {
                src: 'index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-wiredep')

    // default task
    grunt.registerTask('default', ['wiredep']);
    // server task
    grunt.registerTask('server', ['default','browserSync']);
};