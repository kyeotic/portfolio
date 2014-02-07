module.exports = function(grunt){

	//Setup Files
	var files = {
		js: [
			'src/client/app/**/*.js', 
			'src/client/lib/durandal/js/plugins/{knockoutActivity,knockoutCommands,knockoutExtensions,qPatch,envPatch}.js'
		],
		jsExclude: ['src/client/app/main-built.js'],
		tests: ['tests/specs/**/*.js'],
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
				files: files.js,
				tasks: ['jshint']
			},
			tests: {
				files: files.js.concat(files.tests).concat(['tasks/tests.js']),
				tasks: ['tests']
			}
		}
	});

	//Load the tasks
	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['htmlhint', 'jshint', 'tests']);
	grunt.registerTask('build', ['default', 'durandal']);
};