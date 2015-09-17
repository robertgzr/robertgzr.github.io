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
    });

    grunt.loadNpmTasks('grunt-browser-sync');

    // default task
    grunt.registerTask('default', 'jshint');
    // server task
    grunt.registerTask('server', ['browserSync']);
};