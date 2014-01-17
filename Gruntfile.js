module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	var files = {
		js: [
			'src/client/app/**/*.js', 
			'src/client/lib/durandal/js/plugins/{knockoutActivity,knockoutCommands,knockoutExtensions,qPatch,envPatch}.js'
		],
		jsExclude: ['src/client/app/main-built.js'],
		htmlIndex: ['src/index.html'],
		html: ['src/client/app/**/*.html']
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlhint: {
			index: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'style-disabled': true
				},
				src: files.htmlIndex
			},
			app: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'spec-char-escape': true,
					'id-unique': true,
					'style-disabled': true,
					'img-alt-require': true
				},
				src: files.html
			}
		},
		jshint: {
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
			uses_defaults: files.js
		},
		watch: {
            html: {
                files: files.html.concat(files.htmlIndex),
                tasks: ['htmlhint']
            },
            jshint: {
            	files: files.js,
            	tasks: ['jshint']
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
		}
	});

	grunt.registerTask('default', ['htmlhint', 'jshint', 'durandal']);

};