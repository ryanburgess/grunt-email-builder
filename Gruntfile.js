module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'sass/',
            src: ['**/*.scss'],
            dest: 'emails/css/',
            ext: '.css',
          },
        ],
      },
    },
    juice: {
      options: {
        removeStyleTags: false
      },
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'emails/',
            src: ['**/*.html'],
            dest: 'build/',
            ext: '-final.html'
          }
        ]
      }
    },
    watch: {
      build: {
        files: ['sass/**/*'],
        tasks: ['sass', 'juice']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-juice-email');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
};