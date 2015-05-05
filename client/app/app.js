System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      App = (function () {
        function App(router) {
          this.router = router;
          this.router.history._hasPushState = true;
          this.router.configure(function (config) {
            config.title = "Portfolio";
            config.options.pushState = true;
            config.map([{ route: ["", "home"], moduleId: "home/index", title: "Home", nav: false }, { route: "projects", moduleId: "projects/index", title: "Portfolio", nav: true }, { route: "resume", moduleId: "resume/index", title: "Resume", nav: true }]);
            config.mapUnknownRoutes("errors/404");
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function () {
              return [Router];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return App;
      })();
      _export("App", App);
    }
  };
});