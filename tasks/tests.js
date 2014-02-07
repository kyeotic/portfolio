module.exports = function(grunt) {

	var files = grunt.config('files');
	
	grunt.config.set('tests', {
		src: files.tests
	});

	grunt.registerMultiTask('tests', 'Run PhantomJS Tests', function() {

		var done = this.async();

		var childProcess = require('child_process'),
			phantomjs = require('phantomjs'),
			path = require('path'),
			binPath = phantomjs.path;

		var childArgs = [
			path.join(__dirname, '../tests/spec.js')
		];

		var workingDir = path.join(__dirname, '../tests/');

		childProcess.execFile(binPath, childArgs, { cwd: workingDir }, function(err, stdout, stderr) {
			grunt.log.writeln(stdout);
			grunt.log.writeln(stderr);
			done();
		})

	});
};