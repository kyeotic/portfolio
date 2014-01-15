module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	var files = {
		js: ['src/client/app/**/*.js', 'src/client/lib']
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			build: {
				options: {					
					name: '../lib/require/almond-custom', //to deploy with require.js, use the build's name here instead
					insertRequire: ['main'], //needed for almond, not require
					baseUrl: 'src/client/app',
					out: 'build/main-built.js',
					mainConfigFile: 'src/client/app/main.js', //needed for almond, not require
					wrap: true, //needed for almond, not require
					paths: {
						'text': '../lib/text',
						'durandal': '../lib/durandal',
						'plugins': '../lib/durandal/plugins',
						'transitions': '../lib/durandal/transitions',
						'knockout': '../lib/knockout-2.3.0',
						'bootstrap': 'empty:',
						'jquery': 'empty:'
					},
					inlineText: true,
					optimize: 'none',
					stubModules: ['text'],
					//keepBuildDir: true, //If set, will not delete the build directory
					//appDir: 'src/client/app',
					//dir: 'build'					
				}
			}
		},
		durandal: {
			build: {
				src: [
					"src/client/app/**/*.*",
					"src/client/lib/durandal/**/*.*"
				],
				options: {
					name: '../lib/require/almond-custom',
					baseUrl: "src/client/app/",
					mainPath: "src/client/app/main.js",
					out: "build/main-built.js",

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
		},
		watch: {
		}
	});

	grunt.registerTask('default', []);

};