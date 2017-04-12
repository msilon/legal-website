module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    imagemin: {
      static: {
        options: {
          optimizationLevel: 7
        },
        
      files: [
        {
          expand: true,
          cwd: 'src/images',
          src: ['**/*.{jpg, jpeg}'],
          dest: 'src/images/compressed'
          }
        ]
      }
    },

		uncss: {
		   dist: {
		      files: {
		         'src/css/used/style.css': 'src/index.html'
		      }
		   }
		},

		cssmin: {
		   dist: {
		      files: {
		         'src/css/min/style.min.css': 'src/css/used/style.css'
		      }
		  	}
		},

    uglify: {
      my_target: {
        files: {
          'src/js/min/script.min.js': 'src/js/script.js',
        }
      }
    }

  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['imagemin', 'cssmin', 'uncss', 'uglify']);
};