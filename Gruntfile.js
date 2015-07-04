module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'cache-killer.js',
                dest: 'cache-killer.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['cache-killer.js'],
                tasks: ['uglify']
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
