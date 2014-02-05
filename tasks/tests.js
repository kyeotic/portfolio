module.exports = function(grunt) {

	var files = grunt.config('files');
	
	grunt.config.set('tests', {
		src: files.tests
	});

	// Nodejs libs.
	var path = require('path');

	// External lib.
	var phantomjs = require('grunt-lib-phantomjs').init(grunt);

	grunt.registerMultiTask('task-tests', 'Run PhantomJS Tests', function() {

		options = this.options({
			timeout: 5000,
			urls: [],
			force: false
		});

		var urls = options.urls.concat(this.filesSrc);
		//grunt.log.writeln(options.urls);
		//grunt.log.writeln(this.files);
		//grunt.log.writeln(this.src);
		grunt.log.writeln(this.filesSrc);
		grunt.log.writeln(grunt.config('files').js);

	});
};