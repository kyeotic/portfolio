"format register";

System.register("github:aurelia/logging@0.2.1/system/index", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      levels,
      loggers,
      logLevel,
      appenders,
      slice,
      loggerConstructionKey,
      Logger;
  _export("getLogger", getLogger);
  _export("addAppender", addAppender);
  _export("setLevel", setLevel);
  function log(logger, level, args) {
    var i = appenders.length,
        current;
    args = slice.call(args);
    args.unshift(logger);
    while (i--) {
      current = appenders[i];
      current[level].apply(current, args);
    }
  }
  function debug() {
    if (logLevel < 4) {
      return;
    }
    log(this, "debug", arguments);
  }
  function info() {
    if (logLevel < 3) {
      return;
    }
    log(this, "info", arguments);
  }
  function warn() {
    if (logLevel < 2) {
      return;
    }
    log(this, "warn", arguments);
  }
  function error() {
    if (logLevel < 1) {
      return;
    }
    log(this, "error", arguments);
  }
  function connectLogger(logger) {
    logger.debug = debug;
    logger.info = info;
    logger.warn = warn;
    logger.error = error;
  }
  function createLogger(id) {
    var logger = new Logger(id, loggerConstructionKey);
    if (appenders.length) {
      connectLogger(logger);
    }
    return logger;
  }
  function getLogger(id) {
    return loggers[id] || (loggers[id] = createLogger(id));
  }
  function addAppender(appender) {
    appenders.push(appender);
    if (appenders.length === 1) {
      for (var key in loggers) {
        connectLogger(loggers[key]);
      }
    }
  }
  function setLevel(level) {
    logLevel = level;
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      levels = _export("levels", {
        none: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4
      });
      loggers = {};
      logLevel = levels.none;
      appenders = [];
      slice = Array.prototype.slice;
      loggerConstructionKey = {};
      Logger = (function() {
        var Logger = function Logger(id, key) {
          if (key !== loggerConstructionKey) {
            throw new Error("You cannot instantiate \"Logger\". Use the \"getLogger\" API instead.");
          }
          this.id = id;
        };
        _prototypeProperties(Logger, null, {
          debug: {
            value: function() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          info: {
            value: function() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          warn: {
            value: function() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          error: {
            value: function() {},
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Logger;
      })();
      _export("Logger", Logger);
    }
  };
});



System.register("github:aurelia/dependency-injection@0.3.1/system/annotations", [], function(_export) {
  "use strict";
  var _inherits,
      _prototypeProperties,
      Inject,
      Registration,
      Transient,
      Singleton,
      Resolver,
      Lazy,
      All,
      Optional,
      Parent;
  return {
    setters: [],
    execute: function() {
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Inject = function Inject() {
        var keys = [];
        for (var _key = 0; _key < arguments.length; _key++) {
          keys[_key] = arguments[_key];
        }
        this.keys = keys;
      };
      _export("Inject", Inject);
      Registration = (function() {
        var Registration = function Registration() {};
        _prototypeProperties(Registration, null, {register: {
            value: function(container, key, fn) {
              throw new Error("A custom Registration must implement register(container, key, fn).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Registration;
      })();
      _export("Registration", Registration);
      Transient = (function(Registration) {
        var Transient = function Transient(key) {
          this.key = key;
        };
        _inherits(Transient, Registration);
        _prototypeProperties(Transient, null, {register: {
            value: function(container, key, fn) {
              container.registerTransient(this.key || key, fn);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Transient;
      })(Registration);
      _export("Transient", Transient);
      Singleton = (function(Registration) {
        var Singleton = function Singleton(key) {
          this.key = key;
        };
        _inherits(Singleton, Registration);
        _prototypeProperties(Singleton, null, {register: {
            value: function(container, key, fn) {
              container.registerSingleton(this.key || key, fn);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Singleton;
      })(Registration);
      _export("Singleton", Singleton);
      Resolver = (function() {
        var Resolver = function Resolver() {};
        _prototypeProperties(Resolver, null, {get: {
            value: function(container) {
              throw new Error("A custom Resolver must implement get(container) and return the resolved instance(s).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Resolver;
      })();
      _export("Resolver", Resolver);
      Lazy = (function(Resolver) {
        var Lazy = function Lazy(key) {
          this.key = key;
        };
        _inherits(Lazy, Resolver);
        _prototypeProperties(Lazy, {of: {
            value: function(key) {
              return new Lazy(key);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {get: {
            value: function(container) {
              var _this = this;
              return function() {
                return container.get(_this.key);
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Lazy;
      })(Resolver);
      _export("Lazy", Lazy);
      All = (function(Resolver) {
        var All = function All(key) {
          this.key = key;
        };
        _inherits(All, Resolver);
        _prototypeProperties(All, {of: {
            value: function(key) {
              return new All(key);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {get: {
            value: function(container) {
              return container.getAll(this.key);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return All;
      })(Resolver);
      _export("All", All);
      Optional = (function(Resolver) {
        var Optional = function Optional(key) {
          var checkParent = arguments[1] === undefined ? false : arguments[1];
          this.key = key;
          this.checkParent = checkParent;
        };
        _inherits(Optional, Resolver);
        _prototypeProperties(Optional, {of: {
            value: function(key) {
              var checkParent = arguments[1] === undefined ? false : arguments[1];
              return new Optional(key, checkParent);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {get: {
            value: function(container) {
              if (container.hasHandler(this.key, this.checkParent)) {
                return container.get(this.key);
              }
              return null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Optional;
      })(Resolver);
      _export("Optional", Optional);
      Parent = (function(Resolver) {
        var Parent = function Parent(key) {
          this.key = key;
        };
        _inherits(Parent, Resolver);
        _prototypeProperties(Parent, {of: {
            value: function(key) {
              return new Parent(key);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {get: {
            value: function(container) {
              return container.parent ? container.parent.get(this.key) : null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Parent;
      })(Resolver);
      _export("Parent", Parent);
    }
  };
});



System.register("github:aurelia/metadata@0.2.4/system/origin", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      Origin;
  function ensureType(value) {
    if (value instanceof Origin) {
      return value;
    }
    return new Origin(value);
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Origin = (function() {
        var Origin = function Origin(moduleId, moduleMember) {
          this.moduleId = moduleId;
          this.moduleMember = moduleMember;
        };
        _prototypeProperties(Origin, {
          get: {
            value: function(fn) {
              var origin = fn.__origin__;
              if (origin !== undefined) {
                return origin;
              }
              if (typeof fn.origin === "function") {
                return fn.__origin__ = ensureType(fn.origin());
              }
              if (fn.origin !== undefined) {
                return fn.__origin__ = ensureType(fn.origin);
              }
              return null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          set: {
            value: function(fn, origin) {
              if (Origin.get(fn) === null) {
                fn.__origin__ = origin;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Origin;
      })();
      _export("Origin", Origin);
    }
  };
});



System.register("github:aurelia/metadata@0.2.4/system/resource-type", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      ResourceType;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ResourceType = (function() {
        var ResourceType = function ResourceType() {};
        _prototypeProperties(ResourceType, null, {
          load: {
            value: function(container, target) {
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          register: {
            value: function(registry, name) {
              throw new Error("All descendents of \"ResourceType\" must implement the \"register\" method.");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ResourceType;
      })();
      _export("ResourceType", ResourceType);
    }
  };
});



System.register("github:aurelia/metadata@0.2.4/system/annotations", [], function(_export) {
  "use strict";
  var noAnnotations;
  _export("getAnnotation", getAnnotation);
  _export("getAllAnnotations", getAllAnnotations);
  _export("addAnnotation", addAnnotation);
  function getAnnotation(fn, annotationType, deep) {
    var annotations,
        i,
        ii,
        annotation;
    if (!fn) {
      return null;
    }
    if (typeof fn.annotations === "function") {
      fn.annotations = fn.annotations();
    }
    annotations = fn.annotations;
    if (annotations === undefined) {
      if (deep) {
        return getAnnotation(Object.getPrototypeOf(fn), annotationType, deep);
      }
      return null;
    }
    for (i = 0, ii = annotations.length; i < ii; ++i) {
      annotation = annotations[i];
      if (annotation instanceof annotationType) {
        return annotation;
      }
    }
    if (deep) {
      return getAnnotation(Object.getPrototypeOf(fn), annotationType, deep);
    }
    return null;
  }
  function getAllAnnotations(fn, annotationType, deep) {
    var annotations,
        i,
        ii,
        annotation,
        found;
    if (!fn) {
      return noAnnotations;
    }
    if (typeof fn.annotations === "function") {
      fn.annotations = fn.annotations();
    }
    annotations = fn.annotations;
    if (annotations === undefined) {
      if (deep) {
        return getAllAnnotations(Object.getPrototypeOf(fn), annotationType, deep);
      }
      return noAnnotations;
    }
    found = [];
    for (i = 0, ii = annotations.length; i < ii; ++i) {
      annotation = annotations[i];
      if (annotation instanceof annotationType) {
        found.push(annotation);
      }
    }
    if (deep) {
      found = found.concat(getAllAnnotations(Object.getPrototypeOf(fn), annotationType, deep));
    }
    return found;
  }
  function addAnnotation(fn, annotation) {
    var annotations;
    if (typeof fn.annotations === "function") {
      fn.annotations = fn.annotations();
    }
    annotations = fn.annotations || (fn.annotations = []);
    annotations.push(annotation);
  }
  return {
    setters: [],
    execute: function() {
      noAnnotations = [];
    }
  };
});



System.register("github:aurelia/dependency-injection@0.3.1/system/util", [], function(_export) {
  "use strict";
  _export("isClass", isClass);
  function isUpperCase(char) {
    return char.toUpperCase() === char;
  }
  function isClass(clsOrFunction) {
    if (clsOrFunction.name) {
      return isUpperCase(clsOrFunction.name.charAt(0));
    }
    return Object.keys(clsOrFunction.prototype).length > 0;
  }
  return {
    setters: [],
    execute: function() {
      if (!(function f() {}).name) {
        Object.defineProperty(Function.prototype, "name", {get: function() {
            var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
            Object.defineProperty(this, "name", {value: name});
            return name;
          }});
      }
    }
  };
});



System.register("github:aurelia/loader@0.3.1/system/index", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      hasTemplateElement,
      Loader;
  function importElements(frag, link, callback) {
    document.head.appendChild(frag);
    if (window.Polymer && Polymer.whenReady) {
      Polymer.whenReady(callback);
    } else {
      link.addEventListener("load", callback);
    }
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      hasTemplateElement = "content" in document.createElement("template");
      Loader = (function() {
        var Loader = function Loader() {};
        _prototypeProperties(Loader, {createDefaultLoader: {
            value: function() {
              throw new Error("No default loader module imported.");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          loadModule: {
            value: function(id) {
              throw new Error("Loaders must implement loadModule(id).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadAllModules: {
            value: function(ids) {
              throw new Error("Loader must implement loadAllModules(ids).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadTemplate: {
            value: function(url) {
              throw new Error("Loader must implement loadTemplate(url).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          importDocument: {
            value: function(url) {
              return new Promise(function(resolve, reject) {
                var frag = document.createDocumentFragment();
                var link = document.createElement("link");
                link.rel = "import";
                link.href = url;
                frag.appendChild(link);
                importElements(frag, link, function() {
                  return resolve(link["import"]);
                });
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          importTemplate: {
            value: function(url) {
              var _this = this;
              return this.importDocument(url).then(function(doc) {
                return _this.findTemplate(doc, url);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          findTemplate: {
            value: function(doc, url) {
              if (!hasTemplateElement) {
                HTMLTemplateElement.bootstrap(doc);
              }
              var template = doc.querySelector("template");
              if (!template) {
                throw new Error("There was no template element found in '" + url + "'.");
              }
              return template;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Loader;
      })();
      _export("Loader", Loader);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/behavior-instance", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      BehaviorInstance;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BehaviorInstance = (function() {
        var BehaviorInstance = function BehaviorInstance(taskQueue, observerLocator, behaviorType, executionContext, instruction) {
          this.behaviorType = behaviorType;
          this.executionContext = executionContext;
          var observerLookup = observerLocator.getObserversLookup(executionContext),
              handlesBind = behaviorType.handlesBind,
              attributes = instruction.attributes,
              boundProperties = this.boundProperties = [],
              properties = behaviorType.properties,
              i,
              ii,
              info;
          for (i = 0, ii = properties.length; i < ii; ++i) {
            info = properties[i].create(taskQueue, executionContext, observerLookup, attributes, handlesBind);
            if (info !== undefined) {
              boundProperties.push(info);
            }
          }
        };
        _prototypeProperties(BehaviorInstance, null, {
          created: {
            value: function(context) {
              if (this.behaviorType.handlesCreated) {
                this.executionContext.created(context);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          bind: {
            value: function(context) {
              var skipSelfSubscriber = this.behaviorType.handlesBind,
                  boundProperties = this.boundProperties,
                  i,
                  ii,
                  x,
                  observer,
                  selfSubscriber;
              for (i = 0, ii = boundProperties.length; i < ii; ++i) {
                x = boundProperties[i];
                observer = x.observer;
                selfSubscriber = observer.selfSubscriber;
                observer.publishing = false;
                if (skipSelfSubscriber) {
                  observer.selfSubscriber = null;
                }
                x.binding.bind(context);
                observer.call();
                observer.publishing = true;
                observer.selfSubscriber = selfSubscriber;
              }
              if (skipSelfSubscriber) {
                this.executionContext.bind(context);
              }
              if (this.view) {
                this.view.bind(this.executionContext);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function() {
              var boundProperties = this.boundProperties,
                  i,
                  ii;
              if (this.view) {
                this.view.unbind();
              }
              if (this.behaviorType.handlesUnbind) {
                this.executionContext.unbind();
              }
              for (i = 0, ii = boundProperties.length; i < ii; ++i) {
                boundProperties[i].binding.unbind();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          attached: {
            value: function() {
              if (this.behaviorType.handlesAttached) {
                this.executionContext.attached();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          detached: {
            value: function() {
              if (this.behaviorType.handlesDetached) {
                this.executionContext.detached();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return BehaviorInstance;
      })();
      _export("BehaviorInstance", BehaviorInstance);
    }
  };
});



System.register("github:aurelia/task-queue@0.2.1/system/index", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      BrowserMutationObserver,
      hasSetImmediate,
      TaskQueue;
  function makeRequestFlushFromMutationObserver(flush) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestFlush() {
      toggle = -toggle;
      node.data = toggle;
    };
  }
  function makeRequestFlushFromTimer(flush) {
    return function requestFlush() {
      var timeoutHandle = setTimeout(handleFlushTimer, 0);
      var intervalHandle = setInterval(handleFlushTimer, 50);
      function handleFlushTimer() {
        clearTimeout(timeoutHandle);
        clearInterval(intervalHandle);
        flush();
      }
    };
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BrowserMutationObserver = window.MutationObserver || window.WebKitMutationObserver;
      hasSetImmediate = typeof setImmediate === "function";
      TaskQueue = (function() {
        var TaskQueue = function TaskQueue() {
          var _this = this;
          this.microTaskQueue = [];
          this.microTaskQueueCapacity = 1024;
          this.taskQueue = [];
          if (typeof BrowserMutationObserver === "function") {
            this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function() {
              return _this.flushMicroTaskQueue();
            });
          } else {
            this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function() {
              return _this.flushMicroTaskQueue();
            });
          }
          this.requestFlushTaskQueue = makeRequestFlushFromTimer(function() {
            return _this.flushTaskQueue();
          });
        };
        _prototypeProperties(TaskQueue, null, {
          queueMicroTask: {
            value: function(task) {
              if (!this.microTaskQueue.length) {
                this.requestFlushMicroTaskQueue();
              }
              this.microTaskQueue.push(task);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          queueTask: {
            value: function(task) {
              if (!this.taskQueue.length) {
                this.requestFlushTaskQueue();
              }
              this.taskQueue.push(task);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          flushTaskQueue: {
            value: function() {
              var queue = this.taskQueue,
                  index = 0,
                  task;
              this.taskQueue = [];
              while (index < queue.length) {
                task = queue[index];
                try {
                  task.call();
                } catch (error) {
                  this.onError(error, task);
                }
                index++;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          flushMicroTaskQueue: {
            value: function() {
              var queue = this.microTaskQueue,
                  capacity = this.microTaskQueueCapacity,
                  index = 0,
                  task;
              while (index < queue.length) {
                task = queue[index];
                try {
                  task.call();
                } catch (error) {
                  this.onError(error, task);
                }
                index++;
                if (index > capacity) {
                  for (var scan = 0; scan < index; scan++) {
                    queue[scan] = queue[scan + index];
                  }
                  queue.length -= index;
                  index = 0;
                }
              }
              queue.length = 0;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          onError: {
            value: function(error, task) {
              if ("onError" in task) {
                task.onError(error);
              } else if (hasSetImmediate) {
                setImmediate(function() {
                  throw error;
                });
              } else {
                setTimeout(function() {
                  throw error;
                }, 0);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return TaskQueue;
      })();
      _export("TaskQueue", TaskQueue);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/path-observer", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      PathObserver;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      PathObserver = (function() {
        var PathObserver = function PathObserver(leftObserver, getRightObserver, value) {
          var _this = this;
          this.leftObserver = leftObserver;
          this.disposeLeft = leftObserver.subscribe(function(newValue) {
            var newRightValue = _this.updateRight(getRightObserver(newValue));
            _this.notify(newRightValue);
          });
          this.updateRight(getRightObserver(value));
        };
        _prototypeProperties(PathObserver, null, {
          updateRight: {
            value: function(observer) {
              var _this2 = this;
              this.rightObserver = observer;
              if (this.disposeRight) {
                this.disposeRight();
              }
              if (!observer) {
                return null;
              }
              this.disposeRight = observer.subscribe(function(newValue) {
                return _this2.notify(newValue);
              });
              return observer.getValue();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function(callback) {
              var that = this;
              that.callback = callback;
              return function() {
                that.callback = null;
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          notify: {
            value: function(newValue) {
              var callback = this.callback;
              if (callback) {
                callback(newValue);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          dispose: {
            value: function() {
              if (this.disposeLeft) {
                this.disposeLeft();
              }
              if (this.disposeRight) {
                this.disposeRight();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return PathObserver;
      })();
      _export("PathObserver", PathObserver);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/composite-observer", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      CompositeObserver;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      CompositeObserver = (function() {
        var CompositeObserver = function CompositeObserver(observers, evaluate) {
          var _this = this;
          this.subscriptions = new Array(observers.length);
          this.evaluate = evaluate;
          for (var i = 0,
              ii = observers.length; i < ii; i++) {
            this.subscriptions[i] = observers[i].subscribe(function(newValue) {
              _this.notify(_this.evaluate());
            });
          }
        };
        _prototypeProperties(CompositeObserver, null, {
          subscribe: {
            value: function(callback) {
              var that = this;
              that.callback = callback;
              return function() {
                that.callback = null;
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          notify: {
            value: function(newValue) {
              var callback = this.callback;
              if (callback) {
                callback(newValue);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          dispose: {
            value: function() {
              var subscriptions = this.subscriptions;
              while (i--) {
                subscriptions[i]();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return CompositeObserver;
      })();
      _export("CompositeObserver", CompositeObserver);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/expressions/ast", [], function(_export) {
  "use strict";
  var _get,
      _inherits,
      _prototypeProperties,
      Expression,
      Chain,
      ValueConverter,
      Assign,
      Conditional,
      AccessScope,
      AccessMember,
      AccessKeyed,
      CallScope,
      CallMember,
      CallFunction,
      Binary,
      PrefixNot,
      LiteralPrimitive,
      LiteralString,
      LiteralArray,
      LiteralObject,
      Unparser,
      evalListCache;
  function evalList(scope, list, valueConverters) {
    var length = list.length,
        cacheLength,
        i;
    for (cacheLength = evalListCache.length; cacheLength <= length; ++cacheLength) {
      _evalListCache.push([]);
    }
    var result = evalListCache[length];
    for (i = 0; i < length; ++i) {
      result[i] = list[i].eval(scope, valueConverters);
    }
    return result;
  }
  function autoConvertAdd(a, b) {
    if (a != null && b != null) {
      if (typeof a == "string" && typeof b != "string") {
        return a + b.toString();
      }
      if (typeof a != "string" && typeof b == "string") {
        return a.toString() + b;
      }
      return a + b;
    }
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return 0;
  }
  function ensureFunctionFromMap(obj, name) {
    var func = obj[name];
    if (typeof func == "function") {
      return func;
    }
    if (func == null) {
      throw new Error("Undefined function " + name);
    } else {
      throw new Error("" + name + " is not a function");
    }
  }
  function getKeyed(obj, key) {
    if (Array.isArray(obj)) {
      return obj[parseInt(key)];
    } else if (obj) {
      return obj[key];
    } else if (obj == null) {
      throw new Error("Accessing null object");
    } else {
      return obj[key];
    }
  }
  function setKeyed(obj, key, value) {
    if (Array.isArray(obj)) {
      var index = parseInt(key);
      if (obj.length <= index) {
        obj.length = index + 1;
      }
      obj[index] = value;
    } else {
      obj[key] = value;
    }
    return value;
  }
  return {
    setters: [],
    execute: function() {
      _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === undefined) {
            return undefined;
          }
          return getter.call(receiver);
        }
      };
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Expression = (function() {
        var Expression = function Expression() {
          this.isChain = false;
          this.isAssignable = false;
        };
        _prototypeProperties(Expression, null, {
          eval: {
            value: function() {
              throw new Error("Cannot evaluate " + this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          assign: {
            value: function() {
              throw new Error("Cannot assign to " + this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          toString: {
            value: function() {
              return Unparser.unparse(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Expression;
      })();
      _export("Expression", Expression);
      Chain = (function(Expression) {
        var Chain = function Chain(expressions) {
          _get(Object.getPrototypeOf(Chain.prototype), "constructor", this).call(this);
          this.expressions = expressions;
          this.isChain = true;
        };
        _inherits(Chain, Expression);
        _prototypeProperties(Chain, null, {
          eval: {
            value: function(scope, valueConverters) {
              var result,
                  expressions = this.expressions,
                  length = expressions.length,
                  i,
                  last;
              for (i = 0; i < length; ++i) {
                last = expressions[i].eval(scope, valueConverters);
                if (last != null) {
                  result = last;
                }
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitChain(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Chain;
      })(Expression);
      _export("Chain", Chain);
      ValueConverter = (function(Expression) {
        var ValueConverter = function ValueConverter(expression, name, args, allArgs) {
          _get(Object.getPrototypeOf(ValueConverter.prototype), "constructor", this).call(this);
          this.expression = expression;
          this.name = name;
          this.args = args;
          this.allArgs = allArgs;
        };
        _inherits(ValueConverter, Expression);
        _prototypeProperties(ValueConverter, null, {
          eval: {
            value: function(scope, valueConverters) {
              var converter = valueConverters(this.name);
              if (!converter) {
                throw new Error("No ValueConverter named \"" + this.name + "\" was found!");
              }
              if ("toView" in converter) {
                return converter.toView.apply(converter, evalList(scope, this.allArgs, valueConverters));
              }
              return this.allArgs[0].eval(scope, valueConverters);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          assign: {
            value: function(scope, value, valueConverters) {
              var converter = valueConverters(this.name);
              if (!converter) {
                throw new Error("No ValueConverter named \"" + this.name + "\" was found!");
              }
              if ("fromView" in converter) {
                value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, valueConverters)));
              }
              return this.allArgs[0].assign(scope, value, valueConverters);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitValueConverter(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ValueConverter;
      })(Expression);
      _export("ValueConverter", ValueConverter);
      Assign = (function(Expression) {
        var Assign = function Assign(target, value) {
          _get(Object.getPrototypeOf(Assign.prototype), "constructor", this).call(this);
          this.target = target;
          this.value = value;
        };
        _inherits(Assign, Expression);
        _prototypeProperties(Assign, null, {
          eval: {
            value: function(scope, valueConverters) {
              return this.target.assign(scope, this.value.eval(scope, valueConverters));
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(vistor) {
              vistor.visitAssign(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Assign;
      })(Expression);
      _export("Assign", Assign);
      Conditional = (function(Expression) {
        var Conditional = function Conditional(condition, yes, no) {
          _get(Object.getPrototypeOf(Conditional.prototype), "constructor", this).call(this);
          this.condition = condition;
          this.yes = yes;
          this.no = no;
        };
        _inherits(Conditional, Expression);
        _prototypeProperties(Conditional, null, {
          eval: {
            value: function(scope, valueConverters) {
              return !!this.condition.eval(scope) ? this.yes.eval(scope) : this.no.eval(scope);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitConditional(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Conditional;
      })(Expression);
      _export("Conditional", Conditional);
      AccessScope = (function(Expression) {
        var AccessScope = function AccessScope(name) {
          _get(Object.getPrototypeOf(AccessScope.prototype), "constructor", this).call(this);
          this.name = name;
          this.isAssignable = true;
        };
        _inherits(AccessScope, Expression);
        _prototypeProperties(AccessScope, null, {
          eval: {
            value: function(scope, valueConverters) {
              return scope[this.name];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          assign: {
            value: function(scope, value) {
              return scope[this.name] = value;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitAccessScope(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return AccessScope;
      })(Expression);
      _export("AccessScope", AccessScope);
      AccessMember = (function(Expression) {
        var AccessMember = function AccessMember(object, name) {
          _get(Object.getPrototypeOf(AccessMember.prototype), "constructor", this).call(this);
          this.object = object;
          this.name = name;
          this.isAssignable = true;
        };
        _inherits(AccessMember, Expression);
        _prototypeProperties(AccessMember, null, {
          eval: {
            value: function(scope, valueConverters) {
              var instance = this.object.eval(scope, valueConverters);
              return instance == null ? null : instance[this.name];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          assign: {
            value: function(scope, value) {
              var instance = this.object.eval(scope);
              if (!instance) {
                instance = {};
                this.object.assign(scope, instance);
              }
              return instance[this.name] = value;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitAccessMember(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return AccessMember;
      })(Expression);
      _export("AccessMember", AccessMember);
      AccessKeyed = (function(Expression) {
        var AccessKeyed = function AccessKeyed(object, key) {
          _get(Object.getPrototypeOf(AccessKeyed.prototype), "constructor", this).call(this);
          this.object = object;
          this.key = key;
          this.isAssignable = true;
        };
        _inherits(AccessKeyed, Expression);
        _prototypeProperties(AccessKeyed, null, {
          eval: {
            value: function(scope, valueConverters) {
              var instance = this.object.eval(scope, valueConverters);
              var lookup = this.key.eval(scope, valueConverters);
              return getKeyed(instance, lookup);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          assign: {
            value: function(scope, value) {
              var instance = this.object.eval(scope);
              var lookup = this.key.eval(scope);
              return setKeyed(instance, lookup, value);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitAccessKeyed(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return AccessKeyed;
      })(Expression);
      _export("AccessKeyed", AccessKeyed);
      CallScope = (function(Expression) {
        var CallScope = function CallScope(name, args) {
          _get(Object.getPrototypeOf(CallScope.prototype), "constructor", this).call(this);
          this.name = name;
          this.args = args;
        };
        _inherits(CallScope, Expression);
        _prototypeProperties(CallScope, null, {
          eval: {
            value: function(scope, valueConverters, args) {
              args = args || evalList(scope, this.args, valueConverters);
              return ensureFunctionFromMap(scope, this.name).apply(scope, args);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitCallScope(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return CallScope;
      })(Expression);
      _export("CallScope", CallScope);
      CallMember = (function(Expression) {
        var CallMember = function CallMember(object, name, args) {
          _get(Object.getPrototypeOf(CallMember.prototype), "constructor", this).call(this);
          this.object = object;
          this.name = name;
          this.args = args;
        };
        _inherits(CallMember, Expression);
        _prototypeProperties(CallMember, null, {
          eval: {
            value: function(scope, valueConverters, args) {
              var instance = this.object.eval(scope, valueConverters);
              args = args || evalList(scope, this.args, valueConverters);
              return ensureFunctionFromMap(instance, this.name).apply(instance, args);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitCallMember(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return CallMember;
      })(Expression);
      _export("CallMember", CallMember);
      CallFunction = (function(Expression) {
        var CallFunction = function CallFunction(func, args) {
          _get(Object.getPrototypeOf(CallFunction.prototype), "constructor", this).call(this);
          this.func = func;
          this.args = args;
        };
        _inherits(CallFunction, Expression);
        _prototypeProperties(CallFunction, null, {
          eval: {
            value: function(scope, valueConverters, args) {
              var func = this.func.eval(scope, valueConverters);
              if (typeof func != "function") {
                throw new Error("" + this.func + " is not a function");
              } else {
                return func.apply(null, args || evalList(scope, this.args, valueConverters));
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitCallFunction(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return CallFunction;
      })(Expression);
      _export("CallFunction", CallFunction);
      Binary = (function(Expression) {
        var Binary = function Binary(operation, left, right) {
          _get(Object.getPrototypeOf(Binary.prototype), "constructor", this).call(this);
          this.operation = operation;
          this.left = left;
          this.right = right;
        };
        _inherits(Binary, Expression);
        _prototypeProperties(Binary, null, {
          eval: {
            value: function(scope, valueConverters) {
              var left = this.left.eval(scope);
              switch (this.operation) {
                case "&&":
                  return !!left && !!this.right.eval(scope);
                case "||":
                  return !!left || !!this.right.eval(scope);
              }
              var right = this.right.eval(scope);
              if (left == null || right == null) {
                switch (this.operation) {
                  case "+":
                    if (left != null)
                      return left;
                    if (right != null)
                      return right;
                    return 0;
                  case "-":
                    if (left != null)
                      return left;
                    if (right != null)
                      return 0 - right;
                    return 0;
                }
                return null;
              }
              switch (this.operation) {
                case "+":
                  return autoConvertAdd(left, right);
                case "-":
                  return left - right;
                case "*":
                  return left * right;
                case "/":
                  return left / right;
                case "~/":
                  return Math.floor(left / right);
                case "%":
                  return left % right;
                case "==":
                  return left == right;
                case "!=":
                  return left != right;
                case "<":
                  return left < right;
                case ">":
                  return left > right;
                case "<=":
                  return left <= right;
                case ">=":
                  return left >= right;
                case "^":
                  return left ^ right;
                case "&":
                  return left & right;
              }
              throw new Error("Internal error [" + this.operation + "] not handled");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitBinary(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Binary;
      })(Expression);
      _export("Binary", Binary);
      PrefixNot = (function(Expression) {
        var PrefixNot = function PrefixNot(operation, expression) {
          _get(Object.getPrototypeOf(PrefixNot.prototype), "constructor", this).call(this);
          this.operation = operation;
          this.expression = expression;
        };
        _inherits(PrefixNot, Expression);
        _prototypeProperties(PrefixNot, null, {
          eval: {
            value: function(scope, valueConverters) {
              return !this.expression.eval(scope);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitPrefix(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return PrefixNot;
      })(Expression);
      _export("PrefixNot", PrefixNot);
      LiteralPrimitive = (function(Expression) {
        var LiteralPrimitive = function LiteralPrimitive(value) {
          _get(Object.getPrototypeOf(LiteralPrimitive.prototype), "constructor", this).call(this);
          this.value = value;
        };
        _inherits(LiteralPrimitive, Expression);
        _prototypeProperties(LiteralPrimitive, null, {
          eval: {
            value: function(scope, valueConverters) {
              return this.value;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitLiteralPrimitive(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return LiteralPrimitive;
      })(Expression);
      _export("LiteralPrimitive", LiteralPrimitive);
      LiteralString = (function(Expression) {
        var LiteralString = function LiteralString(value) {
          _get(Object.getPrototypeOf(LiteralString.prototype), "constructor", this).call(this);
          this.value = value;
        };
        _inherits(LiteralString, Expression);
        _prototypeProperties(LiteralString, null, {
          eval: {
            value: function(scope, valueConverters) {
              return this.value;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitLiteralString(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return LiteralString;
      })(Expression);
      _export("LiteralString", LiteralString);
      LiteralArray = (function(Expression) {
        var LiteralArray = function LiteralArray(elements) {
          _get(Object.getPrototypeOf(LiteralArray.prototype), "constructor", this).call(this);
          this.elements = elements;
        };
        _inherits(LiteralArray, Expression);
        _prototypeProperties(LiteralArray, null, {
          eval: {
            value: function(scope, valueConverters) {
              var elements = this.elements,
                  length = elements.length,
                  result = [],
                  i;
              for (i = 0; i < length; ++i) {
                result[i] = elements[i].eval(scope, valueConverters);
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitLiteralArray(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return LiteralArray;
      })(Expression);
      _export("LiteralArray", LiteralArray);
      LiteralObject = (function(Expression) {
        var LiteralObject = function LiteralObject(keys, values) {
          _get(Object.getPrototypeOf(LiteralObject.prototype), "constructor", this).call(this);
          this.keys = keys;
          this.values = values;
        };
        _inherits(LiteralObject, Expression);
        _prototypeProperties(LiteralObject, null, {
          eval: {
            value: function(scope, valueConverters) {
              var instance = {},
                  keys = this.keys,
                  values = this.values,
                  length = keys.length,
                  i;
              for (i = 0; i < length; ++i) {
                instance[keys[i]] = values[i].eval(scope, valueConverters);
              }
              return instance;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          accept: {
            value: function(visitor) {
              visitor.visitLiteralObject(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return LiteralObject;
      })(Expression);
      _export("LiteralObject", LiteralObject);
      Unparser = (function() {
        var Unparser = function Unparser(buffer) {
          this.buffer = buffer;
        };
        _prototypeProperties(Unparser, {unparse: {
            value: function(expression) {
              var buffer = [],
                  visitor = new Unparser(buffer);
              expression.accept(visitor);
              return buffer.join("");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          write: {
            value: function(text) {
              this.buffer.push(text);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          writeArgs: {
            value: function(args) {
              var i,
                  length;
              this.write("(");
              for (i = 0, length = args.length; i < length; ++i) {
                if (i != 0) {
                  this.write(",");
                }
                args[i].accept(this);
              }
              this.write(")");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitChain: {
            value: function(chain) {
              var expressions = chain.expressions,
                  length = expressions.length,
                  i;
              for (i = 0; i < length; ++i) {
                if (i != 0) {
                  this.write(";");
                }
                expressions[i].accept(this);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitValueConverter: {
            value: function(converter) {
              var args = converter.args,
                  length = args.length,
                  i;
              this.write("(");
              converter.expression.accept(this);
              this.write("|" + converter.name);
              for (i = 0; i < length; ++i) {
                this.write(" :");
                args[i].accept(this);
              }
              this.write(")");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitAssign: {
            value: function(assign) {
              assign.target.accept(this);
              this.write("=");
              assign.value.accept(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitConditional: {
            value: function(conditional) {
              conditional.condition.accept(this);
              this.write("?");
              conditional.yes.accept(this);
              this.write(":");
              conditional.no.accept(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitAccessScope: {
            value: function(access) {
              this.write(access.name);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitAccessMember: {
            value: function(access) {
              access.object.accept(this);
              this.write("." + access.name);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitAccessKeyed: {
            value: function(access) {
              access.object.accept(this);
              this.write("[");
              access.key.accept(this);
              this.write("]");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitCallScope: {
            value: function(call) {
              this.write(call.name);
              this.writeArgs(call.args);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitCallFunction: {
            value: function(call) {
              call.func.accept(this);
              this.writeArgs(call.args);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitCallMember: {
            value: function(call) {
              call.object.accept(this);
              this.write("." + call.name);
              this.writeArgs(call.args);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitPrefix: {
            value: function(prefix) {
              this.write("(" + prefix.operation);
              prefix.expression.accept(this);
              this.write(")");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitBinary: {
            value: function(binary) {
              this.write("(");
              binary.left.accept(this);
              this.write(binary.operation);
              binary.right.accept(this);
              this.write(")");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitLiteralPrimitive: {
            value: function(literal) {
              this.write("" + literal.value);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitLiteralArray: {
            value: function(literal) {
              var elements = literal.elements,
                  length = elements.length,
                  i;
              this.write("[");
              for (i = 0; i < length; ++i) {
                if (i != 0) {
                  this.write(",");
                }
                elements[i].accept(this);
              }
              this.write("]");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitLiteralObject: {
            value: function(literal) {
              var keys = literal.keys,
                  values = literal.values,
                  length = keys.length,
                  i;
              this.write("{");
              for (i = 0; i < length; ++i) {
                if (i != 0) {
                  this.write(",");
                }
                this.write("'" + keys[i] + "':");
                values[i].accept(this);
              }
              this.write("}");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          visitLiteralString: {
            value: function(literal) {
              var escaped = literal.value.replace(/'/g, "'");
              this.write("'" + escaped + "'");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Unparser;
      })();
      _export("Unparser", Unparser);
      evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/event-manager", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      DefaultEventStrategy,
      EventManager;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      DefaultEventStrategy = (function() {
        var DefaultEventStrategy = function DefaultEventStrategy() {
          this.delegatedEvents = {};
        };
        _prototypeProperties(DefaultEventStrategy, null, {
          ensureDelegatedEvent: {
            value: function(eventName) {
              if (this.delegatedEvents[eventName]) {
                return;
              }
              this.delegatedEvents[eventName] = true;
              document.addEventListener(eventName, this.handleDelegatedEvent.bind(this), false);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          handleCallbackResult: {
            value: function(result) {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          handleDelegatedEvent: {
            value: function(event) {
              event = event || window.event;
              var target = event.target || event.srcElement,
                  callback;
              while (target && !callback) {
                if (target.delegatedEvents) {
                  callback = target.delegatedEvents[event.type];
                }
                if (!callback) {
                  target = target.parentNode;
                }
              }
              if (callback) {
                this.handleCallbackResult(callback(event));
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createDirectEventCallback: {
            value: function(callback) {
              var _this = this;
              return function(event) {
                _this.handleCallbackResult(callback(event));
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribeToDelegatedEvent: {
            value: function(target, targetEvent, callback) {
              var lookup = target.delegatedEvents || (target.delegatedEvents = {});
              this.ensureDelegatedEvent(targetEvent);
              lookup[targetEvent] = callback;
              return function() {
                lookup[targetEvent] = null;
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribeToDirectEvent: {
            value: function(target, targetEvent, callback) {
              var directEventCallback = this.createDirectEventCallback(callback);
              target.addEventListener(targetEvent, directEventCallback, false);
              return function() {
                target.removeEventListener(targetEvent, directEventCallback);
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function(target, targetEvent, callback, delegate) {
              if (delegate) {
                return this.subscribeToDirectEvent(target, targetEvent, callback);
              } else {
                return this.subscribeToDelegatedEvent(target, targetEvent, callback);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return DefaultEventStrategy;
      })();
      EventManager = (function() {
        var EventManager = function EventManager() {
          this.elementHandlerLookup = {};
          this.eventStrategyLookup = {};
          this.registerElementConfig("input", {
            value: ["change", "input"],
            checked: ["change", "input"]
          });
          this.registerElementConfig("textarea", {value: ["change", "input"]});
          this.registerElementConfig("select", {value: ["change"]});
          this.defaultEventStrategy = new DefaultEventStrategy();
        };
        _prototypeProperties(EventManager, null, {
          registerElementConfig: {
            value: function(tagName, config) {
              this.elementHandlerLookup[tagName.toLowerCase()] = {subscribe: function subscribe(target, property, callback) {
                  var events = config[property];
                  if (events) {
                    events.forEach(function(changeEvent) {
                      target.addEventListener(changeEvent, callback, false);
                    });
                    return function() {
                      events.forEach(function(changeEvent) {
                        target.removeEventListener(changeEvent, callback);
                      });
                    };
                  } else {
                    throw new Error("Cannot observe property " + property + " of " + tagName + ". No events found.");
                  }
                }};
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          registerElementHandler: {
            value: function(tagName, handler) {
              this.elementHandlerLookup[tagName.toLowerCase()] = handler;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          registerEventStrategy: {
            value: function(eventName, strategy) {
              this.eventStrategyLookup[eventName] = strategy;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getElementHandler: {
            value: function(target) {
              if (target.tagName) {
                var handler = this.elementHandlerLookup[target.tagName.toLowerCase()];
                if (handler) {
                  return handler;
                }
              }
              return null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          addEventListener: {
            value: function(target, targetEvent, callback, delegate) {
              return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callback, delegate);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return EventManager;
      })();
      _export("EventManager", EventManager);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/array-change-records", [], function(_export) {
  "use strict";
  var EDIT_LEAVE,
      EDIT_UPDATE,
      EDIT_ADD,
      EDIT_DELETE,
      arraySplice;
  _export("calcSplices", calcSplices);
  _export("projectArraySplices", projectArraySplices);
  function isIndex(s) {
    return +s === s >>> 0;
  }
  function toNumber(s) {
    return +s;
  }
  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount
    };
  }
  function ArraySplice() {}
  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
  }
  function intersect(start1, end1, start2, end2) {
    if (end1 < start2 || end2 < start1)
      return -1;
    if (end1 == start2 || end2 == start1)
      return 0;
    if (start1 < start2) {
      if (end1 < end2)
        return end1 - start2;
      else
        return end2 - start2;
    } else {
      if (end2 < end1)
        return end2 - start1;
      else
        return end1 - start1;
    }
  }
  function mergeSplice(splices, index, removed, addedCount) {
    var splice = newSplice(index, removed, addedCount);
    var inserted = false;
    var insertionOffset = 0;
    for (var i = 0; i < splices.length; i++) {
      var current = splices[i];
      current.index += insertionOffset;
      if (inserted)
        continue;
      var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
      if (intersectCount >= 0) {
        splices.splice(i, 1);
        i--;
        insertionOffset -= current.addedCount - current.removed.length;
        splice.addedCount += current.addedCount - intersectCount;
        var deleteCount = splice.removed.length + current.removed.length - intersectCount;
        if (!splice.addedCount && !deleteCount) {
          inserted = true;
        } else {
          var removed = current.removed;
          if (splice.index < current.index) {
            var prepend = splice.removed.slice(0, current.index - splice.index);
            Array.prototype.push.apply(prepend, removed);
            removed = prepend;
          }
          if (splice.index + splice.removed.length > current.index + current.addedCount) {
            var append = splice.removed.slice(current.index + current.addedCount - splice.index);
            Array.prototype.push.apply(removed, append);
          }
          splice.removed = removed;
          if (current.index < splice.index) {
            splice.index = current.index;
          }
        }
      } else if (splice.index < current.index) {
        inserted = true;
        splices.splice(i, 0, splice);
        i++;
        var offset = splice.addedCount - splice.removed.length;
        current.index += offset;
        insertionOffset += offset;
      }
    }
    if (!inserted)
      splices.push(splice);
  }
  function createInitialSplices(array, changeRecords) {
    var splices = [];
    for (var i = 0; i < changeRecords.length; i++) {
      var record = changeRecords[i];
      switch (record.type) {
        case "splice":
          mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
          break;
        case "add":
        case "update":
        case "delete":
          if (!isIndex(record.name))
            continue;
          var index = toNumber(record.name);
          if (index < 0)
            continue;
          mergeSplice(splices, index, [record.oldValue], 1);
          break;
        default:
          console.error("Unexpected record type: " + JSON.stringify(record));
          break;
      }
    }
    return splices;
  }
  function projectArraySplices(array, changeRecords) {
    var splices = [];
    createInitialSplices(array, changeRecords).forEach(function(splice) {
      if (splice.addedCount == 1 && splice.removed.length == 1) {
        if (splice.removed[0] !== array[splice.index])
          splices.push(splice);
        return;
      }
      ;
      splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    });
    return splices;
  }
  return {
    setters: [],
    execute: function() {
      EDIT_LEAVE = 0;
      EDIT_UPDATE = 1;
      EDIT_ADD = 2;
      EDIT_DELETE = 3;
      ArraySplice.prototype = {
        calcEditDistances: function(current, currentStart, currentEnd, old, oldStart, oldEnd) {
          var rowCount = oldEnd - oldStart + 1;
          var columnCount = currentEnd - currentStart + 1;
          var distances = new Array(rowCount);
          var i,
              j,
              north,
              west;
          for (i = 0; i < rowCount; ++i) {
            distances[i] = new Array(columnCount);
            distances[i][0] = i;
          }
          for (j = 0; j < columnCount; ++j) {
            distances[0][j] = j;
          }
          for (i = 1; i < rowCount; ++i) {
            for (j = 1; j < columnCount; ++j) {
              if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1]))
                distances[i][j] = distances[i - 1][j - 1];
              else {
                north = distances[i - 1][j] + 1;
                west = distances[i][j - 1] + 1;
                distances[i][j] = north < west ? north : west;
              }
            }
          }
          return distances;
        },
        spliceOperationsFromEditDistances: function(distances) {
          var i = distances.length - 1;
          var j = distances[0].length - 1;
          var current = distances[i][j];
          var edits = [];
          while (i > 0 || j > 0) {
            if (i == 0) {
              edits.push(EDIT_ADD);
              j--;
              continue;
            }
            if (j == 0) {
              edits.push(EDIT_DELETE);
              i--;
              continue;
            }
            var northWest = distances[i - 1][j - 1];
            var west = distances[i - 1][j];
            var north = distances[i][j - 1];
            var min;
            if (west < north)
              min = west < northWest ? west : northWest;
            else
              min = north < northWest ? north : northWest;
            if (min == northWest) {
              if (northWest == current) {
                edits.push(EDIT_LEAVE);
              } else {
                edits.push(EDIT_UPDATE);
                current = northWest;
              }
              i--;
              j--;
            } else if (min == west) {
              edits.push(EDIT_DELETE);
              i--;
              current = west;
            } else {
              edits.push(EDIT_ADD);
              j--;
              current = north;
            }
          }
          edits.reverse();
          return edits;
        },
        calcSplices: function(current, currentStart, currentEnd, old, oldStart, oldEnd) {
          var prefixCount = 0;
          var suffixCount = 0;
          var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
          if (currentStart == 0 && oldStart == 0)
            prefixCount = this.sharedPrefix(current, old, minLength);
          if (currentEnd == current.length && oldEnd == old.length)
            suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
          currentStart += prefixCount;
          oldStart += prefixCount;
          currentEnd -= suffixCount;
          oldEnd -= suffixCount;
          if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0)
            return [];
          if (currentStart == currentEnd) {
            var splice = newSplice(currentStart, [], 0);
            while (oldStart < oldEnd)
              splice.removed.push(old[oldStart++]);
            return [splice];
          } else if (oldStart == oldEnd)
            return [newSplice(currentStart, [], currentEnd - currentStart)];
          var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
          var splice = undefined;
          var splices = [];
          var index = currentStart;
          var oldIndex = oldStart;
          for (var i = 0; i < ops.length; ++i) {
            switch (ops[i]) {
              case EDIT_LEAVE:
                if (splice) {
                  splices.push(splice);
                  splice = undefined;
                }
                index++;
                oldIndex++;
                break;
              case EDIT_UPDATE:
                if (!splice)
                  splice = newSplice(index, [], 0);
                splice.addedCount++;
                index++;
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
              case EDIT_ADD:
                if (!splice)
                  splice = newSplice(index, [], 0);
                splice.addedCount++;
                index++;
                break;
              case EDIT_DELETE:
                if (!splice)
                  splice = newSplice(index, [], 0);
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            }
          }
          if (splice) {
            splices.push(splice);
          }
          return splices;
        },
        sharedPrefix: function(current, old, searchLength) {
          for (var i = 0; i < searchLength; ++i)
            if (!this.equals(current[i], old[i]))
              return i;
          return searchLength;
        },
        sharedSuffix: function(current, old, searchLength) {
          var index1 = current.length;
          var index2 = old.length;
          var count = 0;
          while (count < searchLength && this.equals(current[--index1], old[--index2]))
            count++;
          return count;
        },
        calculateSplices: function(current, previous) {
          return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
        },
        equals: function(currentValue, previousValue) {
          return currentValue === previousValue;
        }
      };
      arraySplice = new ArraySplice();
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/dirty-checking", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      DirtyChecker,
      DirtyCheckProperty;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      DirtyChecker = (function() {
        var DirtyChecker = function DirtyChecker() {
          this.tracked = [];
          this.checkDelay = 120;
        };
        _prototypeProperties(DirtyChecker, null, {
          addProperty: {
            value: function(property) {
              var tracked = this.tracked;
              tracked.push(property);
              if (tracked.length === 1) {
                this.scheduleDirtyCheck();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          removeProperty: {
            value: function(property) {
              var tracked = this.tracked;
              tracked.splice(tracked.indexOf(property), 1);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          scheduleDirtyCheck: {
            value: function() {
              var _this = this;
              setTimeout(function() {
                return _this.check();
              }, this.checkDelay);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          check: {
            value: function() {
              var tracked = this.tracked,
                  i = tracked.length;
              while (i--) {
                var current = tracked[i];
                if (current.isDirty()) {
                  current.call();
                }
              }
              if (tracked.length) {
                this.scheduleDirtyCheck();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return DirtyChecker;
      })();
      _export("DirtyChecker", DirtyChecker);
      DirtyCheckProperty = (function() {
        var DirtyCheckProperty = function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
          this.dirtyChecker = dirtyChecker;
          this.obj = obj;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.isSVG = obj instanceof SVGElement;
        };
        _prototypeProperties(DirtyCheckProperty, null, {
          getValue: {
            value: function() {
              return this.obj[this.propertyName];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setValue: {
            value: function(newValue) {
              if (this.isSVG) {
                this.obj.setAttributeNS(null, this.propertyName, newValue);
              } else {
                this.obj[this.propertyName] = newValue;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          call: {
            value: function() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.oldValue,
                  newValue = this.getValue();
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
              this.oldValue = newValue;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          isDirty: {
            value: function() {
              return this.oldValue !== this.getValue();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          beginTracking: {
            value: function() {
              this.tracking = true;
              this.oldValue = this.newValue = this.getValue();
              this.dirtyChecker.addProperty(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          endTracking: {
            value: function() {
              this.tracking = false;
              this.dirtyChecker.removeProperty(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function(callback) {
              var callbacks = this.callbacks,
                  that = this;
              callbacks.push(callback);
              if (!this.tracking) {
                this.beginTracking();
              }
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
                if (callbacks.length === 0) {
                  that.endTracking();
                }
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return DirtyCheckProperty;
      })();
      _export("DirtyCheckProperty", DirtyCheckProperty);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/property-observation", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      SetterObserver,
      OoObjectObserver,
      OoPropertyObserver,
      ElementObserver;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      SetterObserver = (function() {
        var SetterObserver = function SetterObserver(taskQueue, obj, propertyName) {
          this.taskQueue = taskQueue;
          this.obj = obj;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.queued = false;
          this.observing = false;
          this.isSVG = obj instanceof SVGElement;
        };
        _prototypeProperties(SetterObserver, null, {
          getValue: {
            value: function() {
              return this.obj[this.propertyName];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setValue: {
            value: function(newValue) {
              if (this.isSVG) {
                this.obj.setAttributeNS(null, this.propertyName, newValue);
              } else {
                this.obj[this.propertyName] = newValue;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getterValue: {
            value: function() {
              return this.currentValue;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setterValue: {
            value: function(newValue) {
              var oldValue = this.currentValue;
              if (oldValue != newValue) {
                if (!this.queued) {
                  this.oldValue = oldValue;
                  this.queued = true;
                  this.taskQueue.queueMicroTask(this);
                }
                this.currentValue = newValue;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          call: {
            value: function() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.oldValue,
                  newValue = this.currentValue;
              this.queued = false;
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function(callback) {
              var callbacks = this.callbacks;
              callbacks.push(callback);
              if (!this.observing) {
                this.convertProperty();
              }
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          convertProperty: {
            value: function() {
              this.observing = true;
              this.currentValue = this.obj[this.propertyName];
              this.setValue = this.setterValue;
              this.getValue = this.getterValue;
              Object.defineProperty(this.obj, this.propertyName, {
                configurable: true,
                enumerable: true,
                get: this.getValue.bind(this),
                set: this.setValue.bind(this)
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return SetterObserver;
      })();
      _export("SetterObserver", SetterObserver);
      OoObjectObserver = (function() {
        var OoObjectObserver = function OoObjectObserver(obj) {
          this.obj = obj;
          this.observers = {};
        };
        _prototypeProperties(OoObjectObserver, null, {
          subscribe: {
            value: function(propertyObserver, callback) {
              var _this = this;
              var callbacks = propertyObserver.callbacks;
              callbacks.push(callback);
              if (!this.observing) {
                this.observing = true;
                Object.observe(this.obj, function(changes) {
                  return _this.handleChanges(changes);
                }, ["update", "add"]);
              }
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getObserver: {
            value: function(propertyName) {
              var propertyObserver = this.observers[propertyName] || (this.observers[propertyName] = new OoPropertyObserver(this, this.obj, propertyName));
              return propertyObserver;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          handleChanges: {
            value: function(changeRecords) {
              var updates = {},
                  observers = this.observers,
                  i = changeRecords.length;
              while (i--) {
                var change = changeRecords[i],
                    name = change.name;
                if (!(name in updates)) {
                  var observer = observers[name];
                  updates[name] = true;
                  if (observer) {
                    observer.trigger(change.object[name], change.oldValue);
                  }
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return OoObjectObserver;
      })();
      _export("OoObjectObserver", OoObjectObserver);
      OoPropertyObserver = (function() {
        var OoPropertyObserver = function OoPropertyObserver(owner, obj, propertyName) {
          this.owner = owner;
          this.obj = obj;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.isSVG = obj instanceof SVGElement;
        };
        _prototypeProperties(OoPropertyObserver, null, {
          getValue: {
            value: function() {
              return this.obj[this.propertyName];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setValue: {
            value: function(newValue) {
              if (this.isSVG) {
                this.obj.setAttributeNS(null, this.propertyName, newValue);
              } else {
                this.obj[this.propertyName] = newValue;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          trigger: {
            value: function(newValue, oldValue) {
              var callbacks = this.callbacks,
                  i = callbacks.length;
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function(callback) {
              return this.owner.subscribe(this, callback);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return OoPropertyObserver;
      })();
      _export("OoPropertyObserver", OoPropertyObserver);
      ElementObserver = (function() {
        var ElementObserver = function ElementObserver(handler, element, propertyName) {
          this.element = element;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.oldValue = element[propertyName];
          this.handler = handler;
        };
        _prototypeProperties(ElementObserver, null, {
          getValue: {
            value: function() {
              return this.element[this.propertyName];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setValue: {
            value: function(newValue) {
              this.element[this.propertyName] = newValue;
              this.call();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          call: {
            value: function() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.oldValue,
                  newValue = this.getValue();
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
              this.oldValue = newValue;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function(callback) {
              var that = this;
              if (!this.disposeHandler) {
                this.disposeHandler = this.handler.subscribe(this.element, this.propertyName, this.call.bind(this));
              }
              var callbacks = this.callbacks;
              callbacks.push(callback);
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
                if (callback.length === 0) {
                  that.disposeHandler();
                  that.disposeHandler = null;
                }
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ElementObserver;
      })();
      _export("ElementObserver", ElementObserver);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/value-converter", ["aurelia-metadata"], function(_export) {
  "use strict";
  var ResourceType,
      _prototypeProperties,
      _inherits,
      capitalMatcher,
      ValueConverter;
  function addHyphenAndLower(char) {
    return "-" + char.toLowerCase();
  }
  function hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
  }
  return {
    setters: [function(_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      capitalMatcher = /([A-Z])/g;
      ValueConverter = (function(ResourceType) {
        var ValueConverter = function ValueConverter(name) {
          this.name = name;
        };
        _inherits(ValueConverter, ResourceType);
        _prototypeProperties(ValueConverter, {convention: {
            value: function(name) {
              if (name.endsWith("ValueConverter")) {
                return new ValueConverter(hyphenate(name.substring(0, name.length - 14)));
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          load: {
            value: function(container, target) {
              this.instance = container.get(target);
              return Promise.resolve(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          register: {
            value: function(registry, name) {
              registry.registerValueConverter(name || this.name, this.instance);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ValueConverter;
      })(ResourceType);
      _export("ValueConverter", ValueConverter);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/binding-modes", [], function(_export) {
  "use strict";
  var ONE_WAY,
      TWO_WAY,
      ONE_TIME;
  return {
    setters: [],
    execute: function() {
      ONE_WAY = _export("ONE_WAY", 1);
      TWO_WAY = _export("TWO_WAY", 2);
      ONE_TIME = _export("ONE_TIME", 3);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/expressions/lexer", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      Token,
      Lexer,
      Scanner,
      OPERATORS,
      $EOF,
      $TAB,
      $LF,
      $VTAB,
      $FF,
      $CR,
      $SPACE,
      $BANG,
      $DQ,
      $$,
      $PERCENT,
      $AMPERSAND,
      $SQ,
      $LPAREN,
      $RPAREN,
      $STAR,
      $PLUS,
      $COMMA,
      $MINUS,
      $PERIOD,
      $SLASH,
      $COLON,
      $SEMICOLON,
      $LT,
      $EQ,
      $GT,
      $QUESTION,
      $0,
      $9,
      $A,
      $E,
      $Z,
      $LBRACKET,
      $BACKSLASH,
      $RBRACKET,
      $CARET,
      $_,
      $a,
      $e,
      $f,
      $n,
      $r,
      $t,
      $u,
      $v,
      $z,
      $LBRACE,
      $BAR,
      $RBRACE,
      $TILDE,
      $NBSP;
  function isWhitespace(code) {
    return code >= $TAB && code <= $SPACE || code == $NBSP;
  }
  function isIdentifierStart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || code == $_ || code == $$;
  }
  function isIdentifierPart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code == $_ || code == $$;
  }
  function isDigit(code) {
    return $0 <= code && code <= $9;
  }
  function isExponentStart(code) {
    return code == $e || code == $E;
  }
  function isExponentSign(code) {
    return code == $MINUS || code == $PLUS;
  }
  function unescape(code) {
    switch (code) {
      case $n:
        return $LF;
      case $f:
        return $FF;
      case $r:
        return $CR;
      case $t:
        return $TAB;
      case $v:
        return $VTAB;
      default:
        return code;
    }
  }
  function assert(condition, message) {
    if (!condition) {
      throw message || "Assertion failed";
    }
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Token = (function() {
        var Token = function Token(index, text) {
          this.index = index;
          this.text = text;
        };
        _prototypeProperties(Token, null, {
          withOp: {
            value: function(op) {
              this.opKey = op;
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          withGetterSetter: {
            value: function(key) {
              this.key = key;
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          withValue: {
            value: function(value) {
              this.value = value;
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          toString: {
            value: function() {
              return "Token(" + this.text + ")";
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Token;
      })();
      _export("Token", Token);
      Lexer = (function() {
        var Lexer = function Lexer() {};
        _prototypeProperties(Lexer, null, {lex: {
            value: function(text) {
              var scanner = new Scanner(text);
              var tokens = [];
              var token = scanner.scanToken();
              while (token) {
                tokens.push(token);
                token = scanner.scanToken();
              }
              return tokens;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Lexer;
      })();
      _export("Lexer", Lexer);
      Scanner = (function() {
        var Scanner = function Scanner(input) {
          this.input = input;
          this.length = input.length;
          this.peek = 0;
          this.index = -1;
          this.advance();
        };
        _prototypeProperties(Scanner, null, {
          scanToken: {
            value: function() {
              while (this.peek <= $SPACE) {
                if (++this.index >= this.length) {
                  this.peek = $EOF;
                  return null;
                } else {
                  this.peek = this.input.charCodeAt(this.index);
                }
              }
              if (isIdentifierStart(this.peek)) {
                return this.scanIdentifier();
              }
              if (isDigit(this.peek)) {
                return this.scanNumber(this.index);
              }
              var start = this.index;
              switch (this.peek) {
                case $PERIOD:
                  this.advance();
                  return isDigit(this.peek) ? this.scanNumber(start) : new Token(start, ".");
                case $LPAREN:
                case $RPAREN:
                case $LBRACE:
                case $RBRACE:
                case $LBRACKET:
                case $RBRACKET:
                case $COMMA:
                case $COLON:
                case $SEMICOLON:
                  return this.scanCharacter(start, String.fromCharCode(this.peek));
                case $SQ:
                case $DQ:
                  return this.scanString();
                case $PLUS:
                case $MINUS:
                case $STAR:
                case $SLASH:
                case $PERCENT:
                case $CARET:
                case $QUESTION:
                  return this.scanOperator(start, String.fromCharCode(this.peek));
                case $LT:
                case $GT:
                case $BANG:
                case $EQ:
                  return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), "=");
                case $AMPERSAND:
                  return this.scanComplexOperator(start, $AMPERSAND, "&", "&");
                case $BAR:
                  return this.scanComplexOperator(start, $BAR, "|", "|");
                case $TILDE:
                  return this.scanComplexOperator(start, $SLASH, "~", "/");
                case $NBSP:
                  while (isWhitespace(this.peek)) {
                    this.advance();
                  }
                  return this.scanToken();
              }
              var character = String.fromCharCode(this.peek);
              this.error("Unexpected character [" + character + "]");
              return null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          scanCharacter: {
            value: function(start, text) {
              assert(this.peek == text.charCodeAt(0));
              this.advance();
              return new Token(start, text);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          scanOperator: {
            value: function(start, text) {
              assert(this.peek == text.charCodeAt(0));
              assert(OPERATORS.indexOf(text) != -1);
              this.advance();
              return new Token(start, text).withOp(text);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          scanComplexOperator: {
            value: function(start, code, one, two) {
              assert(this.peek == one.charCodeAt(0));
              this.advance();
              var text = one;
              if (this.peek == code) {
                this.advance();
                text += two;
              }
              assert(OPERATORS.indexOf(text) != -1);
              return new Token(start, text).withOp(text);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          scanIdentifier: {
            value: function() {
              assert(isIdentifierStart(this.peek));
              var start = this.index;
              this.advance();
              while (isIdentifierPart(this.peek)) {
                this.advance();
              }
              var text = this.input.substring(start, this.index);
              var result = new Token(start, text);
              if (OPERATORS.indexOf(text) != -1) {
                result.withOp(text);
              } else {
                result.withGetterSetter(text);
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          scanNumber: {
            value: function(start) {
              assert(isDigit(this.peek));
              var simple = this.index == start;
              this.advance();
              while (true) {
                if (isDigit(this.peek)) {} else if (this.peek == $PERIOD) {
                  simple = false;
                } else if (isExponentStart(this.peek)) {
                  this.advance();
                  if (isExponentSign(this.peek)) {
                    this.advance();
                  }
                  if (!isDigit(this.peek)) {
                    this.error("Invalid exponent", -1);
                  }
                  simple = false;
                } else {
                  break;
                }
                this.advance();
              }
              var text = this.input.substring(start, this.index);
              var value = simple ? parseInt(text) : parseFloat(text);
              return new Token(start, text).withValue(value);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          scanString: {
            value: function() {
              assert(this.peek == $SQ || this.peek == $DQ);
              var start = this.index;
              var quote = this.peek;
              this.advance();
              var buffer;
              var marker = this.index;
              while (this.peek != quote) {
                if (this.peek == $BACKSLASH) {
                  if (buffer == null) {
                    buffer = [];
                  }
                  buffer.push(this.input.substring(marker, this.index));
                  this.advance();
                  var unescaped;
                  if (this.peek == $u) {
                    var hex = this.input.substring(this.index + 1, this.index + 5);
                    if (!/[A-Z0-9]{4}/.test(hex)) {
                      this.error("Invalid unicode escape [\\u" + hex + "]");
                    }
                    unescaped = parseInt(hex, 16);
                    for (var i = 0; i < 5; i++) {
                      this.advance();
                    }
                  } else {
                    unescaped = decodeURIComponent(this.peek);
                    this.advance();
                  }
                  buffer.push(String.fromCharCode(unescaped));
                  marker = this.index;
                } else if (this.peek == $EOF) {
                  this.error("Unterminated quote");
                } else {
                  this.advance();
                }
              }
              var last = this.input.substring(marker, this.index);
              this.advance();
              var text = this.input.substring(start, this.index);
              var unescaped = last;
              if (buffer != null) {
                buffer.push(last);
                unescaped = buffer.join("");
              }
              return new Token(start, text).withValue(unescaped);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          advance: {
            value: function() {
              if (++this.index >= this.length) {
                this.peek = $EOF;
              } else {
                this.peek = this.input.charCodeAt(this.index);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          error: {
            value: function(message) {
              var offset = arguments[1] === undefined ? 0 : arguments[1];
              var position = this.index + offset;
              throw new Error("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Scanner;
      })();
      _export("Scanner", Scanner);
      OPERATORS = ["undefined", "null", "true", "false", "+", "-", "*", "/", "~/", "%", "^", "=", "==", "!=", "<", ">", "<=", ">=", "&&", "||", "&", "|", "!", "?"];
      $EOF = 0;
      $TAB = 9;
      $LF = 10;
      $VTAB = 11;
      $FF = 12;
      $CR = 13;
      $SPACE = 32;
      $BANG = 33;
      $DQ = 34;
      $$ = 36;
      $PERCENT = 37;
      $AMPERSAND = 38;
      $SQ = 39;
      $LPAREN = 40;
      $RPAREN = 41;
      $STAR = 42;
      $PLUS = 43;
      $COMMA = 44;
      $MINUS = 45;
      $PERIOD = 46;
      $SLASH = 47;
      $COLON = 58;
      $SEMICOLON = 59;
      $LT = 60;
      $EQ = 61;
      $GT = 62;
      $QUESTION = 63;
      $0 = 48;
      $9 = 57;
      $A = 65;
      $E = 69;
      $Z = 90;
      $LBRACKET = 91;
      $BACKSLASH = 92;
      $RBRACKET = 93;
      $CARET = 94;
      $_ = 95;
      $a = 97;
      $e = 101;
      $f = 102;
      $n = 110;
      $r = 114;
      $t = 116;
      $u = 117;
      $v = 118;
      $z = 122;
      $LBRACE = 123;
      $BAR = 124;
      $RBRACE = 125;
      $TILDE = 126;
      $NBSP = 160;
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/binding-expression", ["./binding-modes"], function(_export) {
  "use strict";
  var ONE_WAY,
      TWO_WAY,
      _prototypeProperties,
      BindingExpression,
      Binding;
  return {
    setters: [function(_bindingModes) {
      ONE_WAY = _bindingModes.ONE_WAY;
      TWO_WAY = _bindingModes.TWO_WAY;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BindingExpression = (function() {
        var BindingExpression = function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, valueConverterLookupFunction, attribute) {
          this.observerLocator = observerLocator;
          this.targetProperty = targetProperty;
          this.sourceExpression = sourceExpression;
          this.mode = mode;
          this.valueConverterLookupFunction = valueConverterLookupFunction;
          this.attribute = attribute;
          this.discrete = false;
        };
        _prototypeProperties(BindingExpression, null, {createBinding: {
            value: function(target) {
              return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.valueConverterLookupFunction);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return BindingExpression;
      })();
      _export("BindingExpression", BindingExpression);
      Binding = (function() {
        var Binding = function Binding(observerLocator, sourceExpression, target, targetProperty, mode, valueConverterLookupFunction) {
          this.observerLocator = observerLocator;
          this.sourceExpression = sourceExpression;
          this.targetProperty = observerLocator.getObserver(target, targetProperty);
          this.mode = mode;
          this.valueConverterLookupFunction = valueConverterLookupFunction;
        };
        _prototypeProperties(Binding, null, {
          getObserver: {
            value: function(obj, propertyName) {
              return this.observerLocator.getObserver(obj, propertyName);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          bind: {
            value: function(source) {
              var _this = this;
              var targetProperty = this.targetProperty,
                  info;
              if (this.mode == ONE_WAY || this.mode == TWO_WAY) {
                if (this._disposeObserver) {
                  if (this.source === source) {
                    return;
                  }
                  this.unbind();
                }
                info = this.sourceExpression.connect(this, source);
                if (info.observer) {
                  this._disposeObserver = info.observer.subscribe(function(newValue) {
                    var existing = targetProperty.getValue();
                    if (newValue !== existing) {
                      targetProperty.setValue(newValue);
                    }
                  });
                }
                if (info.value !== undefined) {
                  targetProperty.setValue(info.value);
                }
                if (this.mode == TWO_WAY) {
                  this._disposeListener = targetProperty.subscribe(function(newValue) {
                    _this.sourceExpression.assign(source, newValue, _this.valueConverterLookupFunction);
                  });
                }
                this.source = source;
              } else {
                var value = this.sourceExpression.eval(source, this.valueConverterLookupFunction);
                if (value !== undefined) {
                  targetProperty.setValue(value);
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function() {
              if (this._disposeObserver) {
                this._disposeObserver();
                this._disposeObserver = null;
              }
              if (this._disposeListener) {
                this._disposeListener();
                this._disposeListener = null;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Binding;
      })();
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/listener-expression", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      ListenerExpression,
      Listener;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ListenerExpression = (function() {
        var ListenerExpression = function ListenerExpression(eventManager, targetEvent, sourceExpression, delegate, preventDefault) {
          this.eventManager = eventManager;
          this.targetEvent = targetEvent;
          this.sourceExpression = sourceExpression;
          this.delegate = delegate;
          this.discrete = true;
          this.preventDefault = preventDefault;
        };
        _prototypeProperties(ListenerExpression, null, {createBinding: {
            value: function(target) {
              return new Listener(this.eventManager, this.targetEvent, this.delegate, this.sourceExpression, target, this.preventDefault);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return ListenerExpression;
      })();
      _export("ListenerExpression", ListenerExpression);
      Listener = (function() {
        var Listener = function Listener(eventManager, targetEvent, delegate, sourceExpression, target, preventDefault) {
          this.eventManager = eventManager;
          this.targetEvent = targetEvent;
          this.delegate = delegate;
          this.sourceExpression = sourceExpression;
          this.target = target;
          this.preventDefault = preventDefault;
        };
        _prototypeProperties(Listener, null, {
          bind: {
            value: function(source) {
              var _this = this;
              if (this._disposeListener) {
                if (this.source === source) {
                  return;
                }
                this.unbind();
              }
              this.source = source;
              this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function(event) {
                var prevEvent = source.$event;
                source.$event = event;
                var result = _this.sourceExpression.eval(source);
                source.$event = prevEvent;
                if (_this.preventDefault) {
                  event.preventDefault();
                }
                return result;
              }, this.delegate);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function() {
              if (this._disposeListener) {
                this._disposeListener();
                this._disposeListener = null;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Listener;
      })();
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/name-expression", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      NameExpression,
      NameBinder;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      NameExpression = (function() {
        var NameExpression = function NameExpression(name, mode) {
          this.property = name;
          this.discrete = true;
          this.mode = (mode || "view-model").toLowerCase();
        };
        _prototypeProperties(NameExpression, null, {createBinding: {
            value: function(target) {
              return new NameBinder(this.property, target, this.mode);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return NameExpression;
      })();
      _export("NameExpression", NameExpression);
      NameBinder = (function() {
        var NameBinder = function NameBinder(property, target, mode) {
          this.property = property;
          switch (mode) {
            case "element":
              this.target = target;
              break;
            case "view-model":
              this.target = target.primaryBehavior ? target.primaryBehavior.executionContext : target;
              break;
            default:
              throw new Error("Name expressions do not support mode: " + mode);
          }
        };
        _prototypeProperties(NameBinder, null, {
          bind: {
            value: function(source) {
              if (this.source) {
                if (this.source === source) {
                  return;
                }
                this.unbind();
              }
              this.source = source;
              source[this.property] = this.target;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function() {
              this.source[this.property] = null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return NameBinder;
      })();
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/call-expression", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      CallExpression,
      Call;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      CallExpression = (function() {
        var CallExpression = function CallExpression(observerLocator, targetProperty, sourceExpression, valueConverterLookupFunction) {
          this.observerLocator = observerLocator;
          this.targetProperty = targetProperty;
          this.sourceExpression = sourceExpression;
          this.valueConverterLookupFunction = valueConverterLookupFunction;
        };
        _prototypeProperties(CallExpression, null, {createBinding: {
            value: function(target) {
              return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.valueConverterLookupFunction);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return CallExpression;
      })();
      _export("CallExpression", CallExpression);
      Call = (function() {
        var Call = function Call(observerLocator, sourceExpression, target, targetProperty, valueConverterLookupFunction) {
          this.sourceExpression = sourceExpression;
          this.target = target;
          this.targetProperty = observerLocator.getObserver(target, targetProperty);
          this.valueConverterLookupFunction = valueConverterLookupFunction;
        };
        _prototypeProperties(Call, null, {
          bind: {
            value: function(source) {
              var _this = this;
              if (this.source === source) {
                return;
              }
              if (this.source) {
                this.unbind();
              }
              this.source = source;
              this.targetProperty.setValue(function() {
                var rest = [];
                for (var _key = 0; _key < arguments.length; _key++) {
                  rest[_key] = arguments[_key];
                }
                return _this.sourceExpression.eval(source, _this.valueConverterLookupFunction, rest);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function() {
              this.targetProperty.setValue(null);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Call;
      })();
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/children", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      noMutations,
      Children,
      ChildBinder;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      noMutations = [];
      Children = (function() {
        var Children = function Children(property, changeHandler, selector) {
          this.selector = selector;
          this.changeHandler = changeHandler;
          this.property = property;
        };
        _prototypeProperties(Children, null, {createBinding: {
            value: function(target, behavior) {
              return new ChildBinder(this.selector, target, this.property, behavior, this.changeHandler);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Children;
      })();
      _export("Children", Children);
      ChildBinder = (function() {
        var ChildBinder = function ChildBinder(selector, target, property, behavior, changeHandler) {
          this.selector = selector;
          this.target = target;
          this.property = property;
          this.target = target;
          this.behavior = behavior;
          this.changeHandler = changeHandler;
          this.observer = new MutationObserver(this.onChange.bind(this));
        };
        _prototypeProperties(ChildBinder, null, {
          bind: {
            value: function(source) {
              var items,
                  results,
                  i,
                  ii,
                  node,
                  behavior = this.behavior;
              this.observer.observe(this.target, {
                childList: true,
                subtree: true
              });
              items = behavior[this.property];
              if (!items) {
                items = behavior[this.property] = [];
              } else {
                items.length = 0;
              }
              results = this.target.querySelectorAll(this.selector);
              for (i = 0, ii = results.length; i < ii; ++i) {
                node = results[i];
                items.push(node.primaryBehavior ? node.primaryBehavior.executionContext : node);
              }
              if (this.changeHandler) {
                this.behavior[this.changeHandler](noMutations);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function() {
              this.observer.disconnect();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          onChange: {
            value: function(mutations) {
              var items = this.behavior[this.property],
                  selector = this.selector;
              mutations.forEach(function(record) {
                var added = record.addedNodes,
                    removed = record.removedNodes,
                    prev = record.previousSibling,
                    i,
                    ii,
                    primary,
                    index,
                    node;
                for (i = 0, ii = removed.length; i < ii; ++i) {
                  node = removed[i];
                  if (node.nodeType === 1 && node.matches(selector)) {
                    primary = node.primaryBehavior ? node.primaryBehavior.executionContext : node;
                    index = items.indexOf(primary);
                    if (index != -1) {
                      items.splice(index, 1);
                    }
                  }
                }
                for (i = 0, ii = added.length; i < ii; ++i) {
                  node = added[i];
                  if (node.nodeType === 1 && node.matches(selector)) {
                    primary = node.primaryBehavior ? node.primaryBehavior.executionContext : node;
                    index = 0;
                    while (prev) {
                      if (prev.nodeType === 1 && prev.matches(selector)) {
                        index++;
                      }
                      prev = prev.previousSibling;
                    }
                    items.splice(index, 0, primary);
                  }
                }
              });
              if (this.changeHandler) {
                this.behavior[this.changeHandler](mutations);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ChildBinder;
      })();
      _export("ChildBinder", ChildBinder);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/util", [], function(_export) {
  "use strict";
  var capitalMatcher;
  _export("hyphenate", hyphenate);
  function addHyphenAndLower(char) {
    return "-" + char.toLowerCase();
  }
  function hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
  }
  return {
    setters: [],
    execute: function() {
      capitalMatcher = /([A-Z])/g;
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/content-selector", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      proto,
      placeholder,
      ContentSelector;
  function findInsertionPoint(groups, index) {
    var insertionPoint;
    while (!insertionPoint && index >= 0) {
      insertionPoint = groups[index][0];
      index--;
    }
    return insertionPoint || anchor;
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      if (Element && !Element.prototype.matches) {
        proto = Element.prototype;
        proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
      }
      placeholder = [];
      ContentSelector = (function() {
        var ContentSelector = function ContentSelector(anchor, selector) {
          this.anchor = anchor;
          this.selector = selector;
          this.all = !this.selector;
          this.groups = [];
        };
        _prototypeProperties(ContentSelector, {applySelectors: {
            value: function(view, contentSelectors, callback) {
              var currentChild = view.fragment.firstChild,
                  contentMap = new Map(),
                  nextSibling,
                  i,
                  ii,
                  contentSelector;
              while (currentChild) {
                nextSibling = currentChild.nextSibling;
                if (currentChild.viewSlot) {
                  var viewSlotSelectors = contentSelectors.map(function(x) {
                    return x.copyForViewSlot();
                  });
                  currentChild.viewSlot.installContentSelectors(viewSlotSelectors);
                } else {
                  for (i = 0, ii = contentSelectors.length; i < ii; i++) {
                    contentSelector = contentSelectors[i];
                    if (contentSelector.matches(currentChild)) {
                      var elements = contentMap.get(contentSelector);
                      if (!elements) {
                        elements = [];
                        contentMap.set(contentSelector, elements);
                      }
                      elements.push(currentChild);
                      break;
                    }
                  }
                }
                currentChild = nextSibling;
              }
              for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
                contentSelector = contentSelectors[i];
                callback(contentSelector, contentMap.get(contentSelector) || placeholder);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          copyForViewSlot: {
            value: function() {
              return new ContentSelector(this.anchor, this.selector);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          matches: {
            value: function(node) {
              return this.all || node.nodeType === 1 && node.matches(this.selector);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          add: {
            value: function(group) {
              var anchor = this.anchor,
                  parent = anchor.parentNode,
                  i,
                  ii;
              for (i = 0, ii = group.length; i < ii; ++i) {
                parent.insertBefore(group[i], anchor);
              }
              this.groups.push(group);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          insert: {
            value: function(index, group) {
              if (group.length) {
                var anchor = findInsertionPoint(this.groups, index) || this.anchor,
                    parent = anchor.parentNode,
                    i,
                    ii;
                for (i = 0, ii = group.length; i < ii; ++i) {
                  parent.insertBefore(group[i], anchor);
                }
              }
              this.groups.splice(index, 0, group);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          removeAt: {
            value: function(index, fragment) {
              var group = this.groups[index],
                  i,
                  ii;
              for (i = 0, ii = group.length; i < ii; ++i) {
                fragment.appendChild(group[i]);
              }
              this.groups.splice(index, 1);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ContentSelector;
      })();
      _export("ContentSelector", ContentSelector);
    }
  };
});



System.register("github:aurelia/path@0.4.0/system/index", [], function(_export) {
  "use strict";
  _export("relativeToFile", relativeToFile);
  _export("join", join);
  function trimDots(ary) {
    var i,
        part;
    for (i = 0; i < ary.length; ++i) {
      part = ary[i];
      if (part === ".") {
        ary.splice(i, 1);
        i -= 1;
      } else if (part === "..") {
        if (i === 0 || i == 1 && ary[2] === ".." || ary[i - 1] === "..") {
          continue;
        } else if (i > 0) {
          ary.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  }
  function relativeToFile(name, file) {
    var lastIndex,
        normalizedBaseParts,
        fileParts = file && file.split("/");
    name = name.trim();
    name = name.split("/");
    if (name[0].charAt(0) === "." && fileParts) {
      normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
      name = normalizedBaseParts.concat(name);
    }
    trimDots(name);
    return name.join("/");
  }
  function join(path1, path2) {
    var url1,
        url2,
        url3,
        i,
        ii;
    if (!path1) {
      return path2;
    }
    if (!path2) {
      return path1;
    }
    url1 = path1.split("/");
    url2 = path2.split("/");
    url3 = [];
    for (i = 0, ii = url1.length; i < ii; ++i) {
      if (url1[i] == "..") {
        url3.pop();
      } else if (url1[i] == "." || url1[i] == "") {
        continue;
      } else {
        url3.push(url1[i]);
      }
    }
    for (i = 0, ii = url2.length; i < ii; ++i) {
      if (url2[i] == "..") {
        url3.pop();
      } else if (url2[i] == "." || url2[i] == "") {
        continue;
      } else {
        url3.push(url2[i]);
      }
    }
    return url3.join("/").replace(/\:\//g, "://");
    ;
  }
  return {
    setters: [],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.7.1/system/resource-registry", ["aurelia-path"], function(_export) {
  "use strict";
  var relativeToFile,
      _get,
      _inherits,
      _prototypeProperties,
      ResourceRegistry,
      ViewResources;
  function register(lookup, name, resource, type) {
    if (!name) {
      return;
    }
    var existing = lookup[name];
    if (existing) {
      if (existing != resource) {
        throw new Error("Attempted to register " + type + " when one with the same name already exists. Name: " + name + ".");
      }
      return;
    }
    lookup[name] = resource;
  }
  return {
    setters: [function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }],
    execute: function() {
      _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === undefined) {
            return undefined;
          }
          return getter.call(receiver);
        }
      };
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ResourceRegistry = (function() {
        var ResourceRegistry = function ResourceRegistry() {
          this.attributes = {};
          this.elements = {};
          this.valueConverters = {};
          this.attributeMap = {};
        };
        _prototypeProperties(ResourceRegistry, null, {
          registerElement: {
            value: function(tagName, behavior) {
              register(this.elements, tagName, behavior, "an Element");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getElement: {
            value: function(tagName) {
              return this.elements[tagName];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          registerAttribute: {
            value: function(attribute, behavior, knownAttribute) {
              this.attributeMap[attribute] = knownAttribute;
              register(this.attributes, attribute, behavior, "an Attribute");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getAttribute: {
            value: function(attribute) {
              return this.attributes[attribute];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          registerValueConverter: {
            value: function(name, valueConverter) {
              register(this.valueConverters, name, valueConverter, "a ValueConverter");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getValueConverter: {
            value: function(name) {
              return this.valueConverters[name];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ResourceRegistry;
      })();
      _export("ResourceRegistry", ResourceRegistry);
      ViewResources = (function(ResourceRegistry) {
        var ViewResources = function ViewResources(parent, viewUrl) {
          _get(Object.getPrototypeOf(ViewResources.prototype), "constructor", this).call(this);
          this.parent = parent;
          this.viewUrl = viewUrl;
          this.valueConverterLookupFunction = this.getValueConverter.bind(this);
        };
        _inherits(ViewResources, ResourceRegistry);
        _prototypeProperties(ViewResources, null, {
          relativeToView: {
            value: function(path) {
              return relativeToFile(path, this.viewUrl);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getElement: {
            value: function(tagName) {
              return this.elements[tagName] || this.parent.getElement(tagName);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getAttribute: {
            value: function(attribute) {
              return this.attributes[attribute] || this.parent.getAttribute(attribute);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getValueConverter: {
            value: function(name) {
              return this.valueConverters[name] || this.parent.getValueConverter(name);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ViewResources;
      })(ResourceRegistry);
      _export("ViewResources", ViewResources);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/view", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      View;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      View = (function() {
        var View = function View(fragment, behaviors, bindings, children, systemControlled, contentSelectors) {
          this.fragment = fragment;
          this.behaviors = behaviors;
          this.bindings = bindings;
          this.children = children;
          this.systemControlled = systemControlled;
          this.contentSelectors = contentSelectors;
          this.firstChild = fragment.firstChild;
          this.lastChild = fragment.lastChild;
          this.isBound = false;
          this.isAttached = false;
        };
        _prototypeProperties(View, null, {
          created: {
            value: function(executionContext) {
              var i,
                  ii,
                  behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].created(executionContext);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          bind: {
            value: function(executionContext, systemUpdate) {
              var context,
                  behaviors,
                  bindings,
                  children,
                  i,
                  ii;
              if (systemUpdate && !this.systemControlled) {
                context = this.executionContext || executionContext;
              } else {
                context = executionContext || this.executionContext;
              }
              if (this.isBound) {
                if (this.executionContext === context) {
                  return;
                }
                this.unbind();
              }
              this.isBound = true;
              this.executionContext = context;
              if (this.owner) {
                this.owner.bind(context);
              }
              bindings = this.bindings;
              for (i = 0, ii = bindings.length; i < ii; ++i) {
                bindings[i].bind(context);
              }
              behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].bind(context);
              }
              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].bind(context, true);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          addBinding: {
            value: function(binding) {
              this.bindings.push(binding);
              if (this.isBound) {
                binding.bind(this.executionContext);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function() {
              var behaviors,
                  bindings,
                  children,
                  i,
                  ii;
              if (this.isBound) {
                this.isBound = false;
                if (this.owner) {
                  this.owner.unbind();
                }
                bindings = this.bindings;
                for (i = 0, ii = bindings.length; i < ii; ++i) {
                  bindings[i].unbind();
                }
                behaviors = this.behaviors;
                for (i = 0, ii = behaviors.length; i < ii; ++i) {
                  behaviors[i].unbind();
                }
                children = this.children;
                for (i = 0, ii = children.length; i < ii; ++i) {
                  children[i].unbind();
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          insertNodesBefore: {
            value: function(refNode) {
              var parent = refNode.parentNode;
              parent.insertBefore(this.fragment, refNode);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          appendNodesTo: {
            value: function(parent) {
              parent.appendChild(this.fragment);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          removeNodes: {
            value: function() {
              var start = this.firstChild,
                  end = this.lastChild,
                  fragment = this.fragment,
                  next;
              var current = start,
                  loop = true,
                  nodes = [];
              while (loop) {
                if (current === end) {
                  loop = false;
                }
                next = current.nextSibling;
                this.fragment.appendChild(current);
                current = next;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          attached: {
            value: function() {
              var behaviors,
                  children,
                  i,
                  ii;
              if (this.isAttached) {
                return;
              }
              this.isAttached = true;
              if (this.owner) {
                this.owner.attached();
              }
              behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].attached();
              }
              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].attached();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          detached: {
            value: function() {
              var behaviors,
                  children,
                  i,
                  ii;
              if (this.isAttached) {
                this.isAttached = false;
                if (this.owner) {
                  this.owner.detached();
                }
                behaviors = this.behaviors;
                for (i = 0, ii = behaviors.length; i < ii; ++i) {
                  behaviors[i].detached();
                }
                children = this.children;
                for (i = 0, ii = children.length; i < ii; ++i) {
                  children[i].detached();
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return View;
      })();
      _export("View", View);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/view-slot", ["./content-selector"], function(_export) {
  "use strict";
  var ContentSelector,
      _prototypeProperties,
      ViewSlot;
  return {
    setters: [function(_contentSelector) {
      ContentSelector = _contentSelector.ContentSelector;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ViewSlot = (function() {
        var ViewSlot = function ViewSlot(anchor, anchorIsContainer, executionContext) {
          this.anchor = anchor;
          this.viewAddMethod = anchorIsContainer ? "appendNodesTo" : "insertNodesBefore";
          this.executionContext = executionContext;
          this.children = [];
          this.isBound = false;
          this.isAttached = false;
          anchor.viewSlot = this;
        };
        _prototypeProperties(ViewSlot, null, {
          bind: {
            value: function(executionContext) {
              var i,
                  ii,
                  children;
              if (this.isBound) {
                if (this.executionContext === executionContext) {
                  return;
                }
                this.unbind();
              }
              this.isBound = true;
              this.executionContext = executionContext = executionContext || this.executionContext;
              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].bind(executionContext, true);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function() {
              var i,
                  ii,
                  children = this.children;
              this.isBound = false;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].unbind();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          add: {
            value: function(view) {
              view[this.viewAddMethod](this.anchor);
              this.children.push(view);
              if (this.isAttached) {
                view.attached();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          insert: {
            value: function(index, view) {
              if (index === 0 && !this.children.length || index >= this.children.length) {
                this.add(view);
              } else {
                view.insertNodesBefore(this.children[index].firstChild);
                this.children.splice(index, 0, view);
                if (this.isAttached) {
                  view.attached();
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          remove: {
            value: function(view) {
              view.removeNodes();
              this.children.splice(this.children.indexOf(view), 1);
              if (this.isAttached) {
                view.detached();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          removeAt: {
            value: function(index) {
              var view = this.children[index];
              view.removeNodes();
              this.children.splice(index, 1);
              if (this.isAttached) {
                view.detached();
              }
              return view;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          removeAll: {
            value: function() {
              var children = this.children,
                  ii = children.length,
                  i;
              for (i = 0; i < ii; ++i) {
                children[i].removeNodes();
              }
              if (this.isAttached) {
                for (i = 0; i < ii; ++i) {
                  children[i].detached();
                }
              }
              this.children = [];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          swap: {
            value: function(view) {
              this.removeAll();
              this.add(view);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          attached: {
            value: function() {
              var i,
                  ii,
                  children;
              if (this.isAttached) {
                return;
              }
              this.isAttached = true;
              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].attached();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          detached: {
            value: function() {
              var i,
                  ii,
                  children;
              if (this.isAttached) {
                this.isAttached = false;
                children = this.children;
                for (i = 0, ii = children.length; i < ii; ++i) {
                  children[i].detached();
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          installContentSelectors: {
            value: function(contentSelectors) {
              this.contentSelectors = contentSelectors;
              this.add = this.contentSelectorAdd;
              this.insert = this.contentSelectorInsert;
              this.remove = this.contentSelectorRemove;
              this.removeAt = this.contentSelectorRemoveAt;
              this.removeAll = this.contentSelectorRemoveAll;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          contentSelectorAdd: {
            value: function(view) {
              ContentSelector.applySelectors(view, this.contentSelectors, function(contentSelector, group) {
                return contentSelector.add(group);
              });
              this.children.push(view);
              if (this.isAttached) {
                view.attached();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          contentSelectorInsert: {
            value: function(index, view) {
              if (index === 0 && !this.children.length || index >= this.children.length) {
                this.add(view);
              } else {
                ContentSelector.applySelectors(view, this.contentSelectors, function(contentSelector, group) {
                  return contentSelector.insert(index, group);
                });
                this.children.splice(index, 0, view);
                if (this.isAttached) {
                  view.attached();
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          contentSelectorRemove: {
            value: function(view) {
              var index = this.children.indexOf(view),
                  contentSelectors = this.contentSelectors,
                  i,
                  ii;
              for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
                contentSelectors[i].removeAt(index, view.fragment);
              }
              this.children.splice(index, 1);
              if (this.isAttached) {
                view.detached();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          contentSelectorRemoveAt: {
            value: function(index) {
              var view = this.children[index],
                  contentSelectors = this.contentSelectors,
                  i,
                  ii;
              for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
                contentSelectors[i].removeAt(index, view.fragment);
              }
              this.children.splice(index, 1);
              if (this.isAttached) {
                view.detached();
              }
              return view;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          contentSelectorRemoveAll: {
            value: function() {
              var children = this.children,
                  contentSelectors = this.contentSelectors,
                  ii = children.length,
                  jj = contentSelectors.length,
                  i,
                  j,
                  view;
              for (i = 0; i < ii; ++i) {
                view = children[i];
                for (j = 0; j < jj; ++j) {
                  contentSelectors[j].removeAt(i, view.fragment);
                }
              }
              if (this.isAttached) {
                for (i = 0; i < ii; ++i) {
                  children[i].detached();
                }
              }
              this.children = [];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ViewSlot;
      })();
      _export("ViewSlot", ViewSlot);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/binding-language", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      BindingLanguage;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BindingLanguage = (function() {
        var BindingLanguage = function BindingLanguage() {};
        _prototypeProperties(BindingLanguage, null, {
          inspectAttribute: {
            value: function(resources, attrName, attrValue) {
              throw new Error("A BindingLanguage must implement inspectAttribute(...)");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createAttributeInstruction: {
            value: function(resources, element, info, existingInstruction) {
              throw new Error("A BindingLanguage must implement createAttributeInstruction(...)");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseText: {
            value: function(resources, value) {
              throw new Error("A BindingLanguage must implement parseText(...)");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return BindingLanguage;
      })();
      _export("BindingLanguage", BindingLanguage);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/view-strategy", ["aurelia-metadata", "aurelia-path"], function(_export) {
  "use strict";
  var getAnnotation,
      Origin,
      relativeToFile,
      _inherits,
      _prototypeProperties,
      ViewStrategy,
      UseView,
      ConventionalView,
      NoView;
  return {
    setters: [function(_aureliaMetadata) {
      getAnnotation = _aureliaMetadata.getAnnotation;
      Origin = _aureliaMetadata.Origin;
    }, function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }],
    execute: function() {
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ViewStrategy = (function() {
        var ViewStrategy = function ViewStrategy() {};
        _prototypeProperties(ViewStrategy, {
          normalize: {
            value: function(value) {
              if (typeof value === "string") {
                value = new UseView(value);
              }
              if (value && !(value instanceof ViewStrategy)) {
                throw new Error("The view must be a string or an instance of ViewStrategy.");
              }
              return value;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getDefault: {
            value: function(target) {
              var strategy,
                  annotation;
              if (typeof target !== "function") {
                target = target.constructor;
              }
              annotation = Origin.get(target);
              strategy = getAnnotation(target, ViewStrategy);
              if (!strategy) {
                if (!annotation) {
                  throw new Error("Cannot determinte default view strategy for object.", target);
                }
                strategy = new ConventionalView(annotation.moduleId);
              } else if (annotation) {
                strategy.moduleId = annotation.moduleId;
              }
              return strategy;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          makeRelativeTo: {
            value: function(baseUrl) {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadViewFactory: {
            value: function(viewEngine, options) {
              throw new Error("A ViewStrategy must implement loadViewFactory(viewEngine, options).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ViewStrategy;
      })();
      _export("ViewStrategy", ViewStrategy);
      UseView = (function(ViewStrategy) {
        var UseView = function UseView(path) {
          this.path = path;
        };
        _inherits(UseView, ViewStrategy);
        _prototypeProperties(UseView, null, {
          loadViewFactory: {
            value: function(viewEngine, options) {
              return viewEngine.loadViewFactory(this.absolutePath || this.path, options, this.moduleId);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          makeRelativeTo: {
            value: function(file) {
              this.absolutePath = relativeToFile(this.path, file);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return UseView;
      })(ViewStrategy);
      _export("UseView", UseView);
      ConventionalView = (function(ViewStrategy) {
        var ConventionalView = function ConventionalView(moduleId) {
          this.moduleId = moduleId;
          this.viewUrl = ConventionalView.convertModuleIdToViewUrl(moduleId);
        };
        _inherits(ConventionalView, ViewStrategy);
        _prototypeProperties(ConventionalView, {convertModuleIdToViewUrl: {
            value: function(moduleId) {
              return moduleId + ".html";
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {loadViewFactory: {
            value: function(viewEngine, options) {
              return viewEngine.loadViewFactory(this.viewUrl, options, this.moduleId);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return ConventionalView;
      })(ViewStrategy);
      _export("ConventionalView", ConventionalView);
      NoView = (function(ViewStrategy) {
        var NoView = function NoView() {
          if (Object.getPrototypeOf(NoView) !== null) {
            Object.getPrototypeOf(NoView).apply(this, arguments);
          }
        };
        _inherits(NoView, ViewStrategy);
        _prototypeProperties(NoView, null, {loadViewFactory: {
            value: function() {
              return Promise.resolve(null);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return NoView;
      })(ViewStrategy);
      _export("NoView", NoView);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/template-controller", ["aurelia-metadata", "./behavior-instance", "./behaviors", "./property", "./util"], function(_export) {
  "use strict";
  var ResourceType,
      BehaviorInstance,
      configureBehavior,
      Property,
      hyphenate,
      _prototypeProperties,
      _inherits,
      TemplateController;
  return {
    setters: [function(_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function(_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function(_property) {
      Property = _property.Property;
    }, function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      TemplateController = (function(ResourceType) {
        var TemplateController = function TemplateController(attribute) {
          this.name = attribute;
          this.properties = [];
          this.attributes = {};
          this.liftsContent = true;
        };
        _inherits(TemplateController, ResourceType);
        _prototypeProperties(TemplateController, {convention: {
            value: function(name) {
              if (name.endsWith("TemplateController")) {
                return new TemplateController(hyphenate(name.substring(0, name.length - 18)));
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          load: {
            value: function(container, target) {
              configureBehavior(this, container, target);
              if (this.properties.length === 0 && "valueChanged" in target.prototype) {
                new Property("value", "valueChanged", this.name).configureBehavior(this);
              }
              return Promise.resolve(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          register: {
            value: function(registry, name) {
              registry.registerAttribute(name || this.name, this, this.name);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          compile: {
            value: function(compiler, resources, node, instruction, parentNode) {
              if (!instruction.viewFactory) {
                var template = document.createElement("template"),
                    fragment = document.createDocumentFragment();
                node.removeAttribute(instruction.originalAttrName);
                if (node.parentNode) {
                  node.parentNode.replaceChild(template, node);
                } else if (window.ShadowDOMPolyfill) {
                  ShadowDOMPolyfill.unwrap(parentNode).replaceChild(ShadowDOMPolyfill.unwrap(template), ShadowDOMPolyfill.unwrap(node));
                } else {
                  parentNode.replaceChild(template, node);
                }
                fragment.appendChild(node);
                instruction.viewFactory = compiler.compile(fragment, resources);
                node = template;
              }
              instruction.suppressBind = true;
              return node;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          create: {
            value: function(container, instruction, element) {
              var executionContext = instruction.executionContext || container.get(this.target),
                  behaviorInstance = new BehaviorInstance(this.taskQueue, this.observerLocator, this, executionContext, instruction);
              element.primaryBehavior = behaviorInstance;
              return behaviorInstance;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return TemplateController;
      })(ResourceType);
      _export("TemplateController", TemplateController);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/element-config", ["aurelia-metadata", "aurelia-binding"], function(_export) {
  "use strict";
  var ResourceType,
      EventManager,
      _prototypeProperties,
      _inherits,
      ElementConfig;
  return {
    setters: [function(_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_aureliaBinding) {
      EventManager = _aureliaBinding.EventManager;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      ElementConfig = (function(ResourceType) {
        var ElementConfig = function ElementConfig(tagName) {
          this.tagName = tagName;
        };
        _inherits(ElementConfig, ResourceType);
        _prototypeProperties(ElementConfig, null, {
          load: {
            value: function(container, target) {
              var config = target(),
                  eventManager = container.get(EventManager);
              eventManager.registerElementConfig(this.tagName, config);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          register: {
            value: function() {},
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ElementConfig;
      })(ResourceType);
      _export("ElementConfig", ElementConfig);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/composition-engine", ["./view-strategy", "./resource-coordinator", "./view-engine", "./custom-element"], function(_export) {
  "use strict";
  var ViewStrategy,
      UseView,
      ResourceCoordinator,
      ViewEngine,
      CustomElement,
      _prototypeProperties,
      CompositionEngine;
  return {
    setters: [function(_viewStrategy) {
      ViewStrategy = _viewStrategy.ViewStrategy;
      UseView = _viewStrategy.UseView;
    }, function(_resourceCoordinator) {
      ResourceCoordinator = _resourceCoordinator.ResourceCoordinator;
    }, function(_viewEngine) {
      ViewEngine = _viewEngine.ViewEngine;
    }, function(_customElement) {
      CustomElement = _customElement.CustomElement;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      CompositionEngine = (function() {
        var CompositionEngine = function CompositionEngine(resourceCoordinator, viewEngine) {
          this.resourceCoordinator = resourceCoordinator;
          this.viewEngine = viewEngine;
        };
        _prototypeProperties(CompositionEngine, {inject: {
            value: function() {
              return [ResourceCoordinator, ViewEngine];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          activate: {
            value: function(instruction) {
              if (instruction.skipActivation || typeof instruction.viewModel.activate !== "function") {
                return Promise.resolve();
              }
              return instruction.viewModel.activate(instruction.model) || Promise.resolve();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createBehaviorAndSwap: {
            value: function(instruction) {
              return this.createBehavior(instruction).then(function(behavior) {
                instruction.viewSlot.swap(behavior.view);
                if (instruction.currentBehavior) {
                  instruction.currentBehavior.unbind();
                }
                return behavior;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createBehavior: {
            value: function(instruction) {
              var childContainer = instruction.childContainer,
                  viewModelInfo = instruction.viewModelInfo,
                  viewModel = instruction.viewModel;
              return this.activate(instruction).then(function() {
                var doneLoading;
                if ("getViewStrategy" in viewModel && !instruction.view) {
                  instruction.view = ViewStrategy.normalize(viewModel.getViewStrategy());
                }
                if (instruction.view && instruction.viewResources) {
                  instruction.view.makeRelativeTo(instruction.viewResources.viewUrl);
                }
                if (viewModelInfo) {
                  doneLoading = viewModelInfo.type.load(childContainer, viewModelInfo.value, instruction.view);
                } else {
                  doneLoading = new CustomElement().load(childContainer, viewModel.constructor, instruction.view);
                }
                return doneLoading.then(function(behaviorType) {
                  return behaviorType.create(childContainer, {executionContext: viewModel});
                });
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createViewModel: {
            value: function(instruction) {
              var childContainer = instruction.childContainer || instruction.container.createChild();
              instruction.viewModel = instruction.viewResources ? instruction.viewResources.relativeToView(instruction.viewModel) : instruction.viewModel;
              return this.resourceCoordinator.loadViewModelInfo(instruction.viewModel).then(function(viewModelInfo) {
                childContainer.autoRegister(viewModelInfo.value);
                instruction.viewModel = childContainer.viewModel = childContainer.get(viewModelInfo.value);
                instruction.viewModelInfo = viewModelInfo;
                return instruction;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          compose: {
            value: function(instruction) {
              var _this = this;
              instruction.childContainer = instruction.childContainer || instruction.container.createChild();
              instruction.view = ViewStrategy.normalize(instruction.view);
              if (instruction.viewModel) {
                if (typeof instruction.viewModel === "string") {
                  return this.createViewModel(instruction).then(function(instruction) {
                    return _this.createBehaviorAndSwap(instruction);
                  });
                } else {
                  return this.createBehaviorAndSwap(instruction);
                }
              } else if (instruction.view) {
                return instruction.view.loadViewFactory(this.viewEngine).then(function(viewFactory) {
                  result = viewFactory.create(childContainer, instruction.executionContext);
                  instruction.viewSlot.swap(result);
                  return result;
                });
              } else if (instruction.viewSlot) {
                instruction.viewSlot.removeAll();
                return Promise.resolve(null);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return CompositionEngine;
      })();
      _export("CompositionEngine", CompositionEngine);
    }
  };
});



System.register("github:aurelia/framework@0.7.0/system/plugins", ["aurelia-logging"], function(_export) {
  "use strict";
  var LogManager,
      _prototypeProperties,
      logger,
      Plugins;
  function loadPlugin(aurelia, loader, info) {
    logger.debug("Loading plugin " + info.moduleId + ".");
    return loader.loadModule(info.moduleId, "").then(function(exportedValue) {
      if ("install" in exportedValue) {
        var result = exportedValue.install(aurelia, info.config || {});
        if (result) {
          return result.then(function() {
            logger.debug("Installed plugin " + info.moduleId + ".");
          });
        } else {
          logger.debug("Installed plugin " + info.moduleId + ".");
        }
      } else {
        logger.debug("Loaded plugin " + info.moduleId + ".");
      }
    });
  }
  return {
    setters: [function(_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      logger = LogManager.getLogger("aurelia");
      Plugins = (function() {
        function Plugins(aurelia) {
          this.aurelia = aurelia;
          this.info = [];
        }
        _prototypeProperties(Plugins, null, {
          install: {
            value: function(moduleId, config) {
              this.info.push({
                moduleId: moduleId,
                config: config
              });
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          process: {
            value: function() {
              var aurelia = this.aurelia,
                  loader = aurelia.loader,
                  info = this.info,
                  current;
              var next = function() {
                if (current = info.shift()) {
                  return loadPlugin(aurelia, loader, current).then(next);
                }
                return Promise.resolve();
              };
              return next();
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Plugins;
      })();
      _export("Plugins", Plugins);
    }
  };
});



System.register("github:aurelia/logging-console@0.2.1/system/index", [], function(_export) {
  "use strict";
  var _toArray,
      _prototypeProperties,
      ConsoleAppender;
  return {
    setters: [],
    execute: function() {
      _toArray = function(arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ConsoleAppender = (function() {
        var ConsoleAppender = function ConsoleAppender() {};
        _prototypeProperties(ConsoleAppender, null, {
          debug: {
            value: function(logger, message) {
              var rest = [];
              for (var _key = 2; _key < arguments.length; _key++) {
                rest[_key - 2] = arguments[_key];
              }
              console.debug.apply(console, ["DEBUG [" + logger.id + "] " + message].concat(_toArray(rest)));
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          info: {
            value: function(logger, message) {
              var rest = [];
              for (var _key2 = 2; _key2 < arguments.length; _key2++) {
                rest[_key2 - 2] = arguments[_key2];
              }
              console.info.apply(console, ["INFO [" + logger.id + "] " + message].concat(_toArray(rest)));
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          warn: {
            value: function(logger, message) {
              var rest = [];
              for (var _key3 = 2; _key3 < arguments.length; _key3++) {
                rest[_key3 - 2] = arguments[_key3];
              }
              console.warn.apply(console, ["WARN [" + logger.id + "] " + message].concat(_toArray(rest)));
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          error: {
            value: function(logger, message) {
              var rest = [];
              for (var _key4 = 2; _key4 < arguments.length; _key4++) {
                rest[_key4 - 2] = arguments[_key4];
              }
              console.error.apply(console, ["ERROR [" + logger.id + "] " + message].concat(_toArray(rest)));
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ConsoleAppender;
      })();
      _export("ConsoleAppender", ConsoleAppender);
    }
  };
});



System.register("github:aurelia/logging@0.2.1", ["github:aurelia/logging@0.2.1/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/metadata@0.2.4/system/index", ["./origin", "./resource-type", "./annotations"], function(_export) {
  "use strict";
  return {
    setters: [function(_origin) {
      _export("Origin", _origin.Origin);
    }, function(_resourceType) {
      _export("ResourceType", _resourceType.ResourceType);
    }, function(_annotations) {
      _export("getAnnotation", _annotations.getAnnotation);
      _export("getAllAnnotations", _annotations.getAllAnnotations);
      _export("addAnnotation", _annotations.addAnnotation);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/loader@0.3.1", ["github:aurelia/loader@0.3.1/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/task-queue@0.2.1", ["github:aurelia/task-queue@0.2.1/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/binding@0.2.2/system/ast", ["./path-observer", "./composite-observer", "./expressions/ast"], function(_export) {
  "use strict";
  var PathObserver,
      CompositeObserver,
      ValueConverter,
      Assign,
      Conditional,
      AccessScope,
      AccessMember,
      AccessKeyed,
      CallScope,
      CallMember,
      CallFunction,
      Binary,
      PrefixNot,
      LiteralPrimitive,
      LiteralString,
      LiteralArray,
      LiteralObject;
  _export("patchAST", patchAST);
  function patchAST() {
    ValueConverter.prototype.connect = function(binding, scope) {
      var _this = this;
      var observer,
          childObservers = [],
          i,
          ii,
          exp,
          expInfo;
      for (i = 0, ii = this.allArgs.length; i < ii; ++i) {
        exp = this.allArgs[i];
        expInfo = exp.connect(binding, scope);
        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: this.eval(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };
    Assign.prototype.connect = function(binding, scope) {
      return {value: this.eval(scope, binding.valueConverterLookupFunction)};
    };
    Conditional.prototype.connect = function(binding, scope) {
      var _this2 = this;
      var conditionInfo = this.condition.connect(binding, scope),
          yesInfo = this.yes.connect(binding, scope),
          noInfo = this.no.connect(binding, scope),
          childObservers = [],
          observer;
      if (conditionInfo.observer) {
        childObservers.push(conditionInfo.observer);
      }
      if (yesInfo.observer) {
        childObservers.push(yesInfo.observer);
      }
      if (noInfo.observer) {
        childObservers.push(noInfo.observer);
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this2.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: !!conditionInfo.value ? yesInfo.value : noInfo.value,
        observer: observer
      };
    };
    AccessScope.prototype.connect = function(binding, scope) {
      var observer = binding.getObserver(scope, this.name);
      return {
        value: observer.getValue(),
        observer: observer
      };
    };
    AccessMember.prototype.connect = function(binding, scope) {
      var _this3 = this;
      var info = this.object.connect(binding, scope),
          objectInstance = info.value,
          objectObserver = info.observer,
          observer;
      if (objectObserver) {
        observer = new PathObserver(objectObserver, function(value) {
          if (value == null) {
            return null;
          }
          return binding.getObserver(value, _this3.name);
        }, objectInstance);
      } else {
        observer = binding.getObserver(objectInstance, this.name);
      }
      return {
        value: objectInstance == null ? null : objectInstance[this.name],
        observer: observer
      };
    };
    AccessKeyed.prototype.connect = function(binding, scope) {
      var _this4 = this;
      var objectInfo = this.object.connect(binding, scope),
          keyInfo = this.key.connect(binding, scope),
          childObservers = [],
          observer;
      if (objectInfo.observer) {
        childObservers.push(objectInfo.observer);
      }
      if (keyInfo.observer) {
        childObservers.push(keyInfo.observer);
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this4.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: this.eval(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };
    CallScope.prototype.connect = function(binding, scope) {
      var _this5 = this;
      var observer,
          childObservers = [],
          i,
          ii,
          exp,
          expInfo;
      for (i = 0, ii = this.args.length; i < ii; ++i) {
        exp = this.args[i];
        expInfo = exp.connect(binding, scope);
        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this5.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: this.eval(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };
    CallMember.prototype.connect = function(binding, scope) {
      var _this6 = this;
      var observer,
          objectInfo = this.object.connect(binding, scope),
          childObservers = [],
          i,
          ii,
          exp,
          expInfo;
      if (objectInfo.observer) {
        childObservers.push(objectInfo.observer);
      }
      for (i = 0, ii = this.args.length; i < ii; ++i) {
        exp = this.args[i];
        expInfo = exp.connect(binding, scope);
        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this6.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: this.eval(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };
    CallFunction.prototype.connect = function(binding, scope) {
      var _this7 = this;
      var observer,
          funcInfo = this.func.connect(binding, scope),
          childObservers = [],
          i,
          ii,
          exp,
          expInfo;
      if (funcInfo.observer) {
        childObservers.push(funcInfo.observer);
      }
      for (i = 0, ii = this.args.length; i < ii; ++i) {
        exp = this.args[i];
        expInfo = exp.connect(binding, scope);
        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this7.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: this.eval(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };
    Binary.prototype.connect = function(binding, scope) {
      var _this8 = this;
      var leftInfo = this.left.connect(binding, scope),
          rightInfo = this.right.connect(binding, scope),
          childObservers = [],
          observer;
      if (leftInfo.observer) {
        childObservers.push(leftInfo.observer);
      }
      if (rightInfo.observer) {
        childObservers.push(rightInfo.observer);
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this8.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: this.eval(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };
    PrefixNot.prototype.connect = function(binding, scope) {
      var _this9 = this;
      var info = this.expression.connect(binding, scope),
          observer;
      if (info.observer) {
        observer = new CompositeObserver([info.observer], function() {
          return _this9.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: !info.value,
        observer: observer
      };
    };
    LiteralPrimitive.prototype.connect = function(binding, scope) {
      return {value: this.value};
    };
    LiteralString.prototype.connect = function(binding, scope) {
      return {value: this.value};
    };
    LiteralArray.prototype.connect = function(binding, scope) {
      var _this10 = this;
      var observer,
          childObservers = [],
          results = [],
          i,
          ii,
          exp,
          expInfo;
      for (i = 0, ii = this.elements.length; i < ii; ++i) {
        exp = this.elements[i];
        expInfo = exp.connect(binding, scope);
        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
        results[i] = expInfo.value;
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this10.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: results,
        observer: observer
      };
    };
    LiteralObject.prototype.connect = function(binding, scope) {
      var _this11 = this;
      var observer,
          childObservers = [],
          instance = {},
          keys = this.keys,
          values = this.values,
          length = keys.length,
          i,
          valueInfo;
      for (i = 0; i < length; ++i) {
        valueInfo = values[i].connect(binding, scope);
        if (valueInfo.observer) {
          childObservers.push(valueInfo.observer);
        }
        instance[keys[i]] = valueInfo.value;
      }
      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function() {
          return _this11.eval(scope, binding.valueConverterLookupFunction);
        });
      }
      return {
        value: instance,
        observer: observer
      };
    };
  }
  return {
    setters: [function(_pathObserver) {
      PathObserver = _pathObserver.PathObserver;
    }, function(_compositeObserver) {
      CompositeObserver = _compositeObserver.CompositeObserver;
    }, function(_expressionsAst) {
      ValueConverter = _expressionsAst.ValueConverter;
      Assign = _expressionsAst.Assign;
      Conditional = _expressionsAst.Conditional;
      AccessScope = _expressionsAst.AccessScope;
      AccessMember = _expressionsAst.AccessMember;
      AccessKeyed = _expressionsAst.AccessKeyed;
      CallScope = _expressionsAst.CallScope;
      CallMember = _expressionsAst.CallMember;
      CallFunction = _expressionsAst.CallFunction;
      Binary = _expressionsAst.Binary;
      PrefixNot = _expressionsAst.PrefixNot;
      LiteralPrimitive = _expressionsAst.LiteralPrimitive;
      LiteralString = _expressionsAst.LiteralString;
      LiteralArray = _expressionsAst.LiteralArray;
      LiteralObject = _expressionsAst.LiteralObject;
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/binding@0.2.2/system/array-observation", ["./array-change-records"], function(_export) {
  "use strict";
  var calcSplices,
      projectArraySplices,
      _prototypeProperties,
      arrayProto,
      hasArrayObserve,
      ModifyArrayObserver,
      ArrayObserveObserver,
      ArrayLengthObserver;
  _export("getArrayObserver", getArrayObserver);
  function getArrayObserver(taskQueue, array) {
    if (hasArrayObserve) {
      return new ArrayObserveObserver(array);
    } else {
      return ModifyArrayObserver.create(taskQueue, array);
    }
  }
  return {
    setters: [function(_arrayChangeRecords) {
      calcSplices = _arrayChangeRecords.calcSplices;
      projectArraySplices = _arrayChangeRecords.projectArraySplices;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      arrayProto = Array.prototype;
      hasArrayObserve = (function detectArrayObserve() {
        if (typeof Array.observe !== "function") {
          return false;
        }
        var records = [];
        function callback(recs) {
          records = recs;
        }
        var arr = [];
        Array.observe(arr, callback);
        arr.push(1, 2);
        arr.length = 0;
        Object.deliverChangeRecords(callback);
        if (records.length !== 2)
          return false;
        if (records[0].type != "splice" || records[1].type != "splice") {
          return false;
        }
        Array.unobserve(arr, callback);
        return true;
      })();
      ModifyArrayObserver = (function() {
        var ModifyArrayObserver = function ModifyArrayObserver(taskQueue, array) {
          this.taskQueue = taskQueue;
          this.callbacks = [];
          this.changeRecords = [];
          this.queued = false;
          this.array = array;
          this.oldArray = null;
        };
        _prototypeProperties(ModifyArrayObserver, {create: {
            value: function(taskQueue, array) {
              var observer = new ModifyArrayObserver(taskQueue, array);
              array.pop = function() {
                var methodCallResult = arrayProto.pop.apply(array, arguments);
                observer.addChangeRecord({
                  type: "delete",
                  object: array,
                  name: array.length,
                  oldValue: methodCallResult
                });
                return methodCallResult;
              };
              array.push = function() {
                var methodCallResult = arrayProto.push.apply(array, arguments);
                observer.addChangeRecord({
                  type: "splice",
                  object: array,
                  index: array.length - arguments.length,
                  removed: [],
                  addedCount: arguments.length
                });
                return methodCallResult;
              };
              array.reverse = function() {
                var oldArray = array.slice();
                var methodCallResult = arrayProto.reverse.apply(array, arguments);
                observer.reset(oldArray);
                return methodCallResult;
              };
              array.shift = function() {
                var methodCallResult = arrayProto.shift.apply(array, arguments);
                observer.addChangeRecord({
                  type: "delete",
                  object: array,
                  name: 0,
                  oldValue: methodCallResult
                });
                return methodCallResult;
              };
              array.sort = function() {
                var oldArray = array.slice();
                var methodCallResult = arrayProto.sort.apply(array, arguments);
                observer.reset(oldArray);
                return methodCallResult;
              };
              array.splice = function() {
                var methodCallResult = arrayProto.splice.apply(array, arguments);
                observer.addChangeRecord({
                  type: "splice",
                  object: array,
                  index: arguments[0],
                  removed: methodCallResult,
                  addedCount: arguments.length > 2 ? arguments.length - 2 : 0
                });
                return methodCallResult;
              };
              array.unshift = function() {
                var methodCallResult = arrayProto.unshift.apply(array, arguments);
                observer.addChangeRecord({
                  type: "splice",
                  object: array,
                  index: 0,
                  removed: [],
                  addedCount: arguments.length
                });
                return methodCallResult;
              };
              return observer;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          subscribe: {
            value: function(callback) {
              var callbacks = this.callbacks;
              callbacks.push(callback);
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          addChangeRecord: {
            value: function(changeRecord) {
              if (!this.callbacks.length) {
                return;
              }
              this.changeRecords.push(changeRecord);
              if (!this.queued) {
                this.queued = true;
                this.taskQueue.queueMicroTask(this);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          reset: {
            value: function(oldArray) {
              if (!this.callbacks.length) {
                return;
              }
              this.oldArray = oldArray;
              if (!this.queued) {
                this.queued = true;
                this.taskQueue.queueMicroTask(this);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getObserver: {
            value: function(propertyName) {
              if (propertyName == "length") {
                return this.lengthObserver || (this.lengthObserver = new ArrayLengthObserver(this.array));
              } else {
                throw new Error("You cannot observe the " + propertyName + " property of an array.");
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          call: {
            value: function() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  changeRecords = this.changeRecords,
                  oldArray = this.oldArray,
                  splices;
              this.queued = false;
              this.changeRecords = [];
              this.oldArray = null;
              if (i) {
                if (oldArray) {
                  splices = calcSplices(this.array, 0, this.array.length, oldArray, 0, oldArray.length);
                } else {
                  splices = projectArraySplices(this.array, changeRecords);
                }
                while (i--) {
                  callbacks[i](splices);
                }
              }
              if (this.lengthObserver) {
                this.lengthObserver(this.array.length);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ModifyArrayObserver;
      })();
      ArrayObserveObserver = (function() {
        var ArrayObserveObserver = function ArrayObserveObserver(array) {
          this.array = array;
          this.callbacks = [];
          this.observing = false;
        };
        _prototypeProperties(ArrayObserveObserver, null, {
          subscribe: {
            value: function(callback) {
              var _this = this;
              var callbacks = this.callbacks;
              callbacks.push(callback);
              if (!this.observing) {
                this.observing = true;
                Array.observe(this.array, function(changes) {
                  return _this.handleChanges(changes);
                });
              }
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getObserver: {
            value: function(propertyName) {
              if (propertyName == "length") {
                return this.lengthObserver || (this.lengthObserver = new ArrayLengthObserver(this.array));
              } else {
                throw new Error("You cannot observe the " + propertyName + " property of an array.");
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          handleChanges: {
            value: function(changeRecords) {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  splices;
              if (!i) {
                return;
              }
              var splices = projectArraySplices(this.array, changeRecords);
              while (i--) {
                callbacks[i](splices);
              }
              if (this.lengthObserver) {
                this.lengthObserver.call(this.array.length);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ArrayObserveObserver;
      })();
      ArrayLengthObserver = (function() {
        var ArrayLengthObserver = function ArrayLengthObserver(array) {
          this.array = array;
          this.callbacks = [];
          this.currentValue = array.length;
        };
        _prototypeProperties(ArrayLengthObserver, null, {
          getValue: {
            value: function() {
              return this.array.length;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setValue: {
            value: function(newValue) {
              this.array.length = newValue;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function(callback) {
              var callbacks = this.callbacks;
              callbacks.push(callback);
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          call: {
            value: function(newValue) {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.currentValue;
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
              this.currentValue = newValue;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ArrayLengthObserver;
      })();
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/expressions/parser", ["./lexer", "./ast"], function(_export) {
  "use strict";
  var Lexer,
      Token,
      Expression,
      ArrayOfExpression,
      Chain,
      ValueConverter,
      Assign,
      Conditional,
      AccessScope,
      AccessMember,
      AccessKeyed,
      CallScope,
      CallFunction,
      CallMember,
      PrefixNot,
      Binary,
      LiteralPrimitive,
      LiteralArray,
      LiteralObject,
      LiteralString,
      _prototypeProperties,
      EOF,
      Parser,
      ParserImplementation;
  return {
    setters: [function(_lexer) {
      Lexer = _lexer.Lexer;
      Token = _lexer.Token;
    }, function(_ast) {
      Expression = _ast.Expression;
      ArrayOfExpression = _ast.ArrayOfExpression;
      Chain = _ast.Chain;
      ValueConverter = _ast.ValueConverter;
      Assign = _ast.Assign;
      Conditional = _ast.Conditional;
      AccessScope = _ast.AccessScope;
      AccessMember = _ast.AccessMember;
      AccessKeyed = _ast.AccessKeyed;
      CallScope = _ast.CallScope;
      CallFunction = _ast.CallFunction;
      CallMember = _ast.CallMember;
      PrefixNot = _ast.PrefixNot;
      Binary = _ast.Binary;
      LiteralPrimitive = _ast.LiteralPrimitive;
      LiteralArray = _ast.LiteralArray;
      LiteralObject = _ast.LiteralObject;
      LiteralString = _ast.LiteralString;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      EOF = new Token(-1, null);
      Parser = (function() {
        var Parser = function Parser() {
          this.cache = {};
          this.lexer = new Lexer();
        };
        _prototypeProperties(Parser, null, {parse: {
            value: function(input) {
              input = input || "";
              return this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Parser;
      })();
      _export("Parser", Parser);
      ParserImplementation = (function() {
        var ParserImplementation = function ParserImplementation(lexer, input) {
          this.index = 0;
          this.input = input;
          this.tokens = lexer.lex(input);
        };
        _prototypeProperties(ParserImplementation, null, {
          peek: {
            get: function() {
              return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
            },
            enumerable: true,
            configurable: true
          },
          parseChain: {
            value: function() {
              var isChain = false,
                  expressions = [];
              while (this.optional(";")) {
                isChain = true;
              }
              while (this.index < this.tokens.length) {
                if (this.peek.text == ")" || this.peek.text == "}" || this.peek.text == "]") {
                  this.error("Unconsumed token " + this.peek.text);
                }
                var expr = this.parseValueConverter();
                expressions.push(expr);
                while (this.optional(";")) {
                  isChain = true;
                }
                if (isChain && expr instanceof ValueConverter) {
                  this.error("cannot have a value converter in a chain");
                }
              }
              return expressions.length == 1 ? expressions[0] : new Chain(expressions);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseValueConverter: {
            value: function() {
              var result = this.parseExpression();
              while (this.optional("|")) {
                var name = this.peek.text,
                    args = [];
                this.advance();
                while (this.optional(":")) {
                  args.push(this.parseExpression());
                }
                result = new ValueConverter(result, name, args, [result].concat(args));
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseExpression: {
            value: function() {
              var start = this.peek.index,
                  result = this.parseConditional();
              while (this.peek.text == "=") {
                if (!result.isAssignable) {
                  var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
                  var expression = this.input.substring(start, end);
                  this.error("Expression " + expression + " is not assignable");
                }
                this.expect("=");
                result = new Assign(result, this.parseConditional());
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseConditional: {
            value: function() {
              var start = this.peek.index,
                  result = this.parseLogicalOr();
              if (this.optional("?")) {
                var yes = this.parseExpression();
                if (!this.optional(":")) {
                  var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
                  var expression = this.input.substring(start, end);
                  this.error("Conditional expression " + expression + " requires all 3 expressions");
                }
                var no = this.parseExpression();
                result = new Conditional(result, yes, no);
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseLogicalOr: {
            value: function() {
              var result = this.parseLogicalAnd();
              while (this.optional("||")) {
                result = new Binary("||", result, this.parseLogicalAnd());
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseLogicalAnd: {
            value: function() {
              var result = this.parseEquality();
              while (this.optional("&&")) {
                result = new Binary("&&", result, this.parseEquality());
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseEquality: {
            value: function() {
              var result = this.parseRelational();
              while (true) {
                if (this.optional("==")) {
                  result = new Binary("==", result, this.parseRelational());
                } else if (this.optional("!=")) {
                  result = new Binary("!=", result, this.parseRelational());
                } else {
                  return result;
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseRelational: {
            value: function() {
              var result = this.parseAdditive();
              while (true) {
                if (this.optional("<")) {
                  result = new Binary("<", result, this.parseAdditive());
                } else if (this.optional(">")) {
                  result = new Binary(">", result, this.parseAdditive());
                } else if (this.optional("<=")) {
                  result = new Binary("<=", result, this.parseAdditive());
                } else if (this.optional(">=")) {
                  result = new Binary(">=", result, this.parseAdditive());
                } else {
                  return result;
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseAdditive: {
            value: function() {
              var result = this.parseMultiplicative();
              while (true) {
                if (this.optional("+")) {
                  result = new Binary("+", result, this.parseMultiplicative());
                } else if (this.optional("-")) {
                  result = new Binary("-", result, this.parseMultiplicative());
                } else {
                  return result;
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseMultiplicative: {
            value: function() {
              var result = this.parsePrefix();
              while (true) {
                if (this.optional("*")) {
                  result = new Binary("*", result, this.parsePrefix());
                } else if (this.optional("%")) {
                  result = new Binary("%", result, this.parsePrefix());
                } else if (this.optional("/")) {
                  result = new Binary("/", result, this.parsePrefix());
                } else if (this.optional("~/")) {
                  result = new Binary("~/", result, this.parsePrefix());
                } else {
                  return result;
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parsePrefix: {
            value: function() {
              if (this.optional("+")) {
                return this.parsePrefix();
              } else if (this.optional("-")) {
                return new Binary("-", new LiteralPrimitive(0), this.parsePrefix());
              } else if (this.optional("!")) {
                return new PrefixNot("!", this.parsePrefix());
              } else {
                return this.parseAccessOrCallMember();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseAccessOrCallMember: {
            value: function() {
              var result = this.parsePrimary();
              while (true) {
                if (this.optional(".")) {
                  var name = this.peek.text;
                  this.advance();
                  if (this.optional("(")) {
                    var args = this.parseExpressionList(")");
                    this.expect(")");
                    result = new CallMember(result, name, args);
                  } else {
                    result = new AccessMember(result, name);
                  }
                } else if (this.optional("[")) {
                  var key = this.parseExpression();
                  this.expect("]");
                  result = new AccessKeyed(result, key);
                } else if (this.optional("(")) {
                  var args = this.parseExpressionList(")");
                  this.expect(")");
                  result = new CallFunction(result, args);
                } else {
                  return result;
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parsePrimary: {
            value: function() {
              if (this.optional("(")) {
                var result = this.parseExpression();
                this.expect(")");
                return result;
              } else if (this.optional("null") || this.optional("undefined")) {
                return new LiteralPrimitive(null);
              } else if (this.optional("true")) {
                return new LiteralPrimitive(true);
              } else if (this.optional("false")) {
                return new LiteralPrimitive(false);
              } else if (this.optional("[")) {
                var elements = this.parseExpressionList("]");
                this.expect("]");
                return new LiteralArray(elements);
              } else if (this.peek.text == "{") {
                return this.parseObject();
              } else if (this.peek.key != null) {
                return this.parseAccessOrCallScope();
              } else if (this.peek.value != null) {
                var value = this.peek.value;
                this.advance();
                return isNaN(value) ? new LiteralString(value) : new LiteralPrimitive(value);
              } else if (this.index >= this.tokens.length) {
                throw new Error("Unexpected end of expression: " + this.input);
              } else {
                this.error("Unexpected token " + this.peek.text);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseAccessOrCallScope: {
            value: function() {
              var name = this.peek.key;
              this.advance();
              if (!this.optional("(")) {
                return new AccessScope(name);
              }
              var args = this.parseExpressionList(")");
              this.expect(")");
              return new CallScope(name, args);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseObject: {
            value: function() {
              var keys = [],
                  values = [];
              this.expect("{");
              if (this.peek.text != "}") {
                do {
                  var value = this.peek.value;
                  keys.push(typeof value == "string" ? value : this.peek.text);
                  this.advance();
                  this.expect(":");
                  values.push(this.parseExpression());
                } while (this.optional(","));
              }
              this.expect("}");
              return new LiteralObject(keys, values);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseExpressionList: {
            value: function(terminator) {
              var result = [];
              if (this.peek.text != terminator) {
                do {
                  result.push(this.parseExpression());
                } while (this.optional(","));
              }
              return result;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          optional: {
            value: function(text) {
              if (this.peek.text == text) {
                this.advance();
                return true;
              }
              return false;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          expect: {
            value: function(text) {
              if (this.peek.text == text) {
                this.advance();
              } else {
                this.error("Missing expected " + text);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          advance: {
            value: function() {
              this.index++;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          error: {
            value: function(message) {
              var location = this.index < this.tokens.length ? "at column " + (this.tokens[this.index].index + 1) + " in" : "at the end of the expression";
              throw new Error("Parser Error: " + message + " " + location + " [" + this.input + "]");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ParserImplementation;
      })();
      _export("ParserImplementation", ParserImplementation);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/property", ["./util"], function(_export) {
  "use strict";
  var hyphenate,
      _inherits,
      _prototypeProperties,
      Property,
      OptionsProperty,
      BehaviorPropertyObserver;
  return {
    setters: [function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Property = (function() {
        var Property = function Property(name, changeHandler, attribute, defaultValue) {
          this.name = name;
          this.changeHandler = changeHandler;
          this.attribute = attribute || hyphenate(name);
          this.defaultValue = defaultValue;
        };
        _prototypeProperties(Property, null, {
          configureBehavior: {
            value: function(behavior) {
              if (!this.changeHandler) {
                var handlerName = this.name + "Changed";
                if (handlerName in behavior.target.prototype) {
                  this.changeHandler = handlerName;
                }
              }
              behavior.properties.push(this);
              behavior.attributes[this.attribute] = this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          create: {
            value: function(taskQueue, executionContext, observerLookup, attributes, behaviorHandlesBind) {
              var _this = this;
              var selfSubscriber,
                  observer,
                  attribute,
                  info;
              if (this.changeHandler) {
                selfSubscriber = function(newValue, oldValue) {
                  return executionContext[_this.changeHandler](newValue, oldValue);
                };
              }
              observer = observerLookup[this.name] = new BehaviorPropertyObserver(taskQueue, executionContext, this.name, selfSubscriber);
              Object.defineProperty(executionContext, this.name, {
                configurable: true,
                enumerable: true,
                get: observer.getValue.bind(observer),
                set: observer.setValue.bind(observer)
              });
              attribute = attributes[this.attribute];
              if (behaviorHandlesBind) {
                observer.selfSubscriber = null;
              }
              if (typeof attribute === "string") {
                executionContext[this.name] = attribute;
                observer.call();
              } else if (attribute) {
                info = {
                  observer: observer,
                  binding: attribute.createBinding(executionContext)
                };
              } else if (this.defaultValue) {
                executionContext[this.name] = this.defaultValue;
                observer.call();
              }
              observer.publishing = true;
              observer.selfSubscriber = selfSubscriber;
              return info;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Property;
      })();
      _export("Property", Property);
      OptionsProperty = (function(Property) {
        var OptionsProperty = function OptionsProperty(attribute) {
          var rest = [];
          for (var _key = 1; _key < arguments.length; _key++) {
            rest[_key - 1] = arguments[_key];
          }
          if (typeof attribute === "string") {
            this.attribute = attribute;
          } else {
            rest.unshift(attribute);
          }
          this.properties = rest;
          this.hasOptions = true;
        };
        _inherits(OptionsProperty, Property);
        _prototypeProperties(OptionsProperty, null, {
          configureBehavior: {
            value: function(behavior) {
              var i,
                  ii,
                  properties = this.properties;
              this.attribute = this.attribute || behavior.name;
              behavior.properties.push(this);
              behavior.attributes[this.attribute] = this;
              for (i = 0, ii = properties.length; i < ii; ++i) {
                properties[i].configureBehavior(behavior);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          create: {
            value: function() {},
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return OptionsProperty;
      })(Property);
      _export("OptionsProperty", OptionsProperty);
      BehaviorPropertyObserver = (function() {
        var BehaviorPropertyObserver = function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber) {
          this.taskQueue = taskQueue;
          this.obj = obj;
          this.propertyName = propertyName;
          this.currentValue = obj[propertyName];
          this.callbacks = [];
          this.notqueued = true;
          this.publishing = false;
          this.selfSubscriber = selfSubscriber;
        };
        _prototypeProperties(BehaviorPropertyObserver, null, {
          getValue: {
            value: function() {
              return this.currentValue;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setValue: {
            value: function(newValue) {
              var oldValue = this.currentValue;
              if (oldValue != newValue) {
                if (this.publishing && this.notqueued) {
                  this.notqueued = false;
                  this.taskQueue.queueMicroTask(this);
                }
                this.oldValue = oldValue;
                this.currentValue = newValue;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          call: {
            value: function() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.oldValue,
                  newValue = this.currentValue;
              this.notqueued = true;
              if (newValue != oldValue) {
                if (this.selfSubscriber) {
                  this.selfSubscriber(newValue, oldValue);
                }
                while (i--) {
                  callbacks[i](newValue, oldValue);
                }
                this.oldValue = newValue;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function(callback) {
              var callbacks = this.callbacks;
              callbacks.push(callback);
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return BehaviorPropertyObserver;
      })();
    }
  };
});



System.register("github:aurelia/path@0.4.0", ["github:aurelia/path@0.4.0/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.7.1/system/view-factory", ["aurelia-dependency-injection", "./view", "./view-slot", "./content-selector", "./resource-registry"], function(_export) {
  "use strict";
  var Container,
      View,
      ViewSlot,
      ContentSelector,
      ViewResources,
      _prototypeProperties,
      BoundViewFactory,
      defaultFactoryOptions,
      ViewFactory;
  function elementContainerGet(key) {
    if (key === Element) {
      return this.element;
    }
    if (key === BoundViewFactory) {
      return this.boundViewFactory || (this.boundViewFactory = new BoundViewFactory(this, this.instruction.viewFactory, this.executionContext));
    }
    if (key === ViewSlot) {
      if (this.viewSlot === undefined) {
        this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer, this.executionContext);
        this.children.push(this.viewSlot);
      }
      return this.viewSlot;
    }
    if (key === ViewResources) {
      return this.viewResources;
    }
    return this.superGet(key);
  }
  function createElementContainer(parent, element, instruction, executionContext, children, resources) {
    var container = parent.createChild(),
        providers,
        i;
    container.element = element;
    container.instruction = instruction;
    container.executionContext = executionContext;
    container.children = children;
    container.viewResources = resources;
    providers = instruction.providers;
    i = providers.length;
    while (i--) {
      container.registerSingleton(providers[i]);
    }
    container.superGet = container.get;
    container.get = elementContainerGet;
    return container;
  }
  function applyInstructions(containers, executionContext, element, instruction, behaviors, bindings, children, contentSelectors, resources) {
    var behaviorInstructions = instruction.behaviorInstructions,
        expressions = instruction.expressions,
        elementContainer,
        i,
        ii,
        current,
        instance;
    if (instruction.contentExpression) {
      bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
      element.parentNode.removeChild(element);
      return;
    }
    if (instruction.contentSelector) {
      contentSelectors.push(new ContentSelector(element, instruction.selector));
      return;
    }
    if (behaviorInstructions.length) {
      containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, executionContext, children, resources);
      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        current = behaviorInstructions[i];
        instance = current.type.create(elementContainer, current, element, bindings);
        if (instance.contentView) {
          children.push(instance.contentView);
        }
        behaviors.push(instance);
      }
    }
    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding(element));
    }
  }
  return {
    setters: [function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_view) {
      View = _view.View;
    }, function(_viewSlot) {
      ViewSlot = _viewSlot.ViewSlot;
    }, function(_contentSelector) {
      ContentSelector = _contentSelector.ContentSelector;
    }, function(_resourceRegistry) {
      ViewResources = _resourceRegistry.ViewResources;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BoundViewFactory = (function() {
        var BoundViewFactory = function BoundViewFactory(parentContainer, viewFactory, executionContext) {
          this.parentContainer = parentContainer;
          this.viewFactory = viewFactory;
          this.executionContext = executionContext;
          this.factoryOptions = {behaviorInstance: false};
        };
        _prototypeProperties(BoundViewFactory, null, {create: {
            value: function(executionContext) {
              var childContainer = this.parentContainer.createChild(),
                  context = executionContext || this.executionContext;
              this.factoryOptions.systemControlled = !executionContext;
              return this.viewFactory.create(childContainer, context, this.factoryOptions);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return BoundViewFactory;
      })();
      _export("BoundViewFactory", BoundViewFactory);
      defaultFactoryOptions = {
        systemControlled: false,
        suppressBind: false
      };
      ViewFactory = (function() {
        var ViewFactory = function ViewFactory(template, instructions, resources) {
          this.template = template;
          this.instructions = instructions;
          this.resources = resources;
        };
        _prototypeProperties(ViewFactory, null, {create: {
            value: function(container, executionContext) {
              var _this = this;
              var options = arguments[2] === undefined ? defaultFactoryOptions : arguments[2];
              return (function() {
                var fragment = _this.template.cloneNode(true),
                    instructables = fragment.querySelectorAll(".au-target"),
                    instructions = _this.instructions,
                    resources = _this.resources,
                    behaviors = [],
                    bindings = [],
                    children = [],
                    contentSelectors = [],
                    containers = {root: container},
                    i,
                    ii,
                    view;
                for (i = 0, ii = instructables.length; i < ii; ++i) {
                  applyInstructions(containers, executionContext, instructables[i], instructions[i], behaviors, bindings, children, contentSelectors, resources);
                }
                view = new View(fragment, behaviors, bindings, children, options.systemControlled, contentSelectors);
                view.created(executionContext);
                if (!options.suppressBind) {
                  view.bind(executionContext);
                }
                return view;
              })();
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return ViewFactory;
      })();
      _export("ViewFactory", ViewFactory);
    }
  };
});



System.register("github:aurelia/logging-console@0.2.1", ["github:aurelia/logging-console@0.2.1/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/metadata@0.2.4", ["github:aurelia/metadata@0.2.4/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/binding@0.2.2/system/observer-locator", ["aurelia-task-queue", "./array-observation", "./event-manager", "./dirty-checking", "./property-observation"], function(_export) {
  "use strict";
  var TaskQueue,
      getArrayObserver,
      EventManager,
      DirtyChecker,
      DirtyCheckProperty,
      SetterObserver,
      OoObjectObserver,
      OoPropertyObserver,
      ElementObserver,
      _prototypeProperties,
      hasObjectObserve,
      ObserverLocator;
  function createObserversLookup(obj) {
    var value = {};
    Object.defineProperty(obj, "__observers__", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: value
    });
    return value;
  }
  function createObserverLookup(obj) {
    var value = new OoObjectObserver(obj);
    Object.defineProperty(obj, "__observer__", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: value
    });
    return value;
  }
  return {
    setters: [function(_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function(_arrayObservation) {
      getArrayObserver = _arrayObservation.getArrayObserver;
    }, function(_eventManager) {
      EventManager = _eventManager.EventManager;
    }, function(_dirtyChecking) {
      DirtyChecker = _dirtyChecking.DirtyChecker;
      DirtyCheckProperty = _dirtyChecking.DirtyCheckProperty;
    }, function(_propertyObservation) {
      SetterObserver = _propertyObservation.SetterObserver;
      OoObjectObserver = _propertyObservation.OoObjectObserver;
      OoPropertyObserver = _propertyObservation.OoPropertyObserver;
      ElementObserver = _propertyObservation.ElementObserver;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      if (typeof Object.getPropertyDescriptor !== "function") {
        Object.getPropertyDescriptor = function(subject, name) {
          var pd = Object.getOwnPropertyDescriptor(subject, name);
          var proto = Object.getPrototypeOf(subject);
          while (typeof pd === "undefined" && proto !== null) {
            pd = Object.getOwnPropertyDescriptor(proto, name);
            proto = Object.getPrototypeOf(proto);
          }
          return pd;
        };
      }
      hasObjectObserve = (function detectObjectObserve() {
        if (typeof Object.observe !== "function") {
          return false;
        }
        var records = [];
        function callback(recs) {
          records = recs;
        }
        var test = {};
        Object.observe(test, callback);
        test.id = 1;
        test.id = 2;
        delete test.id;
        Object.deliverChangeRecords(callback);
        if (records.length !== 3)
          return false;
        if (records[0].type != "add" || records[1].type != "update" || records[2].type != "delete") {
          return false;
        }
        Object.unobserve(test, callback);
        return true;
      })();
      ObserverLocator = (function() {
        var ObserverLocator = function ObserverLocator(taskQueue, eventManager, dirtyChecker) {
          this.taskQueue = taskQueue;
          this.eventManager = eventManager;
          this.dirtyChecker = dirtyChecker;
        };
        _prototypeProperties(ObserverLocator, {inject: {
            value: function() {
              return [TaskQueue, EventManager, DirtyChecker];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          getObserversLookup: {
            value: function(obj) {
              return obj.__observers__ || createObserversLookup(obj);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getObserver: {
            value: function(obj, propertyName) {
              var observersLookup = this.getObserversLookup(obj);
              if (propertyName in observersLookup) {
                return observersLookup[propertyName];
              }
              return observersLookup[propertyName] = this.createPropertyObserver(obj, propertyName);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createPropertyObserver: {
            value: function(obj, propertyName) {
              var observerLookup,
                  descriptor,
                  handler;
              if (obj instanceof Element) {
                handler = this.eventManager.getElementHandler(obj);
                if (handler) {
                  return new ElementObserver(handler, obj, propertyName);
                }
              }
              descriptor = Object.getPropertyDescriptor(obj, propertyName);
              if (descriptor && (descriptor.get || descriptor.set)) {
                return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
              }
              if (hasObjectObserve) {
                observerLookup = obj.__observer__ || createObserverLookup(obj);
                return observerLookup.getObserver(propertyName);
              }
              if (obj instanceof Array) {
                observerLookup = this.getArrayObserver(obj);
                return observerLookup.getObserver(propertyName);
              }
              return new SetterObserver(this.taskQueue, obj, propertyName);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getArrayObserver: {
            value: function(array) {
              if ("__array_observer__" in array) {
                return array.__array_observer__;
              }
              return array.__array_observer__ = getArrayObserver(this.taskQueue, array);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ObserverLocator;
      })();
      _export("ObserverLocator", ObserverLocator);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/view-compiler", ["./resource-registry", "./view-factory", "./binding-language"], function(_export) {
  "use strict";
  var ResourceRegistry,
      ViewFactory,
      BindingLanguage,
      _prototypeProperties,
      nextInjectorId,
      defaultCompileOptions,
      hasShadowDOM,
      ViewCompiler;
  function getNextInjectorId() {
    return ++nextInjectorId;
  }
  function configureProperties(instruction, resources) {
    var type = instruction.type,
        attrName = instruction.attrName,
        attributes = instruction.attributes,
        property,
        key,
        value;
    var knownAttribute = resources.attributeMap[attrName];
    if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
      attributes[knownAttribute] = attributes[attrName];
      delete attributes[attrName];
    }
    for (key in attributes) {
      value = attributes[key];
      if (typeof value !== "string") {
        property = type.attributes[key];
        if (!property) {
          throw new Error("Attempted to set attribute \"" + key + "\" which does not exist on " + type.target.name + ".");
        }
        value.targetProperty = property.name;
      }
    }
  }
  function makeIntoInstructionTarget(element) {
    var value = element.getAttribute("class");
    element.setAttribute("class", value ? value += " au-target" : "au-target");
  }
  return {
    setters: [function(_resourceRegistry) {
      ResourceRegistry = _resourceRegistry.ResourceRegistry;
    }, function(_viewFactory) {
      ViewFactory = _viewFactory.ViewFactory;
    }, function(_bindingLanguage) {
      BindingLanguage = _bindingLanguage.BindingLanguage;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      nextInjectorId = 0;
      defaultCompileOptions = {targetShadowDOM: false};
      hasShadowDOM = !!HTMLElement.prototype.createShadowRoot;
      ViewCompiler = (function() {
        var ViewCompiler = function ViewCompiler(bindingLanguage) {
          this.bindingLanguage = bindingLanguage;
        };
        _prototypeProperties(ViewCompiler, {inject: {
            value: function() {
              return [BindingLanguage];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          compile: {
            value: function(templateOrFragment, resources) {
              var _this = this;
              var options = arguments[2] === undefined ? defaultCompileOptions : arguments[2];
              return (function() {
                var instructions = [],
                    targetShadowDOM = options.targetShadowDOM,
                    content;
                targetShadowDOM = targetShadowDOM && hasShadowDOM;
                if (templateOrFragment.content) {
                  content = document.adoptNode(templateOrFragment.content, true);
                } else {
                  content = templateOrFragment;
                }
                _this.compileNode(content, resources, instructions, templateOrFragment, "root", !targetShadowDOM);
                content.insertBefore(document.createComment("<view>"), content.firstChild);
                content.appendChild(document.createComment("</view>"));
                return new ViewFactory(content, instructions, resources);
              })();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          compileNode: {
            value: function(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
              switch (node.nodeType) {
                case 1:
                  return this.compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
                case 3:
                  var expression = this.bindingLanguage.parseText(resources, node.textContent);
                  if (expression) {
                    var marker = document.createElement("au-marker");
                    marker.className = "au-target";
                    node.parentNode.insertBefore(marker, node);
                    node.textContent = " ";
                    instructions.push({contentExpression: expression});
                  }
                  return node.nextSibling;
                case 11:
                  var currentChild = node.firstChild;
                  while (currentChild) {
                    currentChild = this.compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
                  }
                  break;
              }
              return node.nextSibling;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          compileElement: {
            value: function(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
              var tagName = node.tagName.toLowerCase(),
                  attributes = node.attributes,
                  expressions = [],
                  behaviorInstructions = [],
                  providers = [],
                  bindingLanguage = this.bindingLanguage,
                  liftingInstruction,
                  viewFactory,
                  type,
                  elementInstruction,
                  elementProperty,
                  i,
                  ii,
                  attr,
                  attrName,
                  attrValue,
                  instruction,
                  info,
                  property,
                  knownAttribute;
              if (tagName === "content") {
                if (targetLightDOM) {
                  instructions.push({
                    parentInjectorId: parentInjectorId,
                    contentSelector: true,
                    selector: node.getAttribute("select"),
                    suppressBind: true
                  });
                  makeIntoInstructionTarget(node);
                }
                return node.nextSibling;
              } else if (tagName === "template") {
                viewFactory = this.compile(node, resources);
              } else {
                type = resources.getElement(tagName);
                if (type) {
                  elementInstruction = {
                    type: type,
                    attributes: {}
                  };
                  behaviorInstructions.push(elementInstruction);
                }
              }
              for (i = 0, ii = attributes.length; i < ii; ++i) {
                attr = attributes[i];
                attrName = attr.name;
                attrValue = attr.value;
                info = bindingLanguage.inspectAttribute(resources, attrName, attrValue);
                type = resources.getAttribute(info.attrName);
                if (type && !info.command && !info.expression) {
                  knownAttribute = resources.attributeMap[info.attrName];
                  if (knownAttribute) {
                    property = type.attributes[knownAttribute];
                    info.command = property && property.hasOptions ? "options" : null;
                  }
                }
                instruction = bindingLanguage.createAttributeInstruction(resources, node, info);
                if (instruction) {
                  if (instruction.discrete) {
                    expressions.push(instruction);
                  } else {
                    if (type) {
                      instruction.type = type;
                      configureProperties(instruction, resources);
                      if (type.liftsContent) {
                        instruction.originalAttrName = attrName;
                        liftingInstruction = instruction;
                        break;
                      } else {
                        behaviorInstructions.push(instruction);
                      }
                    } else if (elementInstruction && (elementProperty = elementInstruction.type.attributes[instruction.attrName])) {
                      elementInstruction.attributes[instruction.attrName] = instruction.attributes[instruction.attrName];
                      elementInstruction.attributes[instruction.attrName].targetProperty = elementProperty.name;
                    } else {
                      expressions.push(instruction.attributes[instruction.attrName]);
                    }
                  }
                } else {
                  if (type) {
                    instruction = {
                      attrName: attrName,
                      type: type,
                      attributes: {}
                    };
                    instruction.attributes[resources.attributeMap[attrName]] = attrValue;
                    if (type.liftsContent) {
                      instruction.originalAttrName = attrName;
                      liftingInstruction = instruction;
                      break;
                    } else {
                      behaviorInstructions.push(instruction);
                    }
                  } else if (elementInstruction && elementInstruction.type.attributes[attrName]) {
                    elementInstruction.attributes[attrName] = attrValue;
                  }
                }
              }
              if (liftingInstruction) {
                liftingInstruction.viewFactory = viewFactory;
                node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
                makeIntoInstructionTarget(node);
                instructions.push({
                  anchorIsContainer: false,
                  parentInjectorId: parentInjectorId,
                  expressions: [],
                  behaviorInstructions: [liftingInstruction],
                  viewFactory: liftingInstruction.viewFactory,
                  providers: [liftingInstruction.type.target]
                });
              } else {
                for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
                  instruction = behaviorInstructions[i];
                  instruction.type.compile(this, resources, node, instruction, parentNode);
                  providers.push(instruction.type.target);
                }
                var injectorId = behaviorInstructions.length ? getNextInjectorId() : false;
                if (expressions.length || behaviorInstructions.length) {
                  makeIntoInstructionTarget(node);
                  instructions.push({
                    anchorIsContainer: true,
                    injectorId: injectorId,
                    parentInjectorId: parentInjectorId,
                    expressions: expressions,
                    behaviorInstructions: behaviorInstructions,
                    providers: providers
                  });
                }
                var currentChild = node.firstChild;
                while (currentChild) {
                  currentChild = this.compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
                }
              }
              return node.nextSibling;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ViewCompiler;
      })();
      _export("ViewCompiler", ViewCompiler);
    }
  };
});



System.register("github:aurelia/dependency-injection@0.3.1/system/container", ["aurelia-metadata", "./annotations", "./util"], function(_export) {
  "use strict";
  var getAnnotation,
      Inject,
      Resolver,
      Registration,
      isClass,
      _prototypeProperties,
      Container;
  return {
    setters: [function(_aureliaMetadata) {
      getAnnotation = _aureliaMetadata.getAnnotation;
    }, function(_annotations) {
      Inject = _annotations.Inject;
      Resolver = _annotations.Resolver;
      Registration = _annotations.Registration;
    }, function(_util) {
      isClass = _util.isClass;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Container = (function() {
        var Container = function Container(constructionInfo) {
          this.constructionInfo = constructionInfo || new Map();
          this.entries = new Map();
        };
        _prototypeProperties(Container, null, {
          registerInstance: {
            value: function(key, instance) {
              this.registerHandler(key, function(x) {
                return instance;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          registerTransient: {
            value: function(key, fn) {
              fn = fn || key;
              this.registerHandler(key, function(x) {
                return x.invoke(fn);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          registerSingleton: {
            value: function(key, fn) {
              var singleton = null;
              fn = fn || key;
              this.registerHandler(key, function(x) {
                return singleton || (singleton = x.invoke(fn));
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          autoRegister: {
            value: function(fn, key) {
              var registrationAnnotation = getAnnotation(fn, Registration, true);
              if (registrationAnnotation) {
                registrationAnnotation.register(this, key || fn, fn);
              } else {
                this.registerSingleton(key || fn, fn);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          autoRegisterAll: {
            value: function(fns) {
              var i = fns.length;
              while (i--) {
                this.autoRegister(fns[i]);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          registerHandler: {
            value: function(key, handler) {
              this.getOrCreateEntry(key).push(handler);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          get: {
            value: function(key) {
              var entry;
              if (key instanceof Resolver) {
                return key.get(this);
              }
              if (key === Container) {
                return this;
              }
              entry = this.entries.get(key);
              if (entry !== undefined) {
                return entry[0](this);
              }
              if (this.parent) {
                return this.parent.get(key);
              }
              this.autoRegister(key);
              entry = this.entries.get(key);
              return entry[0](this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getAll: {
            value: function(key) {
              var _this = this;
              var entry = this.entries.get(key);
              if (entry !== undefined) {
                return entry.map(function(x) {
                  return x(_this);
                });
              }
              if (this.parent) {
                return this.parent.getAll(key);
              }
              return [];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          hasHandler: {
            value: function(key) {
              var checkParent = arguments[1] === undefined ? false : arguments[1];
              return this.entries.has(key) || checkParent && this.parent && this.parent.hasHandler(key, checkParent);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createChild: {
            value: function() {
              var childContainer = new Container(this.constructionInfo);
              childContainer.parent = this;
              return childContainer;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          invoke: {
            value: function(fn) {
              var info = this.getOrCreateConstructionInfo(fn),
                  keys = info.keys,
                  args = new Array(keys.length),
                  context,
                  i,
                  ii;
              for (i = 0, ii = keys.length; i < ii; ++i) {
                args[i] = this.get(keys[i]);
              }
              if (info.isClass) {
                context = Object.create(fn.prototype);
                return fn.apply(context, args) || context;
              } else {
                return fn.apply(undefined, args);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getOrCreateEntry: {
            value: function(key) {
              var entry = this.entries.get(key);
              if (entry === undefined) {
                entry = [];
                this.entries.set(key, entry);
              }
              return entry;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getOrCreateConstructionInfo: {
            value: function(fn) {
              var info = this.constructionInfo.get(fn);
              if (info === undefined) {
                info = this.createConstructionInfo(fn);
                this.constructionInfo.set(fn, info);
              }
              return info;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createConstructionInfo: {
            value: function(fn) {
              var info = {isClass: isClass(fn)},
                  injectAnnotation,
                  keys = [],
                  i,
                  ii,
                  j,
                  jj,
                  param,
                  parameters = fn.parameters,
                  paramAnnotation;
              if (fn.inject !== undefined) {
                if (typeof fn.inject === "function") {
                  info.keys = fn.inject();
                } else {
                  info.keys = fn.inject;
                }
                return info;
              }
              injectAnnotation = getAnnotation(fn, Inject);
              if (injectAnnotation) {
                keys = keys.concat(injectAnnotation.keys);
              }
              if (parameters) {
                for (i = 0, ii = parameters.length; i < ii; ++i) {
                  param = parameters[i];
                  for (j = 0, jj = param.length; j < jj; ++j) {
                    paramAnnotation = param[j];
                    if (paramAnnotation instanceof Inject) {
                      keys[i] = paramAnnotation.keys[0];
                    } else if (!keys[i]) {
                      keys[i] = paramAnnotation;
                    }
                  }
                }
              }
              info.keys = keys;
              return info;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Container;
      })();
      _export("Container", Container);
    }
  };
});



System.register("github:aurelia/binding@0.2.2/system/index", ["./ast", "./event-manager", "./observer-locator", "./value-converter", "./array-change-records", "./binding-modes", "./expressions/parser", "./binding-expression", "./listener-expression", "./name-expression", "./call-expression", "./dirty-checking"], function(_export) {
  "use strict";
  var patchAST;
  return {
    setters: [function(_ast) {
      patchAST = _ast.patchAST;
    }, function(_eventManager) {
      _export("EventManager", _eventManager.EventManager);
    }, function(_observerLocator) {
      _export("ObserverLocator", _observerLocator.ObserverLocator);
    }, function(_valueConverter) {
      _export("ValueConverter", _valueConverter.ValueConverter);
    }, function(_arrayChangeRecords) {
      _export("calcSplices", _arrayChangeRecords.calcSplices);
    }, function(_bindingModes) {
      for (var _key in _bindingModes) {
        _export(_key, _bindingModes[_key]);
      }
    }, function(_expressionsParser) {
      _export("Parser", _expressionsParser.Parser);
    }, function(_bindingExpression) {
      _export("BindingExpression", _bindingExpression.BindingExpression);
    }, function(_listenerExpression) {
      _export("ListenerExpression", _listenerExpression.ListenerExpression);
    }, function(_nameExpression) {
      _export("NameExpression", _nameExpression.NameExpression);
    }, function(_callExpression) {
      _export("CallExpression", _callExpression.CallExpression);
    }, function(_dirtyChecking) {
      _export("DirtyChecker", _dirtyChecking.DirtyChecker);
    }],
    execute: function() {
      patchAST();
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/view-engine", ["aurelia-logging", "aurelia-loader", "aurelia-path", "./view-compiler", "./resource-registry"], function(_export) {
  "use strict";
  var LogManager,
      Loader,
      relativeToFile,
      ViewCompiler,
      ResourceRegistry,
      ViewResources,
      _prototypeProperties,
      importSplitter,
      logger,
      ViewEngine;
  return {
    setters: [function(_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function(_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }, function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }, function(_viewCompiler) {
      ViewCompiler = _viewCompiler.ViewCompiler;
    }, function(_resourceRegistry) {
      ResourceRegistry = _resourceRegistry.ResourceRegistry;
      ViewResources = _resourceRegistry.ViewResources;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      importSplitter = /\s*,\s*/;
      logger = LogManager.getLogger("templating");
      ViewEngine = (function() {
        var ViewEngine = function ViewEngine(loader, viewCompiler, appResources) {
          this.loader = loader;
          this.viewCompiler = viewCompiler;
          this.appResources = appResources;
          this.importedViews = {};
        };
        _prototypeProperties(ViewEngine, {inject: {
            value: function() {
              return [Loader, ViewCompiler, ResourceRegistry];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          loadViewFactory: {
            value: function(url, compileOptions, associatedModuleId) {
              var _this = this;
              var existing = this.importedViews[url];
              if (existing) {
                return Promise.resolve(existing);
              }
              return this.loader.loadTemplate(url).then(function(template) {
                return _this.loadTemplateResources(url, template, associatedModuleId).then(function(resources) {
                  existing = _this.importedViews[url];
                  if (existing) {
                    return existing;
                  }
                  var viewFactory = _this.viewCompiler.compile(template, resources, compileOptions);
                  _this.importedViews[url] = viewFactory;
                  return viewFactory;
                });
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadTemplateResources: {
            value: function(templateUrl, template, associatedModuleId) {
              var _this2 = this;
              var importIds,
                  names,
                  i,
                  ii,
                  j,
                  jj,
                  parts,
                  src,
                  srcParts,
                  registry = new ViewResources(this.appResources, templateUrl),
                  dxImportElements = template.content.querySelectorAll("import"),
                  associatedModule;
              if (dxImportElements.length === 0 && !associatedModuleId) {
                return Promise.resolve(registry);
              }
              importIds = [];
              names = [];
              for (i = 0, ii = dxImportElements.length; i < ii; ++i) {
                src = dxImportElements[i].getAttribute("src");
                if (!src) {
                  throw new Error("Import element in " + templateUrl + " has no src attribute.");
                }
                parts = src.split(importSplitter);
                for (j = 0, jj = parts.length; j < jj; ++j) {
                  srcParts = parts[j].split(" as ");
                  importIds.push(srcParts[0]);
                  names.push(srcParts.length == 2 ? srcParts[1] : null);
                }
              }
              importIds = importIds.map(function(x) {
                return relativeToFile(x, templateUrl);
              });
              logger.debug("importing resources for " + templateUrl, importIds);
              return this.resourceCoordinator.importResourcesFromModuleIds(importIds).then(function(toRegister) {
                for (i = 0, ii = toRegister.length; i < ii; ++i) {
                  toRegister[i].register(registry, names[i]);
                }
                if (associatedModuleId) {
                  associatedModule = _this2.resourceCoordinator.getExistingModuleAnalysis(associatedModuleId);
                  if (associatedModule) {
                    associatedModule.register(registry);
                  }
                }
                return registry;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ViewEngine;
      })();
      _export("ViewEngine", ViewEngine);
    }
  };
});



System.register("github:aurelia/dependency-injection@0.3.1/system/index", ["./annotations", "./container"], function(_export) {
  "use strict";
  return {
    setters: [function(_annotations) {
      _export("Inject", _annotations.Inject);
      _export("Registration", _annotations.Registration);
      _export("Transient", _annotations.Transient);
      _export("Singleton", _annotations.Singleton);
      _export("Resolver", _annotations.Resolver);
      _export("Lazy", _annotations.Lazy);
      _export("All", _annotations.All);
      _export("Optional", _annotations.Optional);
      _export("Parent", _annotations.Parent);
    }, function(_container) {
      _export("Container", _container.Container);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/binding@0.2.2", ["github:aurelia/binding@0.2.2/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.7.1/system/custom-element", ["aurelia-metadata", "./behavior-instance", "./behaviors", "./content-selector", "./view-engine", "./view-strategy", "./util"], function(_export) {
  "use strict";
  var getAnnotation,
      Origin,
      ResourceType,
      BehaviorInstance,
      configureBehavior,
      ContentSelector,
      ViewEngine,
      ViewStrategy,
      hyphenate,
      _prototypeProperties,
      _inherits,
      defaultInstruction,
      contentSelectorFactoryOptions,
      hasShadowDOM,
      UseShadowDOM,
      CustomElement;
  return {
    setters: [function(_aureliaMetadata) {
      getAnnotation = _aureliaMetadata.getAnnotation;
      Origin = _aureliaMetadata.Origin;
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function(_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function(_contentSelector) {
      ContentSelector = _contentSelector.ContentSelector;
    }, function(_viewEngine) {
      ViewEngine = _viewEngine.ViewEngine;
    }, function(_viewStrategy) {
      ViewStrategy = _viewStrategy.ViewStrategy;
    }, function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      defaultInstruction = {suppressBind: false};
      contentSelectorFactoryOptions = {suppressBind: true};
      hasShadowDOM = !!HTMLElement.prototype.createShadowRoot;
      UseShadowDOM = function UseShadowDOM() {};
      _export("UseShadowDOM", UseShadowDOM);
      CustomElement = (function(ResourceType) {
        var CustomElement = function CustomElement(tagName) {
          this.name = tagName;
          this.properties = [];
          this.attributes = {};
        };
        _inherits(CustomElement, ResourceType);
        _prototypeProperties(CustomElement, {convention: {
            value: function(name) {
              if (name.endsWith("CustomElement")) {
                return new CustomElement(hyphenate(name.substring(0, name.length - 13)));
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          load: {
            value: function(container, target, viewStrategy) {
              var _this = this;
              var annotation,
                  options;
              configureBehavior(this, container, target);
              this.targetShadowDOM = getAnnotation(target, UseShadowDOM) !== null;
              this.usesShadowDOM = this.targetShadowDOM && hasShadowDOM;
              viewStrategy = viewStrategy || ViewStrategy.getDefault(target);
              options = {targetShadowDOM: this.targetShadowDOM};
              if (!viewStrategy.moduleId) {
                viewStrategy.moduleId = Origin.get(target).moduleId;
              }
              return viewStrategy.loadViewFactory(container.get(ViewEngine), options).then(function(viewFactory) {
                _this.viewFactory = viewFactory;
                return _this;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          register: {
            value: function(registry, name) {
              registry.registerElement(name || this.name, this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          compile: {
            value: function(compiler, resources, node, instruction) {
              if (!this.usesShadowDOM && node.hasChildNodes()) {
                var fragment = document.createDocumentFragment(),
                    currentChild = node.firstChild,
                    nextSibling;
                while (currentChild) {
                  nextSibling = currentChild.nextSibling;
                  fragment.appendChild(currentChild);
                  currentChild = nextSibling;
                }
                instruction.contentFactory = compiler.compile(fragment, resources);
              }
              instruction.suppressBind = true;
              return node;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          create: {
            value: function(container) {
              var _this2 = this;
              var instruction = arguments[1] === undefined ? defaultInstruction : arguments[1];
              var element = arguments[2] === undefined ? null : arguments[2];
              return (function() {
                var executionContext = instruction.executionContext || container.get(_this2.target),
                    behaviorInstance = new BehaviorInstance(_this2.taskQueue, _this2.observerLocator, _this2, executionContext, instruction),
                    host;
                if (_this2.viewFactory) {
                  behaviorInstance.view = _this2.viewFactory.create(container, behaviorInstance.executionContext, instruction);
                }
                if (element) {
                  element.elementBehavior = behaviorInstance;
                  element.primaryBehavior = behaviorInstance;
                  if (behaviorInstance.view) {
                    if (_this2.usesShadowDOM) {
                      host = element.createShadowRoot();
                    } else {
                      host = element;
                      if (instruction.contentFactory) {
                        var contentView = instruction.contentFactory.create(container, null, contentSelectorFactoryOptions);
                        ContentSelector.applySelectors(contentView, behaviorInstance.view.contentSelectors, function(contentSelector, group) {
                          return contentSelector.add(group);
                        });
                        behaviorInstance.contentView = contentView;
                      }
                    }
                    if (_this2.childExpression) {
                      behaviorInstance.view.addBinding(_this2.childExpression.createBinding(host, behaviorInstance.executionContext));
                    }
                    behaviorInstance.view.appendNodesTo(host);
                  }
                } else if (behaviorInstance.view) {
                  behaviorInstance.view.owner = behaviorInstance;
                }
                return behaviorInstance;
              })();
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return CustomElement;
      })(ResourceType);
      _export("CustomElement", CustomElement);
    }
  };
});



System.register("github:aurelia/dependency-injection@0.3.1", ["github:aurelia/dependency-injection@0.3.1/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.7.1/system/behaviors", ["aurelia-metadata", "aurelia-task-queue", "aurelia-binding", "./children", "./property", "./util"], function(_export) {
  "use strict";
  var getAllAnnotations,
      getAnnotation,
      ResourceType,
      TaskQueue,
      ObserverLocator,
      Children,
      Property,
      hyphenate;
  _export("configureBehavior", configureBehavior);
  function configureBehavior(behavior, container, target) {
    var proto = target.prototype,
        i,
        ii,
        properties;
    if (!behavior.name) {
      behavior.name = hyphenate(target.name);
    }
    behavior.target = target;
    behavior.taskQueue = container.get(TaskQueue);
    behavior.observerLocator = container.get(ObserverLocator);
    behavior.handlesCreated = "created" in proto;
    behavior.handlesBind = "bind" in proto;
    behavior.handlesUnbind = "unbind" in proto;
    behavior.handlesAttached = "attached" in proto;
    behavior.handlesDetached = "detached" in proto;
    properties = getAllAnnotations(target, Property);
    for (i = 0, ii = properties.length; i < ii; ++i) {
      properties[i].configureBehavior(behavior);
    }
    behavior.childExpression = getAnnotation(target, Children);
  }
  return {
    setters: [function(_aureliaMetadata) {
      getAllAnnotations = _aureliaMetadata.getAllAnnotations;
      getAnnotation = _aureliaMetadata.getAnnotation;
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function(_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
    }, function(_children) {
      Children = _children.Children;
    }, function(_property) {
      Property = _property.Property;
    }, function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.7.1/system/resource-coordinator", ["aurelia-loader", "aurelia-dependency-injection", "aurelia-metadata", "aurelia-binding", "./custom-element", "./attached-behavior", "./template-controller", "./view-engine"], function(_export) {
  "use strict";
  var Loader,
      Container,
      getAnnotation,
      addAnnotation,
      ResourceType,
      Origin,
      ValueConverter,
      CustomElement,
      AttachedBehavior,
      TemplateController,
      ViewEngine,
      _prototypeProperties,
      id,
      ResourceCoordinator,
      ResourceModule;
  function nextId() {
    return ++id;
  }
  function analyzeModule(moduleInstance, viewModelMember) {
    var viewModelType,
        fallback,
        annotation,
        key,
        exportedValue,
        resources = [],
        name,
        conventional;
    if (viewModelMember) {
      viewModelType = moduleInstance[viewModelMember];
    }
    for (key in moduleInstance) {
      exportedValue = moduleInstance[key];
      if (key === viewModelMember || typeof exportedValue !== "function") {
        continue;
      }
      annotation = getAnnotation(exportedValue, ResourceType);
      if (annotation) {
        if (!viewModelType && annotation instanceof CustomElement) {
          viewModelType = exportedValue;
        } else {
          resources.push({
            type: annotation,
            value: exportedValue
          });
        }
      } else {
        name = exportedValue.name;
        if (conventional = CustomElement.convention(name)) {
          if (!viewModelType) {
            addAnnotation(exportedValue, conventional);
            viewModelType = exportedValue;
          } else {
            resources.push({
              type: conventional,
              value: exportedValue
            });
          }
        } else if (conventional = AttachedBehavior.convention(name)) {
          resources.push({
            type: conventional,
            value: exportedValue
          });
        } else if (conventional = TemplateController.convention(name)) {
          resources.push({
            type: conventional,
            value: exportedValue
          });
        } else if (conventional = ValueConverter.convention(name)) {
          resources.push({
            type: conventional,
            value: exportedValue
          });
        } else if (!fallback) {
          fallback = exportedValue;
        }
      }
    }
    viewModelType = viewModelType || fallback;
    return new ResourceModule(moduleInstance, viewModelType ? {
      value: viewModelType,
      type: getAnnotation(viewModelType, CustomElement) || new CustomElement()
    } : null, resources);
  }
  return {
    setters: [function(_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }, function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_aureliaMetadata) {
      getAnnotation = _aureliaMetadata.getAnnotation;
      addAnnotation = _aureliaMetadata.addAnnotation;
      ResourceType = _aureliaMetadata.ResourceType;
      Origin = _aureliaMetadata.Origin;
    }, function(_aureliaBinding) {
      ValueConverter = _aureliaBinding.ValueConverter;
    }, function(_customElement) {
      CustomElement = _customElement.CustomElement;
    }, function(_attachedBehavior) {
      AttachedBehavior = _attachedBehavior.AttachedBehavior;
    }, function(_templateController) {
      TemplateController = _templateController.TemplateController;
    }, function(_viewEngine) {
      ViewEngine = _viewEngine.ViewEngine;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      id = 0;
      ResourceCoordinator = (function() {
        var ResourceCoordinator = function ResourceCoordinator(loader, container, viewEngine) {
          this.loader = loader;
          this.container = container;
          this.viewEngine = viewEngine;
          this.importedModules = {};
          this.importedAnonymous = {};
          viewEngine.resourceCoordinator = this;
        };
        _prototypeProperties(ResourceCoordinator, {inject: {
            value: function() {
              return [Loader, Container, ViewEngine];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          getExistingModuleAnalysis: {
            value: function(id) {
              return this.importedModules[id] || this.importedAnonymous[id];
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadViewModelInfo: {
            value: function(moduleImport, moduleMember) {
              return this._loadAndAnalyzeModuleForElement(moduleImport, moduleMember, this.importedAnonymous);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadElement: {
            value: function(moduleImport, moduleMember, viewStategy) {
              var _this = this;
              return this._loadAndAnalyzeModuleForElement(moduleImport, moduleMember, this.importedModules).then(function(info) {
                var type = info.type;
                if (type.isLoaded) {
                  return type;
                }
                type.isLoaded = true;
                return type.load(_this.container, info.value, viewStategy);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          _loadAndAnalyzeModuleForElement: {
            value: function(moduleImport, moduleMember, cache) {
              var _this2 = this;
              var existing = cache[moduleImport];
              if (existing) {
                return Promise.resolve(existing.element);
              }
              return this.loader.loadModule(moduleImport).then(function(elementModule) {
                var analysis = analyzeModule(elementModule, moduleMember),
                    resources = analysis.resources,
                    container = _this2.container,
                    loads = [],
                    type,
                    current,
                    i,
                    ii;
                if (!analysis.element) {
                  throw new Error("No element found in module \"" + moduleImport + "\".");
                }
                for (i = 0, ii = resources.length; i < ii; ++i) {
                  current = resources[i];
                  type = current.type;
                  if (!type.isLoaded) {
                    type.isLoaded = true;
                    loads.push(type.load(container, current.value));
                  }
                }
                cache[analysis.id] = analysis;
                return Promise.all(loads).then(function() {
                  return analysis.element;
                });
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          importResources: {
            value: function(imports) {
              var i,
                  ii,
                  current,
                  annotation,
                  existing,
                  lookup = {},
                  finalModules = [],
                  importIds = [];
              for (i = 0, ii = imports.length; i < ii; ++i) {
                current = imports[i];
                annotation = Origin.get(current);
                existing = lookup[annotation.moduleId];
                if (!existing) {
                  existing = {};
                  importIds.push(annotation.moduleId);
                  finalModules.push(existing);
                  lookup[annotation.moduleId] = existing;
                }
                existing[nextId()] = current;
              }
              return this.importResourcesFromModules(finalModules, importIds);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          importResourcesFromModuleIds: {
            value: function(importIds) {
              var _this3 = this;
              return this.loader.loadAllModules(importIds).then(function(imports) {
                return _this3.importResourcesFromModules(imports, importIds);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          importResourcesFromModules: {
            value: function(imports, importIds) {
              var loads = [],
                  i,
                  ii,
                  analysis,
                  type,
                  key,
                  annotation,
                  j,
                  jj,
                  resources,
                  current,
                  existing = this.importedModules,
                  container = this.container,
                  allAnalysis = new Array(imports.length);
              if (!importIds) {
                importIds = new Array(imports.length);
                for (i = 0, ii = imports.length; i < ii; ++i) {
                  current = imports[i];
                  for (key in current) {
                    type = current[key];
                    annotation = Origin.get(type);
                    if (annotation) {
                      importIds[i] = annotation.moduleId;
                      break;
                    }
                  }
                }
              }
              for (i = 0, ii = imports.length; i < ii; ++i) {
                analysis = existing[importIds[i]];
                if (analysis) {
                  allAnalysis[i] = analysis;
                  continue;
                }
                analysis = analyzeModule(imports[i]);
                existing[analysis.id] = analysis;
                allAnalysis[i] = analysis;
                resources = analysis.resources;
                for (j = 0, jj = resources.length; j < jj; ++j) {
                  current = resources[j];
                  type = current.type;
                  if (!type.isLoaded) {
                    type.isLoaded = true;
                    loads.push(type.load(container, current.value));
                  }
                }
                if (analysis.element) {
                  type = analysis.element.type;
                  if (!type.isLoaded) {
                    type.isLoaded = true;
                    loads.push(type.load(container, analysis.element.value));
                  }
                }
              }
              return Promise.all(loads).then(function() {
                return allAnalysis;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ResourceCoordinator;
      })();
      _export("ResourceCoordinator", ResourceCoordinator);
      ResourceModule = (function() {
        var ResourceModule = function ResourceModule(source, element, resources) {
          var i,
              ii;
          this.source = source;
          this.element = element;
          this.resources = resources;
          if (element) {
            this.id = Origin.get(element.value).moduleId;
          } else if (resources.length) {
            this.id = Origin.get(resources[0].value).moduleId;
          }
        };
        _prototypeProperties(ResourceModule, null, {register: {
            value: function(registry, name) {
              var i,
                  ii,
                  resources = this.resources;
              if (this.element) {
                this.element.type.register(registry, name);
                name = null;
              }
              for (i = 0, ii = resources.length; i < ii; ++i) {
                resources[i].type.register(registry, name);
                name = null;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return ResourceModule;
      })();
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/attached-behavior", ["aurelia-metadata", "./behavior-instance", "./behaviors", "./property", "./util"], function(_export) {
  "use strict";
  var ResourceType,
      BehaviorInstance,
      configureBehavior,
      Property,
      hyphenate,
      _prototypeProperties,
      _inherits,
      AttachedBehavior;
  return {
    setters: [function(_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function(_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function(_property) {
      Property = _property.Property;
    }, function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(child, parent) {
        if (typeof parent !== "function" && parent !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
        }
        child.prototype = Object.create(parent && parent.prototype, {constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (parent)
          child.__proto__ = parent;
      };
      AttachedBehavior = (function(ResourceType) {
        var AttachedBehavior = function AttachedBehavior(attribute) {
          this.name = attribute;
          this.properties = [];
          this.attributes = {};
        };
        _inherits(AttachedBehavior, ResourceType);
        _prototypeProperties(AttachedBehavior, {convention: {
            value: function(name) {
              if (name.endsWith("AttachedBehavior")) {
                return new AttachedBehavior(hyphenate(name.substring(0, name.length - 16)));
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          load: {
            value: function(container, target) {
              configureBehavior(this, container, target);
              if (this.properties.length === 0 && "valueChanged" in target.prototype) {
                new Property("value", "valueChanged", this.name).configureBehavior(this);
              }
              return Promise.resolve(this);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          register: {
            value: function(registry, name) {
              registry.registerAttribute(name || this.name, this, this.name);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          compile: {
            value: function(compiler, resources, node, instruction) {
              instruction.suppressBind = true;
              return node;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          create: {
            value: function(container, instruction, element, bindings) {
              var executionContext = instruction.executionContext || container.get(this.target),
                  behaviorInstance = new BehaviorInstance(this.taskQueue, this.observerLocator, this, executionContext, instruction);
              if (this.childExpression) {
                bindings.push(this.childExpression.createBinding(element, behaviorInstance.executionContext));
              }
              return behaviorInstance;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return AttachedBehavior;
      })(ResourceType);
      _export("AttachedBehavior", AttachedBehavior);
    }
  };
});



System.register("github:aurelia/templating@0.7.1/system/index", ["./attached-behavior", "./property", "./resource-coordinator", "./resource-registry", "./children", "./custom-element", "./element-config", "./template-controller", "./view-strategy", "./view-compiler", "./view-engine", "./view-factory", "./view-slot", "./binding-language", "./composition-engine"], function(_export) {
  "use strict";
  return {
    setters: [function(_attachedBehavior) {
      _export("AttachedBehavior", _attachedBehavior.AttachedBehavior);
    }, function(_property) {
      _export("Property", _property.Property);
      _export("OptionsProperty", _property.OptionsProperty);
    }, function(_resourceCoordinator) {
      _export("ResourceCoordinator", _resourceCoordinator.ResourceCoordinator);
    }, function(_resourceRegistry) {
      _export("ResourceRegistry", _resourceRegistry.ResourceRegistry);
      _export("ViewResources", _resourceRegistry.ViewResources);
    }, function(_children) {
      _export("Children", _children.Children);
    }, function(_customElement) {
      _export("CustomElement", _customElement.CustomElement);
      _export("UseShadowDOM", _customElement.UseShadowDOM);
    }, function(_elementConfig) {
      _export("ElementConfig", _elementConfig.ElementConfig);
    }, function(_templateController) {
      _export("TemplateController", _templateController.TemplateController);
    }, function(_viewStrategy) {
      _export("ViewStrategy", _viewStrategy.ViewStrategy);
      _export("UseView", _viewStrategy.UseView);
      _export("ConventionalView", _viewStrategy.ConventionalView);
      _export("NoView", _viewStrategy.NoView);
    }, function(_viewCompiler) {
      _export("ViewCompiler", _viewCompiler.ViewCompiler);
    }, function(_viewEngine) {
      _export("ViewEngine", _viewEngine.ViewEngine);
    }, function(_viewFactory) {
      _export("ViewFactory", _viewFactory.ViewFactory);
      _export("BoundViewFactory", _viewFactory.BoundViewFactory);
    }, function(_viewSlot) {
      _export("ViewSlot", _viewSlot.ViewSlot);
    }, function(_bindingLanguage) {
      _export("BindingLanguage", _bindingLanguage.BindingLanguage);
    }, function(_compositionEngine) {
      _export("CompositionEngine", _compositionEngine.CompositionEngine);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.7.1", ["github:aurelia/templating@0.7.1/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/framework@0.7.0/system/aurelia", ["aurelia-logging", "aurelia-dependency-injection", "aurelia-loader", "aurelia-templating", "./plugins"], function(_export) {
  "use strict";
  var LogManager,
      Container,
      Loader,
      BindingLanguage,
      ResourceCoordinator,
      ViewSlot,
      ResourceRegistry,
      CompositionEngine,
      Plugins,
      _prototypeProperties,
      logger,
      slice,
      Aurelia;
  function loadResources(container, resourcesToLoad, appResources) {
    var resourceCoordinator = container.get(ResourceCoordinator),
        current;
    function next() {
      if (current = resourcesToLoad.shift()) {
        return resourceCoordinator.importResources(current).then(function(resources) {
          resources.forEach(function(x) {
            return x.register(appResources);
          });
          return next();
        });
      }
      return Promise.resolve();
    }
    return next();
  }
  return {
    setters: [function(_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }, function(_aureliaTemplating) {
      BindingLanguage = _aureliaTemplating.BindingLanguage;
      ResourceCoordinator = _aureliaTemplating.ResourceCoordinator;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ResourceRegistry = _aureliaTemplating.ResourceRegistry;
      CompositionEngine = _aureliaTemplating.CompositionEngine;
    }, function(_plugins) {
      Plugins = _plugins.Plugins;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      logger = LogManager.getLogger("aurelia");
      slice = Array.prototype.slice;
      Aurelia = (function() {
        function Aurelia(loader, container, resources) {
          this.loader = loader || Loader.createDefaultLoader();
          this.container = container || new Container();
          this.resources = resources || new ResourceRegistry();
          this.resourcesToLoad = [];
          this.plugins = new Plugins(this);
          this.withInstance(Aurelia, this);
          this.withInstance(Loader, this.loader);
          this.withInstance(ResourceRegistry, this.resources);
        }
        _prototypeProperties(Aurelia, null, {
          withInstance: {
            value: function(type, instance) {
              this.container.registerInstance(type, instance);
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          withSingleton: {
            value: function(type, implementation) {
              this.container.registerSingleton(type, implementation);
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          withResources: {
            value: function(resources) {
              if (Array.isArray(resources)) {
                this.resourcesToLoad.push(resources);
              } else {
                this.resourcesToLoad.push(slice.call(arguments));
              }
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          start: {
            value: function() {
              var _this = this;
              if (this.started) {
                return;
              }
              this.started = true;
              logger.info("Aurelia Starting");
              return this.plugins.process().then(function() {
                if (!_this.container.hasHandler(BindingLanguage)) {
                  logger.error("You must configure Aurelia with a BindingLanguage implementation.");
                }
                return loadResources(_this.container, _this.resourcesToLoad, _this.resources).then(function() {
                  logger.info("Aurelia Started");
                  return _this;
                });
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setRoot: {
            value: function(root, applicationHost) {
              var _this2 = this;
              var compositionEngine,
                  instruction = {};
              if (!applicationHost || typeof applicationHost == "string") {
                this.host = document.getElementById(applicationHost || "applicationHost") || document.body;
              } else {
                this.host = applicationHost;
              }
              this.host.aurelia = this;
              this.container.registerInstance(Element, this.host);
              compositionEngine = this.container.get(CompositionEngine);
              instruction.viewModel = root;
              instruction.viewSlot = new ViewSlot(this.host, true);
              instruction.container = instruction.childContainer = this.container;
              return compositionEngine.compose(instruction).then(function(root) {
                _this2.root = root;
                instruction.viewSlot.attached();
                return _this2;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Aurelia;
      })();
      _export("Aurelia", Aurelia);
    }
  };
});



System.register("github:aurelia/framework@0.7.0/system/index", ["./aurelia", "aurelia-dependency-injection", "aurelia-binding", "aurelia-metadata", "aurelia-templating", "aurelia-loader", "aurelia-task-queue", "aurelia-logging"], function(_export) {
  "use strict";
  var TheLogManager,
      LogManager;
  return {
    setters: [function(_aurelia) {
      _export("Aurelia", _aurelia.Aurelia);
    }, function(_aureliaDependencyInjection) {
      for (var _key in _aureliaDependencyInjection) {
        _export(_key, _aureliaDependencyInjection[_key]);
      }
    }, function(_aureliaBinding) {
      for (var _key2 in _aureliaBinding) {
        _export(_key2, _aureliaBinding[_key2]);
      }
    }, function(_aureliaMetadata) {
      for (var _key3 in _aureliaMetadata) {
        _export(_key3, _aureliaMetadata[_key3]);
      }
    }, function(_aureliaTemplating) {
      for (var _key4 in _aureliaTemplating) {
        _export(_key4, _aureliaTemplating[_key4]);
      }
    }, function(_aureliaLoader) {
      for (var _key5 in _aureliaLoader) {
        _export(_key5, _aureliaLoader[_key5]);
      }
    }, function(_aureliaTaskQueue) {
      for (var _key6 in _aureliaTaskQueue) {
        _export(_key6, _aureliaTaskQueue[_key6]);
      }
    }, function(_aureliaLogging) {
      TheLogManager = _aureliaLogging;
    }],
    execute: function() {
      LogManager = _export("LogManager", TheLogManager);
    }
  };
});



System.register("github:aurelia/framework@0.7.0", ["github:aurelia/framework@0.7.0/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("dist/main", ["aurelia-framework", "aurelia-logging-console"], function(_export) {
  "use strict";
  var LogManager,
      ConsoleAppender;
  _export("configure", configure);
  function configure(aurelia) {
    aurelia.plugins.installBindingLanguage().installResources().installRouter().installEventAggregator();
    aurelia.start().then(function(a) {
      return a.setRoot("app", document.body);
    });
  }
  return {
    setters: [function(_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function(_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function() {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }
  };
});



//# sourceMappingURL=build.js.map