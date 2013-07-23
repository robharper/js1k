module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        // compress: true,
        mangle: {
          toplevel: true
        }
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src', 
          src: ['**/*.js'],
          dest: 'build'
        }]
      }
    },
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: 'src', 
          src: ['*.html'],
          dest: 'build'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy']);

};