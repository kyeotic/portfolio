System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      App = function App(router) {
        this.router = router;
        this.router.history._hasPushState = true;
        this.router.configure(function (config) {
          config.title = "Aurelia";
          config.map([{ route: ["", "home"], moduleId: "home/index", title: "Home", nav: false }, { route: "projects", moduleId: "projects/index", title: "Portfolio", nav: true }, { route: "resume", moduleId: "resume/index", title: "Resume", nav: true }]);
          config.mapUnknownRoutes("errors/404");
        });
      };

      App.inject = function () {
        return [Router];
      };

      _export("App", App);
    }
  };
});