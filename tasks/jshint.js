module.exports = function(grunt) {

	var files = grunt.config('files');

	grunt.config.set('jshint', {
		options: {
			curly: false,
			eqeqeq: true,
			eqnull: true,
			browser: true,
			smarttabs: true,
			"-W099": true, // allowed mixed tabs and spaces
			globals: {
				jQuery: true
			},
			ignores: files.jsExclude
		},
		uses_defaults: files.js.concat(files.tests).concat(files.testLib)
	});
	grunt.config.set('spell', {
		all: {
			src: files.html,
			options: {
				lang: 'en',
				ignore: ['complex expression']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerMultiTask('task-jshint', 'Run PhantomJS Tests', function() {
		grunt.task.run('jshint');
	});
};