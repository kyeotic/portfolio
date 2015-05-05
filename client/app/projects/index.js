System.register(['aurelia-router'], function (_export) {
  var Router, Projects;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      'use strict';

      Projects = (function () {
        function Projects(router) {
          _classCallCheck(this, Projects);

          this.router = router;
          this.router.configure(function (config) {
            config.title = 'Projects';
            config.map([{ route: ['swc', ''], moduleId: './static', title: 'ShiftWise Connect', nav: true, view: 'app/projects/swc.html', type: 'pro' }, { route: 'esp', moduleId: './static', title: 'ESP', nav: true, view: 'app/projects/esp.html', type: 'pro' }, { route: 'nwmaico', moduleId: './static', title: 'NW Maico & CZ', nav: true, view: 'app/projects/nwmaico.html', type: 'pro' }, { route: 'affinity-web', moduleId: './static', title: 'Affinity Web', nav: true, view: 'app/projects/affinity-web.html', type: 'pro' }, { route: 'affinity', moduleId: './static', title: 'Affinity', nav: true, view: 'app/projects/affinity.html', type: 'pro' }, { route: 'jstestlite', moduleId: './static', title: 'JS Test Lite', nav: true, view: 'app/projects/jstestlite.html', type: 'personal' }, { route: 'portfolio', moduleId: './static', title: 'Portfolio', nav: true, view: 'app/projects/portfolio.html', type: 'personal' }, { route: 'durandal-grid', moduleId: './static', title: 'Durandal Grid', nav: true, view: 'app/projects/durandal-grid.html', type: 'personal' }, { route: 'sprintr', moduleId: './static', title: 'Sprintr', nav: true, view: 'app/projects/sprintr.html', type: 'personal' }, { route: 'chaos', moduleId: './static', title: 'Chaos Crusade', nav: true, view: 'app/projects/chaos.html', type: 'personal' }, { route: 'mastering-knockout', moduleId: './static', title: 'Mastering KnockoutJS', nav: true, view: 'app/projects/masteringKnockout.html', type: 'publication' }]);
          });
        }

        _createClass(Projects, [{
          key: 'activate',
          value: function activate() {
            this.projectGroups = [{
              title: 'Personal Projects',
              projects: this.router.navigation.filter(function (route) {
                return route.config.type === 'personal';
              })
            }, {
              title: 'Professional Work',
              projects: this.router.navigation.filter(function (route) {
                return route.config.type === 'pro';
              })
            }, {
              title: 'Publications',
              projects: this.router.navigation.filter(function (route) {
                return route.config.type === 'publication';
              })
            }];
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [Router];
          }
        }]);

        return Projects;
      })();

      _export('Projects', Projects);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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