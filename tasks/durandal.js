module.exports = function(grunt) {

	var files = grunt.config('files');

	grunt.config.set('durandal', {
			build: {
				src: [
					"src/client/app/**/*.*",
					"src/client/lib/durandal/**/*.*"
				],
				options: {
					name: '../lib/require/almond-custom',
					baseUrl: "src/client/app/",
					mainPath: "src/client/app/main.js",
					out: "src/client/app/main-built.js",

					paths: {
						'text': '../lib/require/text',
						'durandal':'../lib/durandal/js',
						'plugins' : '../lib/durandal/js/plugins',
						'transitions' : '../lib/durandal/js/transitions',
						'knockout': '../lib/knockout-2.3.0',
						'bootstrap': '../lib/bootstrap.min',
						'magnific': '../lib/magnific-popup',
						'jquery': '../lib/jquery-1.9.1',
						'Q' : '../lib/q.min'
					},
					uglify2: {
						compress: {
							global_defs: {
								DEBUG: true
							}
						}
					}
				}
			}
	});
	
	grunt.loadNpmTasks('grunt-durandal');

	grunt.registerMultiTask('task-durandal', 'Run PhantomJS Tests', function() {
		grunt.task.run('durandal');
	});
};