/* */ 
(function(process) {
  'use strict';
  var inInstall = require('./index').inInstall;
  process.exit(inInstall() ? 0 : 1);
})(require('process'));
