/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  exports.compilePattern = compilePattern;
  exports.matchPattern = matchPattern;
  exports.getParamNames = getParamNames;
  exports.getParams = getParams;
  exports.formatPattern = formatPattern;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _invariant = require('invariant');
  var _invariant2 = _interopRequireDefault(_invariant);
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  function escapeSource(string) {
    return escapeRegExp(string).replace(/\/+/g, '/+');
  }
  function _compilePattern(pattern) {
    var regexpSource = '';
    var paramNames = [];
    var tokens = [];
    var match = undefined,
        lastIndex = 0,
        matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
    while (match = matcher.exec(pattern)) {
      if (match.index !== lastIndex) {
        tokens.push(pattern.slice(lastIndex, match.index));
        regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
      }
      if (match[1]) {
        regexpSource += '([^/?#]+)';
        paramNames.push(match[1]);
      } else if (match[0] === '**') {
        regexpSource += '([\\s\\S]*)';
        paramNames.push('splat');
      } else if (match[0] === '*') {
        regexpSource += '([\\s\\S]*?)';
        paramNames.push('splat');
      } else if (match[0] === '(') {
        regexpSource += '(?:';
      } else if (match[0] === ')') {
        regexpSource += ')?';
      }
      tokens.push(match[0]);
      lastIndex = matcher.lastIndex;
    }
    if (lastIndex !== pattern.length) {
      tokens.push(pattern.slice(lastIndex, pattern.length));
      regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
    }
    return {
      pattern: pattern,
      regexpSource: regexpSource,
      paramNames: paramNames,
      tokens: tokens
    };
  }
  var CompiledPatternsCache = {};
  function compilePattern(pattern) {
    if (!(pattern in CompiledPatternsCache))
      CompiledPatternsCache[pattern] = _compilePattern(pattern);
    return CompiledPatternsCache[pattern];
  }
  function matchPattern(pattern, pathname) {
    if (pattern.charAt(0) !== '/') {
      pattern = '/' + pattern;
    }
    if (pathname.charAt(0) !== '/') {
      pathname = '/' + pathname;
    }
    var _compilePattern2 = compilePattern(pattern);
    var regexpSource = _compilePattern2.regexpSource;
    var paramNames = _compilePattern2.paramNames;
    var tokens = _compilePattern2.tokens;
    regexpSource += '/*';
    var captureRemaining = tokens[tokens.length - 1] !== '*';
    if (captureRemaining) {
      regexpSource += '([\\s\\S]*?)';
    }
    var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));
    var remainingPathname = undefined,
        paramValues = undefined;
    if (match != null) {
      if (captureRemaining) {
        remainingPathname = match.pop();
        var matchedPath = match[0].substr(0, match[0].length - remainingPathname.length);
        if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
          return {
            remainingPathname: null,
            paramNames: paramNames,
            paramValues: null
          };
        }
      } else {
        remainingPathname = '';
      }
      paramValues = match.slice(1).map(function(v) {
        return v != null ? decodeURIComponent(v) : v;
      });
    } else {
      remainingPathname = paramValues = null;
    }
    return {
      remainingPathname: remainingPathname,
      paramNames: paramNames,
      paramValues: paramValues
    };
  }
  function getParamNames(pattern) {
    return compilePattern(pattern).paramNames;
  }
  function getParams(pattern, pathname) {
    var _matchPattern = matchPattern(pattern, pathname);
    var paramNames = _matchPattern.paramNames;
    var paramValues = _matchPattern.paramValues;
    if (paramValues != null) {
      return paramNames.reduce(function(memo, paramName, index) {
        memo[paramName] = paramValues[index];
        return memo;
      }, {});
    }
    return null;
  }
  function formatPattern(pattern, params) {
    params = params || {};
    var _compilePattern3 = compilePattern(pattern);
    var tokens = _compilePattern3.tokens;
    var parenCount = 0,
        pathname = '',
        splatIndex = 0;
    var token = undefined,
        paramName = undefined,
        paramValue = undefined;
    for (var i = 0,
        len = tokens.length; i < len; ++i) {
      token = tokens[i];
      if (token === '*' || token === '**') {
        paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
        !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;
        if (paramValue != null)
          pathname += encodeURI(paramValue);
      } else if (token === '(') {
        parenCount += 1;
      } else if (token === ')') {
        parenCount -= 1;
      } else if (token.charAt(0) === ':') {
        paramName = token.substring(1);
        paramValue = params[paramName];
        !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;
        if (paramValue != null)
          pathname += encodeURIComponent(paramValue);
      } else {
        pathname += token;
      }
    }
    return pathname.replace(/\/+/g, '/');
  }
})(require('process'));
