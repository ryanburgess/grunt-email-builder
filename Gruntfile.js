module.exports = function(grunt) {
  grunt.initConfig({
  juice: {
    options: {
      removeStyleTags: false,
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
        files: ['emails/**/*'],
        tasks: ['juice']
   },
   livereload: {
      files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
      options: {
        livereload: true
      }
    }
   }
 });
  grunt.loadNpmTasks('grunt-juice-email');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
};