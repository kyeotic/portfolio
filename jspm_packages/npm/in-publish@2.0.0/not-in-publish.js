/* */ 
(function(process) {
  'use strict';
  var inPublish = require('./index').inPublish;
  process.exit(inPublish() ? 1 : 0);
})(require('process'));
