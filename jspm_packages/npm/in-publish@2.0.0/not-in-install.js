/* */ 
(function(process) {
  'use strict';
  var inInstall = require('./index').inInstall;
  process.exit(inInstall() ? 1 : 0);
})(require('process'));
