module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _import = __webpack_require__(26);
  
  var _import2 = _interopRequireDefault(_import);
  
  var _fs = __webpack_require__(24);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(27);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(21);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _React = __webpack_require__(1);
  
  var _React2 = _interopRequireDefault(_React);
  
  var _Dispatcher = __webpack_require__(3);
  
  var _Dispatcher2 = _interopRequireDefault(_Dispatcher);
  
  var _ActionTypes = __webpack_require__(2);
  
  var _ActionTypes2 = _interopRequireDefault(_ActionTypes);
  
  var _AppStore = __webpack_require__(6);
  
  var _AppStore2 = _interopRequireDefault(_AppStore);
  
  var server = _express2['default']();
  
  server.set('port', process.env.PORT || 5000);
  server.use(_express2['default']['static'](_path2['default'].join(__dirname)));
  
  //
  // Page API
  // -----------------------------------------------------------------------------
  server.get('/api/page/*', function (req, res) {
    var urlPath = req.path.substr(9);
    var page = _AppStore2['default'].getPage(urlPath);
    res.send(page);
  });
  
  //
  // Server-side rendering
  // -----------------------------------------------------------------------------
  
  // The top-level React component + HTML template for it
  var App = _React2['default'].createFactory(__webpack_require__(12));
  var templateFile = _path2['default'].join(__dirname, 'templates/index.html');
  var template = _import2['default'].template(_fs2['default'].readFileSync(templateFile, 'utf8'));
  
  server.get('*', function (req, res) {
    var data = { description: '' };
    var app = new App({
      path: req.path,
      onSetTitle: function onSetTitle(title) {
        data.title = title;
      },
      onSetMeta: function onSetMeta(name, content) {
        data[name] = content;
      },
      onPageNotFound: function onPageNotFound() {
        res.status(404);
      }
    });
    data.body = _React2['default'].renderToString(app);
    var html = template(data);
    res.send(html);
  });
  
  // Load pages from the `/src/content/` folder into the AppStore
  (function () {
    var assign = __webpack_require__(4);
    var fm = __webpack_require__(23);
    var jade = __webpack_require__(25);
    var sourceDir = _path2['default'].join(__dirname, './content');
    var getFiles = function getFiles(dir) {
      var pages = [];
      _fs2['default'].readdirSync(dir).forEach(function (file) {
        var stat = _fs2['default'].statSync(_path2['default'].join(dir, file));
        if (stat && stat.isDirectory()) {
          pages = pages.concat(getFiles(file));
        } else {
          // Convert the file to a Page object
          var filename = _path2['default'].join(dir, file);
          var url = filename.substr(sourceDir.length, filename.length - sourceDir.length - 5).replace('\\', '/');
          if (url.indexOf('/index', url.length - 6) !== -1) {
            url = url.substr(0, url.length - (url.length > 6 ? 6 : 5));
          }
          var source = _fs2['default'].readFileSync(filename, 'utf8');
          var content = fm(source);
          var html = jade.render(content.body, null, '  ');
          var page = assign({}, { path: url, body: html }, content.attributes);
          _Dispatcher2['default'].handleServerAction({
            actionType: _ActionTypes2['default'].LOAD_PAGE,
            path: url,
            page: page
          });
        }
      });
      return pages;
    };
    return getFiles(sourceDir);
  })();
  
  server.listen(server.get('port'), function () {
    if (process.send) {
      process.send('online');
    } else {
      console.log('The server is running at http://localhost:' + server.get('port'));
    }
  });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _keyMirror = __webpack_require__(10);
  
  var _keyMirror2 = _interopRequireDefault(_keyMirror);
  
  exports['default'] = _keyMirror2['default']({
  
    LOAD_PAGE: null,
    LOAD_PAGE_SUCCESS: null,
    LOAD_PAGE_ERROR: null,
    CHANGE_LOCATION: null
  
  });
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _Flux = __webpack_require__(22);
  
  var _Flux2 = _interopRequireDefault(_Flux);
  
  var _PayloadSources = __webpack_require__(5);
  
  var _PayloadSources2 = _interopRequireDefault(_PayloadSources);
  
  var _assign = __webpack_require__(4);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  /**
   * A singleton that operates as the central hub for application updates.
   * For more information visit https://facebook.github.io/flux/
   */
  var Dispatcher = _assign2['default'](new _Flux2['default'].Dispatcher(), {
  
    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the server.
     */
    handleServerAction: function handleServerAction(action) {
      var payload = {
        source: _PayloadSources2['default'].SERVER_ACTION,
        action: action
      };
      this.dispatch(payload);
    },
  
    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the view.
     */
    handleViewAction: function handleViewAction(action) {
      var payload = {
        source: _PayloadSources2['default'].VIEW_ACTION,
        action: action
      };
      this.dispatch(payload);
    }
  
  });
  
  exports['default'] = Dispatcher;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule Object.assign
   */
  
  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
  
  'use strict';
  
  function assign(target, sources) {
    if (target == null) {
      throw new TypeError('Object.assign target cannot be null or undefined');
    }
  
    var to = Object(target);
    var hasOwnProperty = Object.prototype.hasOwnProperty;
  
    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
      var nextSource = arguments[nextIndex];
      if (nextSource == null) {
        continue;
      }
  
      var from = Object(nextSource);
  
      // We don't currently support accessors nor proxies. Therefore this
      // copy cannot throw. If we ever supported this then we must handle
      // exceptions and side-effects. We don't support symbols so they won't
      // be transferred.
  
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
    }
  
    return to;
  }
  
  module.exports = assign;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _keyMirror = __webpack_require__(10);
  
  var _keyMirror2 = _interopRequireDefault(_keyMirror);
  
  exports['default'] = _keyMirror2['default']({
  
    VIEW_ACTION: null,
    SERVER_ACTION: null
  
  });
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _Dispatcher = __webpack_require__(3);
  
  var _Dispatcher2 = _interopRequireDefault(_Dispatcher);
  
  var _ActionTypes = __webpack_require__(2);
  
  var _ActionTypes2 = _interopRequireDefault(_ActionTypes);
  
  var _PayloadSources = __webpack_require__(5);
  
  var _PayloadSources2 = _interopRequireDefault(_PayloadSources);
  
  var _EventEmitter = __webpack_require__(20);
  
  var _EventEmitter2 = _interopRequireDefault(_EventEmitter);
  
  var _assign = __webpack_require__(4);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var CHANGE_EVENT = 'change';
  
  var pages = {};
  var loading = false;
  
  if (true) {
    pages['/'] = { title: 'Home Page' };
    pages['/privacy'] = { title: 'Privacy Policy' };
  }
  
  var AppStore = _assign2['default']({}, _EventEmitter2['default'].prototype, {
  
    isLoading: function isLoading() {
      return loading;
    },
  
    /**
     * Gets page data by the given URL path.
     *
     * @param {String} path URL path.
     * @returns {*} Page data.
     */
    getPage: function getPage(path) {
      return path in pages ? pages[path] : {
        title: 'Page Not Found',
        type: 'notfound'
      };
    },
  
    /**
     * Emits change event to all registered event listeners.
     *
     * @returns {Boolean} Indication if we've emitted an event.
     */
    emitChange: function emitChange() {
      return this.emit(CHANGE_EVENT);
    },
  
    /**
     * Register a new change event listener.
     *
     * @param {function} callback Callback function.
     */
    onChange: function onChange(callback) {
      this.on(CHANGE_EVENT, callback);
    },
  
    /**
     * Remove change event listener.
     *
     * @param {function} callback Callback function.
     */
    off: function off(callback) {
      this.off(CHANGE_EVENT, callback);
    }
  
  });
  
  AppStore.dispatcherToken = _Dispatcher2['default'].register(function (payload) {
    var action = payload.action;
  
    switch (action.actionType) {
  
      case _ActionTypes2['default'].LOAD_PAGE:
        if (action.source === _PayloadSources2['default'].VIEW_ACTION) {
          loading = true;
        } else {
          loading = false;
          if (!action.err) {
            pages[action.path] = action.page;
          }
        }
        AppStore.emitChange();
        break;
  
      default:
      // Do nothing
  
    }
  });
  
  exports['default'] = AppStore;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  // 
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(var i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ExecutionEnvironment
   */
  
  /*jslint evil: true */
  
  "use strict";
  
  var canUseDOM = !!(
    (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
  );
  
  /**
   * Simple, lightweight module assisting with the detection and context of
   * Worker. Helps avoid circular dependencies and allows code to reason about
   * whether or not they are in a Worker, even if they never include the main
   * `ReactWorker` dependency.
   */
  var ExecutionEnvironment = {
  
    canUseDOM: canUseDOM,
  
    canUseWorkers: typeof Worker !== 'undefined',
  
    canUseEventListeners:
      canUseDOM && !!(window.addEventListener || window.attachEvent),
  
    canUseViewport: canUseDOM && !!window.screen,
  
    isInWorker: !canUseDOM // For now, this is true - might change in the future.
  
  };
  
  module.exports = ExecutionEnvironment;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule invariant
   */
  
  "use strict";
  
  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */
  
  var invariant = function(condition, format, a, b, c, d, e, f) {
    if (true) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }
  
    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          'Invariant Violation: ' +
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
      }
  
      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };
  
  module.exports = invariant;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule keyMirror
   * @typechecks static-only
   */
  
  'use strict';
  
  var invariant = __webpack_require__(9);
  
  /**
   * Constructs an enumeration with keys equal to their value.
   *
   * For example:
   *
   *   var COLORS = keyMirror({blue: null, red: null});
   *   var myColor = COLORS.blue;
   *   var isColorValid = !!COLORS[myColor];
   *
   * The last line could not be performed if the values of the generated enum were
   * not equal to their keys.
   *
   *   Input:  {key1: val1, key2: val2}
   *   Output: {key1: key1, key2: key2}
   *
   * @param {object} obj
   * @return {object}
   */
  var keyMirror = function(obj) {
    var ret = {};
    var key;
    (true ? invariant(
      obj instanceof Object && !Array.isArray(obj),
      'keyMirror(...): Argument must be an object.'
    ) : invariant(obj instanceof Object && !Array.isArray(obj)));
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }
      ret[key] = key;
    }
    return ret;
  };
  
  module.exports = keyMirror;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _Dispatcher = __webpack_require__(3);
  
  var _Dispatcher2 = _interopRequireDefault(_Dispatcher);
  
  var _ActionTypes = __webpack_require__(2);
  
  var _ActionTypes2 = _interopRequireDefault(_ActionTypes);
  
  var _ExecutionEnvironment = __webpack_require__(8);
  
  var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);
  
  var _http = __webpack_require__(28);
  
  var _http2 = _interopRequireDefault(_http);
  
  exports['default'] = {
  
    navigateTo: function navigateTo(path, options) {
      if (_ExecutionEnvironment2['default'].canUseDOM) {
        if (options && options.replace) {
          window.history.replaceState({}, document.title, path);
        } else {
          window.history.pushState({}, document.title, path);
        }
      }
  
      _Dispatcher2['default'].handleViewAction({
        actionType: _ActionTypes2['default'].CHANGE_LOCATION,
        path: path
      });
    },
  
    loadPage: function loadPage(path, cb) {
      _Dispatcher2['default'].handleViewAction({
        actionType: _ActionTypes2['default'].LOAD_PAGE,
        path: path
      });
  
      _http2['default'].get('/api/page' + path).accept('application/json').end(function (err, res) {
        _Dispatcher2['default'].handleServerAction({
          actionType: _ActionTypes2['default'].LOAD_PAGE,
          path: path,
          err: err,
          page: res.body
        });
        if (cb) {
          cb();
        }
      });
    }
  
  };
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  __webpack_require__(17);
  
  var _React$PropTypes = __webpack_require__(1);
  
  var _React$PropTypes2 = _interopRequireDefault(_React$PropTypes);
  
  var _invariant = __webpack_require__(9);
  
  var _invariant2 = _interopRequireDefault(_invariant);
  
  var _AppActions = __webpack_require__(11);
  
  var _AppActions2 = _interopRequireDefault(_AppActions);
  
  var _AppStore = __webpack_require__(6);
  
  var _AppStore2 = _interopRequireDefault(_AppStore);
  
  var _Navbar = __webpack_require__(15);
  
  var _Navbar2 = _interopRequireDefault(_Navbar);
  
  var _ContentPage = __webpack_require__(14);
  
  var _ContentPage2 = _interopRequireDefault(_ContentPage);
  
  var _NotFoundPage = __webpack_require__(16);
  
  var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);
  
  var _setViewport = __webpack_require__(13);
  
  var _setViewport2 = _interopRequireDefault(_setViewport);
  
  var App = (function () {
    function App() {
      _classCallCheck(this, App);
    }
  
    _createClass(App, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('popstate', this.handlePopState);
        window.addEventListener('click', this.handleClick);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('popstate', this.handlePopState);
        window.removeEventListener('click', this.handleClick);
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return this.props.path !== nextProps.path || this.props.viewport !== nextProps.viewport;
      }
    }, {
      key: 'render',
      value: function render() {
        var page = _AppStore2['default'].getPage(this.props.path);
        _invariant2['default'](page !== undefined, 'Failed to load page content.');
        this.props.onSetTitle(page.title);
  
        if (page.type === 'notfound') {
          this.props.onPageNotFound();
          return _React$PropTypes2['default'].createElement(_NotFoundPage2['default'], page);
        }
  
        return _React$PropTypes2['default'].createElement(
          'div',
          { className: 'App' },
          _React$PropTypes2['default'].createElement(_Navbar2['default'], null),
          this.props.path === '/' ? _React$PropTypes2['default'].createElement(
            'div',
            { className: 'jumbotron' },
            _React$PropTypes2['default'].createElement(
              'div',
              { className: 'container text-center' },
              _React$PropTypes2['default'].createElement(
                'h1',
                null,
                'React'
              ),
              _React$PropTypes2['default'].createElement(
                'p',
                null,
                'Complex web apps made easy'
              )
            )
          ) : _React$PropTypes2['default'].createElement(
            'div',
            { className: 'container' },
            _React$PropTypes2['default'].createElement(
              'h2',
              null,
              page.title
            )
          ),
          _React$PropTypes2['default'].createElement(_ContentPage2['default'], _extends({ className: 'container' }, page)),
          _React$PropTypes2['default'].createElement(
            'div',
            { className: 'navbar-footer' },
            _React$PropTypes2['default'].createElement(
              'div',
              { className: 'container' },
              _React$PropTypes2['default'].createElement(
                'p',
                { className: 'text-muted' },
                _React$PropTypes2['default'].createElement(
                  'span',
                  null,
                  '© Your Company'
                ),
                _React$PropTypes2['default'].createElement(
                  'span',
                  null,
                  _React$PropTypes2['default'].createElement(
                    'a',
                    { href: '/' },
                    'Home'
                  )
                ),
                _React$PropTypes2['default'].createElement(
                  'span',
                  null,
                  _React$PropTypes2['default'].createElement(
                    'a',
                    { href: '/privacy' },
                    'Privacy'
                  )
                ),
                _React$PropTypes2['default'].createElement(
                  'span',
                  null,
                  'Viewport: ' + this.props.viewport.width + 'x' + this.props.viewport.height
                )
              )
            )
          )
        );
      }
    }, {
      key: 'handlePopState',
      value: function handlePopState(event) {
        _AppActions2['default'].navigateTo(window.location.pathname, { replace: !!event.state });
      }
    }, {
      key: 'handleClick',
      value: function handleClick(event) {
        if (event.button === 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.defaultPrevented) {
          return;
        }
  
        // Ensure link
        var el = event.target;
        while (el && el.nodeName !== 'A') {
          el = el.parentNode;
        }
        if (!el || el.nodeName !== 'A') {
          return;
        }
  
        // Ignore if tag has
        // 1. "download" attribute
        // 2. rel="external" attribute
        if (el.getAttribute('download') || el.getAttribute('rel') === 'external') {
          return;
        }
  
        // Ensure non-hash for the same path
        var link = el.getAttribute('href');
        if (el.pathname === location.pathname && (el.hash || link === '#')) {
          return;
        }
  
        // Check for mailto: in the href
        if (link && link.indexOf('mailto:') > -1) {
          return;
        }
  
        // Check target
        if (el.target) {
          return;
        }
  
        // X-origin
        var origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        if (!(el.href && el.href.indexOf(origin) === 0)) {
          return;
        }
  
        // Rebuild path
        var path = el.pathname + el.search + (el.hash || '');
  
        event.preventDefault();
        _AppActions2['default'].loadPage(path, function () {
          _AppActions2['default'].navigateTo(path);
        });
      }
    }], [{
      key: 'propTypes',
      value: {
        path: _React$PropTypes.PropTypes.string.isRequired,
        viewport: _React$PropTypes.PropTypes.object.isRequired,
        onSetTitle: _React$PropTypes.PropTypes.func.isRequired,
        onSetMeta: _React$PropTypes.PropTypes.func.isRequired,
        onPageNotFound: _React$PropTypes.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    return App;
  })();
  
  exports['default'] = _setViewport2['default'](App);
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
      property = _x2,
      receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _React$Component = __webpack_require__(1);
  
  var _React$Component2 = _interopRequireDefault(_React$Component);
  
  // eslint-disable-line no-unused-vars
  
  var _canUseDOM = __webpack_require__(8);
  
  function setViewport(ComposedComponent) {
    return (function (_Component) {
      function AppViewport() {
        var _this2 = this;
  
        _classCallCheck(this, AppViewport);
  
        _get(Object.getPrototypeOf(AppViewport.prototype), 'constructor', this).call(this);
  
        this.state = {
          viewport: _canUseDOM.canUseDOM ? { width: window.innerWidth, height: window.innerHeight } : { width: 1366, height: 768 } // Default size for server-side rendering
        };
  
        this.handleResize = function () {
          var viewport = { width: window.innerWidth, height: window.innerHeight };
          if (_this2.state.viewport.width !== viewport.width || _this2.state.viewport.height !== viewport.height) {
            _this2.setState({ viewport: viewport });
          }
        };
      }
  
      _inherits(AppViewport, _Component);
  
      _createClass(AppViewport, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          window.addEventListener('resize', this.handleResize);
          window.addEventListener('orientationchange', this.handleResize);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.handleResize);
          window.removeEventListener('orientationchange', this.handleResize);
        }
      }, {
        key: 'render',
        value: function render() {
          return _React$Component2['default'].createElement(ComposedComponent, _extends({}, this.props, { viewport: this.state.viewport }));
        }
      }]);
  
      return AppViewport;
    })(_React$Component.Component);
  }
  
  exports['default'] = setViewport;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  __webpack_require__(18);
  
  var _React$PropTypes = __webpack_require__(1);
  
  var _React$PropTypes2 = _interopRequireDefault(_React$PropTypes);
  
  // eslint-disable-line no-unused-vars
  
  var ContentPage = (function () {
    function ContentPage() {
      _classCallCheck(this, ContentPage);
    }
  
    _createClass(ContentPage, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var className = _props.className;
        var body = _props.body;
        var other = _props.other;
  
        return _React$PropTypes2['default'].createElement('div', _extends({ className: 'ContentPage ' + className,
          dangerouslySetInnerHTML: { __html: body } }, other));
      }
    }], [{
      key: 'propTypes',
      value: {
        body: _React$PropTypes.PropTypes.string.isRequired
      },
      enumerable: true
    }]);
  
    return ContentPage;
  })();
  
  exports['default'] = ContentPage;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
  
  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _React = __webpack_require__(1);
  
  var _React2 = _interopRequireDefault(_React);
  
  // eslint-disable-line no-unused-vars
  
  var Navbar = (function () {
    function Navbar() {
      _classCallCheck(this, Navbar);
    }
  
    _createClass(Navbar, [{
      key: "render",
      value: function render() {
        return _React2["default"].createElement(
          "div",
          { className: "navbar-top", role: "navigation" },
          _React2["default"].createElement(
            "div",
            { className: "container" },
            _React2["default"].createElement(
              "a",
              { className: "navbar-brand row", href: "/" },
              _React2["default"].createElement("img", { src: __webpack_require__(19), width: "38", height: "38", alt: "React" }),
              _React2["default"].createElement(
                "span",
                null,
                "React.js Starter Kit"
              )
            )
          )
        );
      }
    }]);
  
    return Navbar;
  })();
  
  exports["default"] = Navbar;
  module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
  
  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  /*
   * React.js Starter Kit
   * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  //import './NotFoundPage.less';
  
  var _React = __webpack_require__(1);
  
  var _React2 = _interopRequireDefault(_React);
  
  // eslint-disable-line no-unused-vars
  
  var NotFoundPage = (function () {
    function NotFoundPage() {
      _classCallCheck(this, NotFoundPage);
    }
  
    _createClass(NotFoundPage, [{
      key: 'render',
      value: function render() {
        return _React2['default'].createElement(
          'div',
          null,
          _React2['default'].createElement(
            'h1',
            null,
            'Page Not Found'
          ),
          _React2['default'].createElement(
            'p',
            null,
            'Sorry, but the page you were trying to view does not exist.'
          )
        );
      }
    }]);
  
    return NotFoundPage;
  })();
  
  exports['default'] = NotFoundPage;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(7)();
  exports.push([module.id, "/*\n * React.js Starter Kit\n * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n", ""]);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(7)();
  exports.push([module.id, "/*\n * React.js Starter Kit\n * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n", ""]);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = "data:image/png;base64,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"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("eventemitter3");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("express");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("flux");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("front-matter");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("fs");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("jade");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("lodash");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("path");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = require("superagent");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDgzOGMxYjI2ZTU2MjQ0NTZmMzYiLCJ3ZWJwYWNrOi8vL2Q6L0dpdEh1Yi9yZWFjdCBraXQvc3JjL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9kOi9HaXRIdWIvcmVhY3Qga2l0L3NyYy9jb25zdGFudHMvQWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2Q6L0dpdEh1Yi9yZWFjdCBraXQvc3JjL2NvcmUvRGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy9kOi9HaXRIdWIvcmVhY3Qga2l0L3NyYy9jb25zdGFudHMvUGF5bG9hZFNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vL2Q6L0dpdEh1Yi9yZWFjdCBraXQvc3JjL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9rZXlNaXJyb3IuanMiLCJ3ZWJwYWNrOi8vL2Q6L0dpdEh1Yi9yZWFjdCBraXQvc3JjL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZDovR2l0SHViL3JlYWN0IGtpdC9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzIiwid2VicGFjazovLy9kOi9HaXRIdWIvcmVhY3Qga2l0L3NyYy9jb21wb25lbnRzL0FwcC9zZXRWaWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vZDovR2l0SHViL3JlYWN0IGtpdC9zcmMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS5qcyIsIndlYnBhY2s6Ly8vZDovR2l0SHViL3JlYWN0IGtpdC9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovLy9kOi9HaXRIdWIvcmVhY3Qga2l0L3NyYy9jb21wb25lbnRzL05vdEZvdW5kUGFnZS9Ob3RGb3VuZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2xvZ28tc21hbGwucG5nIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2ZW50ZW1pdHRlcjNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmx1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyb250LW1hdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamFkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdXBlcmFnZW50XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQzlCYyxFQUFROzs7O2dDQUNQLEVBQUk7Ozs7a0NBQ0YsRUFBTTs7OztxQ0FDSCxFQUFTOzs7O21DQUNYLENBQU87Ozs7d0NBQ0YsQ0FBbUI7Ozs7eUNBQ2xCLENBQXlCOzs7O3NDQUM1QixDQUFtQjs7OztBQUV4QyxN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WUFBWTthQUFaLFlBQVk7NEJBQVosWUFBWTs7O2lCQUFaLFlBQVk7O2FBRVYsa0JBQUc7QUFDUCxlQUNFOzs7VUFDRTs7OztXQUF1QjtVQUN2Qjs7OztXQUFrRTtTQUM5RCxDQUNOO09BQ0g7OztXQVRHLFlBQVk7Ozt1QkFhSCxZQUFZOzs7Ozs7O0FDeEIzQjtBQUNBLGlSOzs7Ozs7QUNEQTtBQUNBLGlSOzs7Ozs7QUNEQSxtQ0FBaUMsNHNIOzs7Ozs7QUNBakMsNEM7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSx5QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDgzOGMxYjI2ZTU2MjQ0NTZmMzZcbiAqKi8iLCIvKlxuICogUmVhY3QuanMgU3RhcnRlciBLaXRcbiAqIENvcHlyaWdodCAoYykgMjAxNCBLb25zdGFudGluIFRhcmt1cyAoQGtvaXN0eWEpLCBLcmlhU29mdCBMTEMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlzcGF0Y2hlciBmcm9tICcuL2NvcmUvRGlzcGF0Y2hlcic7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4vc3RvcmVzL0FwcFN0b3JlJztcblxudmFyIHNlcnZlciA9IGV4cHJlc3MoKTtcblxuc2VydmVyLnNldCgncG9ydCcsIChwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDApKTtcbnNlcnZlci51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSkpKTtcblxuLy9cbi8vIFBhZ2UgQVBJXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc2VydmVyLmdldCgnL2FwaS9wYWdlLyonLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICB2YXIgdXJsUGF0aCA9IHJlcS5wYXRoLnN1YnN0cig5KTtcbiAgdmFyIHBhZ2UgPSBBcHBTdG9yZS5nZXRQYWdlKHVybFBhdGgpO1xuICByZXMuc2VuZChwYWdlKTtcbn0pO1xuXG4vL1xuLy8gU2VydmVyLXNpZGUgcmVuZGVyaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGUgdG9wLWxldmVsIFJlYWN0IGNvbXBvbmVudCArIEhUTUwgdGVtcGxhdGUgZm9yIGl0XG52YXIgQXBwID0gUmVhY3QuY3JlYXRlRmFjdG9yeShyZXF1aXJlKCcuL2NvbXBvbmVudHMvQXBwJykpO1xudmFyIHRlbXBsYXRlRmlsZSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICd0ZW1wbGF0ZXMvaW5kZXguaHRtbCcpO1xudmFyIHRlbXBsYXRlID0gXy50ZW1wbGF0ZShmcy5yZWFkRmlsZVN5bmModGVtcGxhdGVGaWxlLCAndXRmOCcpKTtcblxuc2VydmVyLmdldCgnKicsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIHZhciBkYXRhID0ge2Rlc2NyaXB0aW9uOiAnJ307XG4gIHZhciBhcHAgPSBuZXcgQXBwKHtcbiAgICBwYXRoOiByZXEucGF0aCxcbiAgICBvblNldFRpdGxlOiBmdW5jdGlvbih0aXRsZSkgeyBkYXRhLnRpdGxlID0gdGl0bGU7IH0sXG4gICAgb25TZXRNZXRhOiBmdW5jdGlvbihuYW1lLCBjb250ZW50KSB7IGRhdGFbbmFtZV0gPSBjb250ZW50OyB9LFxuICAgIG9uUGFnZU5vdEZvdW5kOiBmdW5jdGlvbigpIHsgcmVzLnN0YXR1cyg0MDQpOyB9XG4gIH0pO1xuICBkYXRhLmJvZHkgPSBSZWFjdC5yZW5kZXJUb1N0cmluZyhhcHApO1xuICB2YXIgaHRtbCA9IHRlbXBsYXRlKGRhdGEpO1xuICByZXMuc2VuZChodG1sKTtcbn0pO1xuXG4vLyBMb2FkIHBhZ2VzIGZyb20gdGhlIGAvc3JjL2NvbnRlbnQvYCBmb2xkZXIgaW50byB0aGUgQXBwU3RvcmVcbihmdW5jdGlvbigpIHtcbiAgdmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG4gIHZhciBmbSA9IHJlcXVpcmUoJ2Zyb250LW1hdHRlcicpO1xuICB2YXIgamFkZSA9IHJlcXVpcmUoJ2phZGUnKTtcbiAgdmFyIHNvdXJjZURpciA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NvbnRlbnQnKTtcbiAgdmFyIGdldEZpbGVzID0gZnVuY3Rpb24oZGlyKSB7XG4gICAgdmFyIHBhZ2VzID0gW107XG4gICAgZnMucmVhZGRpclN5bmMoZGlyKS5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIHZhciBzdGF0ID0gZnMuc3RhdFN5bmMocGF0aC5qb2luKGRpciwgZmlsZSkpO1xuICAgICAgaWYgKHN0YXQgJiYgc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KGdldEZpbGVzKGZpbGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGZpbGUgdG8gYSBQYWdlIG9iamVjdFxuICAgICAgICB2YXIgZmlsZW5hbWUgPSBwYXRoLmpvaW4oZGlyLCBmaWxlKTtcbiAgICAgICAgdmFyIHVybCA9IGZpbGVuYW1lLlxuICAgICAgICAgIHN1YnN0cihzb3VyY2VEaXIubGVuZ3RoLCBmaWxlbmFtZS5sZW5ndGggLSBzb3VyY2VEaXIubGVuZ3RoIC0gNSlcbiAgICAgICAgICAucmVwbGFjZSgnXFxcXCcsICcvJyk7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZignL2luZGV4JywgdXJsLmxlbmd0aCAtIDYpICE9PSAtMSkge1xuICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtICh1cmwubGVuZ3RoID4gNiA/IDYgOiA1KSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBmbShzb3VyY2UpO1xuICAgICAgICB2YXIgaHRtbCA9IGphZGUucmVuZGVyKGNvbnRlbnQuYm9keSwgbnVsbCwgJyAgJyk7XG4gICAgICAgIHZhciBwYWdlID0gYXNzaWduKHt9LCB7cGF0aDogdXJsLCBib2R5OiBodG1sfSwgY29udGVudC5hdHRyaWJ1dGVzKTtcbiAgICAgICAgRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuICAgICAgICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGVzLkxPQURfUEFHRSxcbiAgICAgICAgICBwYXRoOiB1cmwsXG4gICAgICAgICAgcGFnZTogcGFnZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFnZXM7XG4gIH07XG4gIHJldHVybiBnZXRGaWxlcyhzb3VyY2VEaXIpO1xufSkoKTtcblxuc2VydmVyLmxpc3RlbihzZXJ2ZXIuZ2V0KCdwb3J0JyksIGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5zZW5kKSB7XG4gICAgcHJvY2Vzcy5zZW5kKCdvbmxpbmUnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnVGhlIHNlcnZlciBpcyBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JyArIHNlcnZlci5nZXQoJ3BvcnQnKSk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZDovR2l0SHViL3JlYWN0IGtpdC9+L2VzbGludC1sb2FkZXIhZDovR2l0SHViL3JlYWN0IGtpdC9zcmMvc2VydmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICogUmVhY3QuanMgU3RhcnRlciBLaXRcbiAqIENvcHlyaWdodCAoYykgMjAxNCBLb25zdGFudGluIFRhcmt1cyAoQGtvaXN0eWEpLCBLcmlhU29mdCBMTEMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBrZXlNaXJyb3IgZnJvbSAncmVhY3QvbGliL2tleU1pcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGtleU1pcnJvcih7XG5cbiAgTE9BRF9QQUdFOiBudWxsLFxuICBMT0FEX1BBR0VfU1VDQ0VTUzogbnVsbCxcbiAgTE9BRF9QQUdFX0VSUk9SOiBudWxsLFxuICBDSEFOR0VfTE9DQVRJT046IG51bGxcblxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBkOi9HaXRIdWIvcmVhY3Qga2l0L34vZXNsaW50LWxvYWRlciFkOi9HaXRIdWIvcmVhY3Qga2l0L3NyYy9jb25zdGFudHMvQWN0aW9uVHlwZXMuanNcbiAqKi8iLCIvKlxuICogUmVhY3QuanMgU3RhcnRlciBLaXRcbiAqIENvcHlyaWdodCAoYykgMjAxNCBLb25zdGFudGluIFRhcmt1cyAoQGtvaXN0eWEpLCBLcmlhU29mdCBMTEMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnO1xuaW1wb3J0IFBheWxvYWRTb3VyY2VzIGZyb20gJy4uL2NvbnN0YW50cy9QYXlsb2FkU291cmNlcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJztcblxuLyoqXG4gKiBBIHNpbmdsZXRvbiB0aGF0IG9wZXJhdGVzIGFzIHRoZSBjZW50cmFsIGh1YiBmb3IgYXBwbGljYXRpb24gdXBkYXRlcy5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0IGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2ZsdXgvXG4gKi9cbmxldCBEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uIFRoZSBkZXRhaWxzIG9mIHRoZSBhY3Rpb24sIGluY2x1ZGluZyB0aGUgYWN0aW9uJ3NcbiAgICogdHlwZSBhbmQgYWRkaXRpb25hbCBkYXRhIGNvbWluZyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBoYW5kbGVTZXJ2ZXJBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICBzb3VyY2U6IFBheWxvYWRTb3VyY2VzLlNFUlZFUl9BQ1RJT04sXG4gICAgICBhY3Rpb246IGFjdGlvblxuICAgIH07XG4gICAgdGhpcy5kaXNwYXRjaChwYXlsb2FkKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbiBUaGUgZGV0YWlscyBvZiB0aGUgYWN0aW9uLCBpbmNsdWRpbmcgdGhlIGFjdGlvbidzXG4gICAqIHR5cGUgYW5kIGFkZGl0aW9uYWwgZGF0YSBjb21pbmcgZnJvbSB0aGUgdmlldy5cbiAgICovXG4gIGhhbmRsZVZpZXdBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICBzb3VyY2U6IFBheWxvYWRTb3VyY2VzLlZJRVdfQUNUSU9OLFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9O1xuICAgIHRoaXMuZGlzcGF0Y2gocGF5bG9hZCk7XG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BhdGNoZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBkOi9HaXRIdWIvcmVhY3Qga2l0L34vZXNsaW50LWxvYWRlciFkOi9HaXRIdWIvcmVhY3Qga2l0L3NyYy9jb3JlL0Rpc3BhdGNoZXIuanNcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgT2JqZWN0LmFzc2lnblxuICovXG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QuYXNzaWduXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlcykge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIHRhcmdldCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZvciAodmFyIG5leHRJbmRleCA9IDE7IG5leHRJbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IG5leHRJbmRleCsrKSB7XG4gICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbbmV4dEluZGV4XTtcbiAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgZnJvbSA9IE9iamVjdChuZXh0U291cmNlKTtcblxuICAgIC8vIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IGFjY2Vzc29ycyBub3IgcHJveGllcy4gVGhlcmVmb3JlIHRoaXNcbiAgICAvLyBjb3B5IGNhbm5vdCB0aHJvdy4gSWYgd2UgZXZlciBzdXBwb3J0ZWQgdGhpcyB0aGVuIHdlIG11c3QgaGFuZGxlXG4gICAgLy8gZXhjZXB0aW9ucyBhbmQgc2lkZS1lZmZlY3RzLiBXZSBkb24ndCBzdXBwb3J0IHN5bWJvbHMgc28gdGhleSB3b24ndFxuICAgIC8vIGJlIHRyYW5zZmVycmVkLlxuXG4gICAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICogUmVhY3QuanMgU3RhcnRlciBLaXRcbiAqIENvcHlyaWdodCAoYykgMjAxNCBLb25zdGFudGluIFRhcmt1cyAoQGtvaXN0eWEpLCBLcmlhU29mdCBMTEMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBrZXlNaXJyb3IgZnJvbSAncmVhY3QvbGliL2tleU1pcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGtleU1pcnJvcih7XG5cbiAgVklFV19BQ1RJT046IG51bGwsXG4gIFNFUlZFUl9BQ1RJT046IG51bGxcblxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBkOi9HaXRIdWIvcmVhY3Qga2l0L34vZXNsaW50LWxvYWRlciFkOi9HaXRIdWIvcmVhY3Qga2l0L3NyYy9jb25zdGFudHMvUGF5bG9hZFNvdXJjZXMuanNcbiAqKi8iLCIvKlxuICogUmVhY3QuanMgU3RhcnRlciBLaXRcbiAqIENvcHlyaWdodCAoYykgMjAxNCBLb25zdGFudGluIFRhcmt1cyAoQGtvaXN0eWEpLCBLcmlhU29mdCBMTEMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBEaXNwYXRjaGVyIGZyb20gJy4uL2NvcmUvRGlzcGF0Y2hlcic7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcbmltcG9ydCBQYXlsb2FkU291cmNlcyBmcm9tICcuLi9jb25zdGFudHMvUGF5bG9hZFNvdXJjZXMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCBhc3NpZ24gZnJvbSAncmVhY3QvbGliL09iamVjdC5hc3NpZ24nO1xuXG52YXIgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbnZhciBwYWdlcyA9IHt9O1xudmFyIGxvYWRpbmcgPSBmYWxzZTtcblxuaWYgKF9fU0VSVkVSX18pIHtcbiAgcGFnZXNbJy8nXSA9IHt0aXRsZTogJ0hvbWUgUGFnZSd9O1xuICBwYWdlc1snL3ByaXZhY3knXSA9IHt0aXRsZTogJ1ByaXZhY3kgUG9saWN5J307XG59XG5cbnZhciBBcHBTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gIGlzTG9hZGluZygpIHtcbiAgICByZXR1cm4gbG9hZGluZztcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyBwYWdlIGRhdGEgYnkgdGhlIGdpdmVuIFVSTCBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBVUkwgcGF0aC5cbiAgICogQHJldHVybnMgeyp9IFBhZ2UgZGF0YS5cbiAgICovXG4gIGdldFBhZ2UocGF0aCkge1xuICAgIHJldHVybiBwYXRoIGluIHBhZ2VzID8gcGFnZXNbcGF0aF0gOiB7XG4gICAgICB0aXRsZTogJ1BhZ2UgTm90IEZvdW5kJyxcbiAgICAgIHR5cGU6ICdub3Rmb3VuZCdcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbWl0cyBjaGFuZ2UgZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSW5kaWNhdGlvbiBpZiB3ZSd2ZSBlbWl0dGVkIGFuIGV2ZW50LlxuICAgKi9cbiAgZW1pdENoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IGNoYW5nZSBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICBvbkNoYW5nZShjYWxsYmFjaykge1xuICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjaGFuZ2UgZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2ZmKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vZmYoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gIH1cblxufSk7XG5cbkFwcFN0b3JlLmRpc3BhdGNoZXJUb2tlbiA9IERpc3BhdGNoZXIucmVnaXN0ZXIoKHBheWxvYWQpID0+IHtcbiAgdmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uO1xuXG4gIHN3aXRjaCAoYWN0aW9uLmFjdGlvblR5cGUpIHtcblxuICAgIGNhc2UgQWN0aW9uVHlwZXMuTE9BRF9QQUdFOlxuICAgICAgaWYgKGFjdGlvbi5zb3VyY2UgPT09IFBheWxvYWRTb3VyY2VzLlZJRVdfQUNUSU9OKSB7XG4gICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoIWFjdGlvbi5lcnIpIHtcbiAgICAgICAgICBwYWdlc1thY3Rpb24ucGF0aF0gPSBhY3Rpb24ucGFnZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQXBwU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gRG8gbm90aGluZ1xuXG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZDovR2l0SHViL3JlYWN0IGtpdC9+L2VzbGludC1sb2FkZXIhZDovR2l0SHViL3JlYWN0IGtpdC9zcmMvc3RvcmVzL0FwcFN0b3JlLmpzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxuLy8gXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXhlY3V0aW9uRW52aXJvbm1lbnRcbiAqL1xuXG4vKmpzbGludCBldmlsOiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FuVXNlRE9NID0gISEoXG4gICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpXG4pO1xuXG4vKipcbiAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQgbW9kdWxlIGFzc2lzdGluZyB3aXRoIHRoZSBkZXRlY3Rpb24gYW5kIGNvbnRleHQgb2ZcbiAqIFdvcmtlci4gSGVscHMgYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFuZCBhbGxvd3MgY29kZSB0byByZWFzb24gYWJvdXRcbiAqIHdoZXRoZXIgb3Igbm90IHRoZXkgYXJlIGluIGEgV29ya2VyLCBldmVuIGlmIHRoZXkgbmV2ZXIgaW5jbHVkZSB0aGUgbWFpblxuICogYFJlYWN0V29ya2VyYCBkZXBlbmRlbmN5LlxuICovXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cbiAgY2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgY2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG4gICAgY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvaW52YXJpYW50LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGtleU1pcnJvclxuICogQHR5cGVjaGVja3Mgc3RhdGljLW9ubHlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKFwiLi9pbnZhcmlhbnRcIik7XG5cbi8qKlxuICogQ29uc3RydWN0cyBhbiBlbnVtZXJhdGlvbiB3aXRoIGtleXMgZXF1YWwgdG8gdGhlaXIgdmFsdWUuXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogICB2YXIgQ09MT1JTID0ga2V5TWlycm9yKHtibHVlOiBudWxsLCByZWQ6IG51bGx9KTtcbiAqICAgdmFyIG15Q29sb3IgPSBDT0xPUlMuYmx1ZTtcbiAqICAgdmFyIGlzQ29sb3JWYWxpZCA9ICEhQ09MT1JTW215Q29sb3JdO1xuICpcbiAqIFRoZSBsYXN0IGxpbmUgY291bGQgbm90IGJlIHBlcmZvcm1lZCBpZiB0aGUgdmFsdWVzIG9mIHRoZSBnZW5lcmF0ZWQgZW51bSB3ZXJlXG4gKiBub3QgZXF1YWwgdG8gdGhlaXIga2V5cy5cbiAqXG4gKiAgIElucHV0OiAge2tleTE6IHZhbDEsIGtleTI6IHZhbDJ9XG4gKiAgIE91dHB1dDoge2tleTE6IGtleTEsIGtleTI6IGtleTJ9XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG52YXIga2V5TWlycm9yID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgdmFyIGtleTtcbiAgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViA/IGludmFyaWFudChcbiAgICBvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgIUFycmF5LmlzQXJyYXkob2JqKSxcbiAgICAna2V5TWlycm9yKC4uLik6IEFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0LidcbiAgKSA6IGludmFyaWFudChvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgIUFycmF5LmlzQXJyYXkob2JqKSkpO1xuICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSBrZXk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5TWlycm9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL2tleU1pcnJvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICogUmVhY3QuanMgU3RhcnRlciBLaXRcbiAqIENvcHlyaWdodCAoYykgMjAxNCBLb25zdGFudGluIFRhcmt1cyAoQGtvaXN0eWEpLCBLcmlhU29mdCBMTEMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBEaXNwYXRjaGVyIGZyb20gJy4uL2NvcmUvRGlzcGF0Y2hlcic7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcbmltcG9ydCBFeGVjdXRpb25FbnZpcm9ubWVudCBmcm9tICdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IGh0dHAgZnJvbSAnc3VwZXJhZ2VudCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBuYXZpZ2F0ZVRvKHBhdGgsIG9wdGlvbnMpIHtcbiAgICBpZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlcGxhY2UpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgcGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZXMuQ0hBTkdFX0xPQ0FUSU9OLFxuICAgICAgcGF0aFxuICAgIH0pO1xuICB9LFxuXG4gIGxvYWRQYWdlKHBhdGgsIGNiKSB7XG4gICAgRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGVzLkxPQURfUEFHRSxcbiAgICAgIHBhdGhcbiAgICB9KTtcblxuICAgIGh0dHAuZ2V0KCcvYXBpL3BhZ2UnICsgcGF0aClcbiAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuICAgICAgICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGVzLkxPQURfUEFHRSxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYWdlOiByZXMuYm9keVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGQ6L0dpdEh1Yi9yZWFjdCBraXQvfi9lc2xpbnQtbG9hZGVyIWQ6L0dpdEh1Yi9yZWFjdCBraXQvc3JjL2FjdGlvbnMvQXBwQWN0aW9ucy5qc1xuICoqLyIsIi8qXG4gKiBSZWFjdC5qcyBTdGFydGVyIEtpdFxuICogQ29weXJpZ2h0IChjKSAyMDE0IEtvbnN0YW50aW4gVGFya3VzIChAa29pc3R5YSksIEtyaWFTb2Z0IExMQy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0ICcuL0FwcC5sZXNzJztcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3JlYWN0L2xpYi9pbnZhcmlhbnQnO1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9OYXZiYXInO1xuaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4uL0NvbnRlbnRQYWdlJztcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi4vTm90Rm91bmRQYWdlJztcbmltcG9ydCBzZXRWaWV3cG9ydCBmcm9tICcuL3NldFZpZXdwb3J0JztcblxuY2xhc3MgQXBwIHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2aWV3cG9ydDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG9uU2V0VGl0bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25TZXRNZXRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUGFnZU5vdEZvdW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5oYW5kbGVQb3BTdGF0ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmhhbmRsZVBvcFN0YXRlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wYXRoICE9PSBuZXh0UHJvcHMucGF0aCB8fFxuICAgICAgICAgICB0aGlzLnByb3BzLnZpZXdwb3J0ICE9PSBuZXh0UHJvcHMudmlld3BvcnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhZ2UgPSBBcHBTdG9yZS5nZXRQYWdlKHRoaXMucHJvcHMucGF0aCk7XG4gICAgaW52YXJpYW50KHBhZ2UgIT09IHVuZGVmaW5lZCwgJ0ZhaWxlZCB0byBsb2FkIHBhZ2UgY29udGVudC4nKTtcbiAgICB0aGlzLnByb3BzLm9uU2V0VGl0bGUocGFnZS50aXRsZSk7XG5cbiAgICBpZiAocGFnZS50eXBlID09PSAnbm90Zm91bmQnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUGFnZU5vdEZvdW5kKCk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChOb3RGb3VuZFBhZ2UsIHBhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnBhdGggPT09ICcvJyA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMT5SZWFjdDwvaDE+XG4gICAgICAgICAgICAgIDxwPkNvbXBsZXggd2ViIGFwcHMgbWFkZSBlYXN5PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyPntwYWdlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPENvbnRlbnRQYWdlIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHsuLi5wYWdlfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1mb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICA8c3Bhbj7CqSBZb3VyIENvbXBhbnk8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIvcHJpdmFjeVwiPlByaXZhY3k8L2E+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57J1ZpZXdwb3J0OiAnICsgdGhpcy5wcm9wcy52aWV3cG9ydC53aWR0aCArICd4JyArIHRoaXMucHJvcHMudmlld3BvcnQuaGVpZ2h0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICBBcHBBY3Rpb25zLm5hdmlnYXRlVG8od2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCB7cmVwbGFjZTogISFldmVudC5zdGF0ZX0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAxIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIGxpbmtcbiAgICB2YXIgZWwgPSBldmVudC50YXJnZXQ7XG4gICAgd2hpbGUgKGVsICYmIGVsLm5vZGVOYW1lICE9PSAnQScpIHtcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgaWYgKCFlbCB8fCBlbC5ub2RlTmFtZSAhPT0gJ0EnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIGlmIHRhZyBoYXNcbiAgICAvLyAxLiBcImRvd25sb2FkXCIgYXR0cmlidXRlXG4gICAgLy8gMi4gcmVsPVwiZXh0ZXJuYWxcIiBhdHRyaWJ1dGVcbiAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdkb3dubG9hZCcpIHx8IGVsLmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgbm9uLWhhc2ggZm9yIHRoZSBzYW1lIHBhdGhcbiAgICB2YXIgbGluayA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmIChlbC5wYXRobmFtZSA9PT0gbG9jYXRpb24ucGF0aG5hbWUgJiYgKGVsLmhhc2ggfHwgbGluayA9PT0gJyMnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBtYWlsdG86IGluIHRoZSBocmVmXG4gICAgaWYgKGxpbmsgJiYgbGluay5pbmRleE9mKCdtYWlsdG86JykgPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRhcmdldFxuICAgIGlmIChlbC50YXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBYLW9yaWdpblxuICAgIHZhciBvcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICtcbiAgICAgICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0IDogJycpO1xuICAgIGlmICghKGVsLmhyZWYgJiYgZWwuaHJlZi5pbmRleE9mKG9yaWdpbikgPT09IDApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVidWlsZCBwYXRoXG4gICAgdmFyIHBhdGggPSBlbC5wYXRobmFtZSArIGVsLnNlYXJjaCArIChlbC5oYXNoIHx8ICcnKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgQXBwQWN0aW9ucy5sb2FkUGFnZShwYXRoLCAoKSA9PiB7XG4gICAgICBBcHBBY3Rpb25zLm5hdmlnYXRlVG8ocGF0aCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRWaWV3cG9ydChBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZDovR2l0SHViL3JlYWN0IGtpdC9+L2VzbGludC1sb2FkZXIhZDovR2l0SHViL3JlYWN0IGtpdC9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzXG4gKiovIiwiLypcbiAqIFJlYWN0LmpzIFN0YXJ0ZXIgS2l0XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgS29uc3RhbnRpbiBUYXJrdXMgKEBrb2lzdHlhKSwgS3JpYVNvZnQgTExDLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgeyBjYW5Vc2VET00gfSBmcm9tICdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnO1xuXG5mdW5jdGlvbiBzZXRWaWV3cG9ydChDb21wb3NlZENvbXBvbmVudCkge1xuICByZXR1cm4gY2xhc3MgQXBwVmlld3BvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB2aWV3cG9ydDogY2FuVXNlRE9NID9cbiAgICAgICAgICB7d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH0gOlxuICAgICAgICAgIHt3aWR0aDogMTM2NiwgaGVpZ2h0OiA3Njh9IC8vIERlZmF1bHQgc2l6ZSBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZpZXdwb3J0ID0ge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9O1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aWV3cG9ydC53aWR0aCAhPT0gdmlld3BvcnQud2lkdGggfHxcbiAgICAgICAgICB0aGlzLnN0YXRlLnZpZXdwb3J0LmhlaWdodCAhPT0gdmlld3BvcnQuaGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlld3BvcnQ6IHZpZXdwb3J0fSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB2aWV3cG9ydD17dGhpcy5zdGF0ZS52aWV3cG9ydH0vPjtcbiAgICB9XG5cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0Vmlld3BvcnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBkOi9HaXRIdWIvcmVhY3Qga2l0L34vZXNsaW50LWxvYWRlciFkOi9HaXRIdWIvcmVhY3Qga2l0L3NyYy9jb21wb25lbnRzL0FwcC9zZXRWaWV3cG9ydC5qc1xuICoqLyIsIi8qXG4gKiBSZWFjdC5qcyBTdGFydGVyIEtpdFxuICogQ29weXJpZ2h0IChjKSAyMDE0IEtvbnN0YW50aW4gVGFya3VzIChAa29pc3R5YSksIEtyaWFTb2Z0IExMQy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0ICcuL0NvbnRlbnRQYWdlLmxlc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5jbGFzcyBDb250ZW50UGFnZSB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBib2R5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHsgY2xhc3NOYW1lLCBib2R5LCBvdGhlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J0NvbnRlbnRQYWdlICcgKyBjbGFzc05hbWV9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBib2R5fX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGQ6L0dpdEh1Yi9yZWFjdCBraXQvfi9lc2xpbnQtbG9hZGVyIWQ6L0dpdEh1Yi9yZWFjdCBraXQvc3JjL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UuanNcbiAqKi8iLCIvKlxuICogUmVhY3QuanMgU3RhcnRlciBLaXRcbiAqIENvcHlyaWdodCAoYykgMjAxNCBLb25zdGFudGluIFRhcmt1cyAoQGtvaXN0eWEpLCBLcmlhU29mdCBMTEMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuY2xhc3MgTmF2YmFyIHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXRvcFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIHJvd1wiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi9sb2dvLXNtYWxsLnBuZycpfSB3aWR0aD1cIjM4XCIgaGVpZ2h0PVwiMzhcIiBhbHQ9XCJSZWFjdFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5SZWFjdC5qcyBTdGFydGVyIEtpdDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGQ6L0dpdEh1Yi9yZWFjdCBraXQvfi9lc2xpbnQtbG9hZGVyIWQ6L0dpdEh1Yi9yZWFjdCBraXQvc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc1xuICoqLyIsIi8qXG4gKiBSZWFjdC5qcyBTdGFydGVyIEtpdFxuICogQ29weXJpZ2h0IChjKSAyMDE0IEtvbnN0YW50aW4gVGFya3VzIChAa29pc3R5YSksIEtyaWFTb2Z0IExMQy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy9pbXBvcnQgJy4vTm90Rm91bmRQYWdlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5jbGFzcyBOb3RGb3VuZFBhZ2Uge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlBhZ2UgTm90IEZvdW5kPC9oMT5cbiAgICAgICAgPHA+U29ycnksIGJ1dCB0aGUgcGFnZSB5b3Ugd2VyZSB0cnlpbmcgdG8gdmlldyBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmRQYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZDovR2l0SHViL3JlYWN0IGtpdC9+L2VzbGludC1sb2FkZXIhZDovR2l0SHViL3JlYWN0IGtpdC9zcmMvY29tcG9uZW50cy9Ob3RGb3VuZFBhZ2UvTm90Rm91bmRQYWdlLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAqIFJlYWN0LmpzIFN0YXJ0ZXIgS2l0XFxuICogQ29weXJpZ2h0IChjKSAyMDE0IEtvbnN0YW50aW4gVGFya3VzIChAa29pc3R5YSksIEtyaWFTb2Z0IExMQy5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5sZXNzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gKiBSZWFjdC5qcyBTdGFydGVyIEtpdFxcbiAqIENvcHlyaWdodCAoYykgMjAxNCBLb25zdGFudGluIFRhcmt1cyAoQGtvaXN0eWEpLCBLcmlhU29mdCBMTEMuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLmxlc3NcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1lBQUFBbUNBWUFBQUNvUGVtdUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFDclJKUkVGVWVOcWNXQWxRbEZjU25vc0JobUZtQkFhVkcwUkFFQlFWVVVoMmpSS2ppS0pHRWZGRThZaXNHa3cwNjZycm1kMm81YldhYUl5YVF1TVJvL0VBaVJHOFNvanh3QU1GRVFXRWtVTVlrQmxtbUh0bXUvLzlmK3J0WHpoRlFsWFhQTjdyMTkydlgvZlgvWDQreC80ZkY0Z0h4QWNTQURuUXZ3SjZqa3NUaHhoejZUVSt6VS91NFJIOGR2LzQzVENLTVVoSWt5UDl5MmNaeCtaM1pQR1RoL25UaHBGS0dPRk9CQWxwNVh5YWorMVZodCtaNE8vS01OdTdEQlBZTVpveERKVTRpNzM5eGUvOTYrQklCMWVwWEZ0Zis3cDR4OXA3cXVvS0xheVpnVXhBRnVLdzFQVkpBME5jQm4rMkpjYkZ5OC9IMUs1cUx2ekh3bXVhdWhvTmJSd2FaYVdwUzgrOHk1TkMrclNpUGhQU2ZPTTJmM05ZNE93U3pqQllMZWEzYlJXbGgzNmRsM2hjMzlKa0pCVHduTnc5aFI4ZHlac2hDNG5JNFBFRlBaZzlacDIyN1BiNnBSa3Z6eCtyaFg4N2dQUkFSdUpRZHErU3VVWkhta1NqRCtkdUFrOUZsaC9mbjFtd2VOSjJMcGRiaUI2VUJ2U2RFelo5NFFoUStLejU4VjMwbW5QNDdMLzFIYlgvN0Q1eGI5L3hIVTBOMXl0K1BQVFYxY3dwMi9sQ3gwSjU5TENwbnRHeDNxVkhkbCtsamJIU0hyZDF4Mk5jMmxzWUh5SlpuekMzaVpjZTMzbjcvRW4yaGVRaGgwblh4NjdkTlRoazZyeU5QQWNIU1ZuMjNpMDRGejVuNlZxcnlhU3UrT25JK2p0YnNvckowSmlZODJDK3JHL0VuUFBqQnNTMlZaYTMwbDdUMFY2enNlUElMa3lFcE13UDRQSjRvcGJTaHcvcDB4bHBNb0hpa2l2enh5MHp0TFVxSXVZdTM0aUVZNXpETlRyMkdINHplUFVoeWdwSnlRZ2tFb2Y3cmdCL2wyR1VjYzRlUGFrWTBiNnBhNmRQeFFRdHJndmUzQy9Vdnpqei9VVXVuKytJOVB6SFF4ZHdqazRjTHMxTDdldG9ia1FaSEdjUFR4bGhGUGVQWkdVblNKcDFIZFNFazh4ZHl1S25zaTh3TWNVL0l2M1RKUjNORGRVNEdabnhXV2JiaXpKRmRkNXBEV0VjcGN0UjVpYjUzeUhyOVN3Y3RPc3hOc3BUK05WNHY3QU5GeDFsUFhyRGp3dEpyajRCa3JoTlg2KzJtazNHL1BsSis1QndqSE80eHVJWE9jbmNVQVpIV1hKUFF3QzJvS3RyNVhXQjJndzRVci9WT2FmVW9LeGQ3Qk9JVU9FS0pJUHJsUWVObng3NjRlRkxXVUtKektmbDZZUGYrODlmRVlXRVk1ekROZVJCWHR3REpCRjdCL1JEV2JYNUZ6cm81SEprVllaT2U5aTFqVG1GQzIyRUJMQkxPcVdnZkpmQVdTVFZLWnNVenA2OUFoMUVZby91bGhhTUxWT0hScWxyYXF5RzJQS0YwRkNkU1FqTEFvaFJ3Wm9hQ09OT1N5UUp3b2lGU3hSWUlWRnlSS0dwQy9xR3oxNDYyOVV2S0FFd0NFL002WGhUOTdKZFVWMWxVTDFWK1kxTW1xeXByMzF5NjR0NUJ3MXRMVVpOdlFLRmM4UmV2aTZPTW5maCsxdVBMQlI3K1VYV1hzdjkyVkhhUStycUd4Z2s2dWtkakR3V282R3R2YmFxb096bzNxUFBUMzMzZ2dCYkJuRE5mRlp0RS9tT1RQSWNleXgvVTlDNGFldUVVcGwvZTAxbFVYMVJRVUdQME1pWUYyZXpUOS80TkMwL0luMzVNR2Q1VCs5Yks5TzN3VnF6dnFYWmFEVWFyRWd3TmtIWjBhbXJLeW9DazFJU1RKcjJsa3VwZnprRlJ1cmxBMk9IVk9XYzNBOEhiWmNFQkkvMEd6bCtabWhxaHIvNjFjc0h3RzhpczU1UEZGclI4UFY3QncvKy9NdHNCeGZYVU9XVDRvTlhQNW04NWVHZURZVTFWODdWQUtLL0o1TDNsb0MzR3NKblphYlgzYnB5OXVIZVRRL3dTb09TVXYxajEreElESjQwSzhwcU5tdmVWanhWcTJ0ZWRzaWpZbXk5WTBja3FhcWUzd3RKbVRjU01NeWNPeVYrRDFTUW00cHJ1V2ZjdzZQYndNQkpBV00rbmdTeUg3MisrVXN6QVVkVVlIb0hqSjB5ZE00em5YTG1vN2ZQZ2lmT0dndHowVUNERU9DQlJvMCtmQ2w3YnJuQmxIS3pxaFI0V3B6YzVITmhQalY2MmZwdGM1L3BUZWtWSmhzU2pxT1hiOWlPYTNDbGM0QzNHZmZnWHBTQnNtaVpLRHNhZGFGTzFJMDJvQzFvVXljOERNeGNtOExsOGx4di96TnpKUlRaUmhxMTlYVEowQlh2V0pQRHNka3NMcjE5d3hWWGM4N29XNXN4TG14aE14YW5BckIyNGh1T3c5SVdUY00xaUQwZDhQNk1lMkN2dFhqWHVseEdIaTNiaExwUUorcEdHeGo0NkV4UG9hdkUxMkxRMTFWZVBORk05RXBXSmt0YXloNnBkYTFOTDlDNGgzczMvOGJVTmlHMFFldzBKT1pzRkMvc3diMEFKU3BHSGxFUk9LZ1RkWU1OUGt5Mjh4Z0RkTW8zcFFBSi90QS9oYkRRbjhwYXY0UmtMNUZIcjM2QU1QeWhxN2VQWmpCSDE5eFl6VFpNMTlUQXpQRW9YdGdEZThOUVJoZXRPUWQxb202d29ZeUpMeDdUNkVIYW53VnNxUVNRM0RsOHc3NkJkTFpTSFFiK1JpNzRQQm5BMFFDQi9adFhmRUt5ckc4NGxpaE84YzUxUDlDWXhQUmNxdUxkNjQraFV1UUIzZ200Qi9vM1E5U2lWY21rVE5TQnVsQW42a1liNkJCQ215Z21keUMva0tucDhUT0tsWGNnaUMwcE55cHorczFja29iQkNuR1RqRUU4NGR6ZG01RHlXUkNvaHFTZmluN0ZBRWVDOGpNZldxRGRTRGhtNXBFSGVYRVA3Z1VaU3BTRk1sRTI2a0Jkb1BNdTZrWWJhRnRFWEtJa1VKQUJxQzVLUEhrakhVNjdnQ2R3a0VKM1dncWcrZ3FFSndGMDdIejA5WmRsQ1FmT2pmWDlZTnpFMnh1WHJpcy84VzBsMDlTUzlSY2F5Q0R3eGhZQTJITUFPNWNIWnE0SmgyeGQwZnpvVGk2QWJRQjB1UkZ3QXlvbytOL2xUUi94UFZTSERyS3I1UkwzVFQ0NlJOS2dVSStZdjIrYjRCNFJQUWJpb3ovR0NRalNReHpVQUlpK2NROGZHRzlRdGRhVm56eDR3bVkyV3lGTE5WUVg0aVlYY3dVQ0hoaVc1aWgxODRHa0tYUnlsL2VFbXVrUEIzWENST2hRTmo2Ri91N3l2YTlXWFFDTWF5RU1NakJscWF0M29KQytYZ2xOcnFsRml0MEFqa0xvT3A5QVMrMFBXZWNwY0JGN1FEL3ZaSzlJUWx6cHpWcU4wdGl1YW9KcVVBUGRjS1ROYWpXY2l2Zk5JdXFrbWpiTVNEeHFMQUk2S3kyc1Z3dVBLZWpRS1RpQkYvcThLUzQ2L2N2TVVTZklLeHR6TkQrdDk3QVJzeFEzOGs3WEZsd3N4MG0vaEFsaHZpTVNVeHArdjNIczh1d1AvNDkvN1BGcjAzc09pcHNHTWsxR2RadWVxSTk2MmloR3Y0M0h3aXltZFRZd0crQ0ZKTVBPRkFwNEJYMDZGVTNxZ2tVVGoyc2JYNWQ0eHllTWg2N0JadEpxYkRqR3VmeU1wQi9ZL1BEc2U0NnlvQjZMQ0IzTTlabEpiT094SHA4MkFnQXBJejBpQjFOZEo3UThEVFJpTTBHcWd4VFhRV0J2QTNCVXgyM2NseG0vK1p0TUhGTnpSb09PemE5dlZhSU1qbnpBVUFuNzZnajlkbnYrVGdPNVBENzE1b09zMFJLSWJhR0ZtaUNJVzBzT2JqL2dJSlo0SU9FWTUxZ1BZV29QeU5CUmxVRXM0YlBSdjdzOVA3UEJxbTFRb0JLT3hDL0lnMDRROGpGaWdSYklhOEFucTVkWTlEcUtEOGZRL3J4K2VtUlhDNnM3NXRFeU9MUk1LOWxKZFBlVjFGa25TNzdkVmczWjFTWWZFQnRId2dxa3ZoQ0NlVkxNcXEzL3NWbk0ycUsxaTFjVXJsbVVCV1BOa0pYLzNvTnJ5RU8yemg1UlE0ZWpMSkJaeGJyQ2JubU1UQVN6U2R0dTBOWXJ6Z01vemdCbE5WQ0lLOXo2RFFqMmlCcnlNWUJ4Q0FSNjNsVjRuUU5lVWM4cFZlV3o5RkVIenEzc0ZmUCtGMm4zbXlZclMrNmZhWDMyK0tWNy8wRWg0TEdwN2E5ZkhRZVpUTEMvOHpydGZidHdZTDdZeUlMN3VZM0p2ckxWV2Q0cmtma2dZbFM5dlZ0Lys5cWg2OHRTaTRpTTZ2d1k4OEdlazNGZWNhTXloTkllc2N3ZUtQaDUrWXVTVjhQaGxHVHIwOVczQzY2ZGR5WDVTWW5xY3FFSSs4bUN3ejBWMS9OcTRkM1lRZ1M0bWZXMWgra2c4TjNwN3ZQWGovd0E0WnZnQ211SkhzOUE3TFg5RWNQWWIwenlpY1VoSU1YVWxjZUlMNGw4SXFISVR3eDJyNUxmbmVjWEsrN0k3eEZHQW8vTVJFQmJXSWFUZk9SQjNna1gzVEhNU2hoRktqTjFjV29icTdTWkNUTFpBOVEvWXhqYmF4YldyODFPWmx1NzRMVjJSK0YvQlJnQTJFOXhnWHAzeHpnQUFBQUFTVVZPUks1Q1lJST1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbG9nby1zbWFsbC5wbmdcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXZlbnRlbWl0dGVyM1wiXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmbHV4XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmbHV4XCJcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJvbnQtbWF0dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmcm9udC1tYXR0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZnNcIlxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqYWRlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqYWRlXCJcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwYXRoXCJcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3VwZXJhZ2VudFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwic3VwZXJhZ2VudFwiXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=