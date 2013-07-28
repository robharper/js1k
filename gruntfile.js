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
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'src'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy']);

};