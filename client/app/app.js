System.register(['aurelia-router'], function (_export) {
  var Router, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      'use strict';

      App = (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.history._hasPushState = true;
          this.router.configure(function (config) {
            config.title = 'Portfolio';
            config.options.pushState = true;
            config.map([{ route: ['', 'home'], moduleId: 'home/index', title: 'Home', nav: false }, { route: 'projects', moduleId: 'projects/index', title: 'Portfolio', nav: true }, { route: 'resume', moduleId: 'resume/index', title: 'Resume', nav: true }]);
            config.mapUnknownRoutes('errors/404');
          });
        }

        _createClass(App, null, [{
          key: 'inject',
          value: function inject() {
            return [Router];
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2NBRWEsR0FBRzs7Ozs7Ozs7OEJBRlIsTUFBTTs7Ozs7QUFFRCxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRTtnQ0FGVCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDekMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0FBQzNCLGtCQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDaEMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBUyxRQUFRLEVBQUUsWUFBWSxFQUFRLEtBQUssRUFBRSxNQUFNLEVBQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUM1RixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQVcsUUFBUSxFQUFFLGdCQUFnQixFQUFJLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUMzRixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWEsUUFBUSxFQUFFLGNBQWMsRUFBTSxLQUFLLEVBQUUsUUFBUSxFQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FDNUYsQ0FBQyxDQUFDO0FBQ0gsa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztXQUN2QyxDQUFDLENBQUM7U0FDSjs7cUJBZlUsR0FBRzs7aUJBQ0Qsa0JBQUc7QUFBRSxtQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQUU7OztlQUR6QixHQUFHOzs7cUJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9