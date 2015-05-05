System.register(['aurelia-framework'], function (_export) {
  var Behavior, NavBar;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      'use strict';

      NavBar = (function () {
        function NavBar() {
          _classCallCheck(this, NavBar);
        }

        _createClass(NavBar, null, [{
          key: 'metadata',
          value: function metadata() {
            return Behavior.withProperty('router');
          }
        }]);

        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci9uYXYtYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Z0JBRWEsTUFBTTs7Ozs7Ozs7bUNBRlgsUUFBUTs7Ozs7QUFFSCxZQUFNO2lCQUFOLE1BQU07Z0NBQU4sTUFBTTs7O3FCQUFOLE1BQU07O2lCQUNGLG9CQUFFO0FBQUUsbUJBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUFFOzs7ZUFEakQsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoibmF2YmFyL25hdi1iYXIuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9