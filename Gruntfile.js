module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        includePaths: [
          'assets/vendor'
        ]
      },
      dev: {
        files: [{
          expand: true,
          src: ['*.scss'],
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');

};
