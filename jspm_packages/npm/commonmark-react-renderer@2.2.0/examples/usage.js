/* */ 
'use strict';
var CommonMark = require('commonmark');
var ReactRenderer = require('../src/commonmark-react-renderer');
var parser = new CommonMark.Parser();
var renderer = new ReactRenderer();
var input = '# This is a header\n\nAnd this is a paragraph';
var ast = parser.parse(input);
renderer.render(ast);
