System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, Projects;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Projects = (function () {
        function Projects(router) {
          this.router = router;
          this.router.configure(function (config) {
            config.title = "Projects";
            config.map([{ route: ["swc", ""], moduleId: "./static", title: "ShiftWise Connect", nav: true, view: "projects/swc.html", type: "pro" }, { route: "esp", moduleId: "./static", title: "ESP", nav: true, view: "./esp.html", type: "pro" }, { route: "nwmaico", moduleId: "./static", title: "NW Maico & CZ", nav: true, view: "./nwmaico.html", type: "pro" }, { route: "affinity-web", moduleId: "./static", title: "Affinity Web", nav: true, view: "./affinity-web.html", type: "pro" }, { route: "affinity", moduleId: "./static", title: "Affinity", nav: true, view: "./affinity.html", type: "pro" }, { route: "jstestlite", moduleId: "./static", title: "JS Test Lite", nav: true, view: "./jstestlite.html", type: "personal" }, { route: "portfolio", moduleId: "./static", title: "Portfolio", nav: true, view: "./portfolio.html", type: "personal" }, { route: "durandal-grid", moduleId: "./static", title: "Durandal Grid", nav: true, view: "./durandal-grid.html", type: "personal" }, { route: "sprintr", moduleId: "./static", title: "Sprintr", nav: true, view: "./sprintr.html", type: "personal" }, { route: "chaos", moduleId: "./static", title: "Chaos Crusade", nav: true, view: "./chaos.html", type: "personal" }, { route: "mastering-knockout", moduleId: "./static", title: "Mastering KnockoutJS", nav: true, view: "./masteringKnockout.html", type: "publication" }]);
          });
        }

        _prototypeProperties(Projects, {
          inject: {
            value: function () {
              return [Router];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function () {
              this.projectGroups = [{
                title: "Personal Projects",
                projects: this.router.navigation.filter(function (route) {
                  return route.config.type === "personal";
                })
              }, {
                title: "Professional Work",
                projects: this.router.navigation.filter(function (route) {
                  return route.config.type === "pro";
                })
              }, {
                title: "Publications",
                projects: this.router.navigation.filter(function (route) {
                  return route.config.type === "publication";
                })
              }];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Projects;
      })();
      _export("Projects", Projects);
    }
  };
});