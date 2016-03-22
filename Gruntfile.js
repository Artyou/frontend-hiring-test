module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['app/css/*.scss'],
        tasks: ['sass', 'cssmin', 'uglify']
      },
    },

    sass: {
      dist: {
        files: {
          'app/css/main.css' : 'app/css/main.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'app/css',
          src: ['*.css', '!*.min.css'],
          dest: 'app/css',
          ext: '.min.css'
        }]
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          open: {
            target: 'http://localhost:9000'
          }
        }
      }
    },
    uglify: {
      radar: {
        src: 'app/js/radar.js',
        dest: 'app/js/min/radar.min.js'
      },
      main: {
        src: 'app/js/main.js',
        dest: 'app/js/min/main.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};