/* */ 
(function(process) {
  'use strict';
  var inPublish = require('./index').inPublish;
  process.exit(inPublish() ? 0 : 1);
})(require('process'));
