module.exports = function(grunt) {

	var options;

	grunt.registerMultiTask('tests', 'Run PhantomJS Tests', function() {

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

	});
};