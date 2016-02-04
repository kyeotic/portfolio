/* */ 
'use strict';
var fs = require('fs');
module.exports = function generateGlyphiconsData(grunt) {
  var glyphiconsFile = fs.readFileSync('less/glyphicons.less', 'utf8');
  var glyphiconsLines = glyphiconsFile.split('\n');
  var iconClassName = /^\.(glyphicon-[a-zA-Z0-9-]+)/;
  var glyphiconsData = '# This file is generated via Grunt task. **Do not edit directly.**\n' + '# See the \'build-glyphicons-data\' task in Gruntfile.js.\n\n';
  var glyphiconsYml = 'docs/_data/glyphicons.yml';
  for (var i = 0,
      len = glyphiconsLines.length; i < len; i++) {
    var match = glyphiconsLines[i].match(iconClassName);
    if (match !== null) {
      glyphiconsData += '- ' + match[1] + '\n';
    }
  }
  if (!fs.existsSync('docs/_data')) {
    fs.mkdirSync('docs/_data');
  }
  try {
    fs.writeFileSync(glyphiconsYml, glyphiconsData);
  } catch (err) {
    grunt.fail.warn(err);
  }
  grunt.log.writeln('File ' + glyphiconsYml.cyan + ' created.');
};
