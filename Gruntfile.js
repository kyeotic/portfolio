module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	var files = {
		js: ['src/client/app/**/*.js', 'src/client/lib']
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'head-script-disabled': true,
					'style-disabled': true
				},
				src: ['src/views/index.html', 'src/client/app/**/*.html']
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			build: {
				files: {
					'build/app.min.js': ['src/client/app/**/*.js', 'src/client/lib/durandal/**/*.js']
				}
			}
		},
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
		watch: {
			html: {
				files: ['src/views/index.html'],
				tasks: ['htmlhint']
			}
		}
	});

	grunt.registerTask('default', []);

};