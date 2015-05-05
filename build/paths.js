var path = require('path');

var appRoot = 'src/';
var outputRoot = 'client/app/';
var serveBase  = 'client/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  serve: serveBase,
  sourceMapRelativePath: '../' + appRoot,
};
