module.exports = function(grunt) {

	var files = grunt.config('files');

	grunt.config.set('htmlhint', {
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
	});

	grunt.loadNpmTasks('grunt-htmlhint');
};