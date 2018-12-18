module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jsdoc : {
          dist : {
              src: ['src/**/*.js'],
              options: {
                  destination: 'doc/api'
              }
          }
      },
      copy: {
          sites: {
              expand: true,
              cwd: 'dist',
              src: '**',
              dest: 'sites/lib/'
          },
      },
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('default', ['jsdoc']);
};