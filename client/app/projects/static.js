System.register(['jquery', 'Magnific-Popup'], function (_export) {
  var $, magnific, ProjectBase;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_jquery) {
      $ = _jquery['default'];
    }, function (_MagnificPopup) {
      magnific = _MagnificPopup['default'];
    }],
    execute: function () {
      'use strict';

      ProjectBase = (function () {
        function ProjectBase() {
          _classCallCheck(this, ProjectBase);
        }

        _createClass(ProjectBase, [{
          key: 'activate',
          value: function activate() {

            var container = $('html,body'),
                scrollTo = $('#projectsContainer');

            if (container.width() > 767) {
              return;
            }

            container.animate({
              scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 50 });
          }
        }, {
          key: 'determineActivationStrategy',
          value: function determineActivationStrategy() {
            return 'replace';
          }
        }, {
          key: 'attached',
          value: function attached() {
            $('.image-link').each(function () {
              $(this).attr('title', this.alt);
              $(this).attr('href', this.src);
            });

            $('.image-link').magnificPopup({
              type: 'image',
              gallery: { enabled: true }
            });
          }
        }]);

        return ProjectBase;
      })();

      _export('ProjectBase', ProjectBase);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N0YXRpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO21CQUdhLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQUFYLGlCQUFXO2lCQUFYLFdBQVc7Z0NBQVgsV0FBVzs7O3FCQUFYLFdBQVc7O2lCQUNkLG9CQUFHOztBQVNULGdCQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUM1QixRQUFRLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7O0FBR3JDLGdCQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEVBQUU7QUFDM0IscUJBQU87YUFDUjs7QUFFRCxxQkFBUyxDQUFDLE9BQU8sQ0FBQztBQUNoQix1QkFBUyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUN2RixDQUFDLENBQUM7V0FDSjs7O2lCQUUwQix1Q0FBRztBQUM1QixtQkFBTyxTQUFTLENBQUM7V0FDbEI7OztpQkFFTyxvQkFBRztBQUtULGFBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBVztBQUMvQixlQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsZUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQzs7QUFHSCxhQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQzdCLGtCQUFJLEVBQUUsT0FBTztBQUNiLHFCQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO2FBQzNCLENBQUMsQ0FBQztXQUNKOzs7ZUExQ1UsV0FBVzs7OzZCQUFYLFdBQVciLCJmaWxlIjoicHJvamVjdHMvc3RhdGljLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==