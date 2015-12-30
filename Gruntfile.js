module.exports = function(grunt){

	//Setup Files
	var files = {
		js: [
			'src/client/app/**/*.js', 
			'src/client/lib/durandal/js/plugins/{knockoutActivity,knockoutCommands,knockoutExtensions,qPatch,envPatch}.js'
		],
		jsExclude: ['src/client/app/main-built.js'],
		testLib: ['tests/lib/durandalHarness.js', 'tests/spec.js'],
		tests: ['tests/specs/*.js'],
		htmlIndex: ['src/index.html'],
		html: ['src/client/app/**/*.html']
	};

	//Write to config so the tasks can access them
	grunt.initConfig({
		files: files,
		watch: {
			html: {
				files: files.html.concat(files.htmlIndex),
				tasks: ['htmlhint']
			},
			jshint: {
				files: files.js.concat(files.tests).concat(files.testLib),
				tasks: ['jshint']
			},
			tests: {
				files: files.js.concat(files.tests).concat(files.testLib).concat(['tasks/tests.js']),
				tasks: ['tests']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	//Load the tasks
	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['htmlhint', 'jshint', 'tests']);
	grunt.registerTask('build', ['default', 'durandal']);
};