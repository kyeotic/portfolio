System.register(["jquery", "Magnific-Popup"], function (_export) {
  "use strict";

  var $, magnific, _prototypeProperties, ProjectBase;
  return {
    setters: [function (_jquery) {
      $ = _jquery["default"];
    }, function (_MagnificPopup) {
      magnific = _MagnificPopup["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      ProjectBase = (function () {
        function ProjectBase() {}

        _prototypeProperties(ProjectBase, null, {
          activate: {
            value: function () {
              var container = $("html,body"),
                  scrollTo = $("#projectsContainer");

              if (container.width() > 767) {
                return;
              }

              container.animate({
                scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 50 });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          determineActivationStrategy: {
            value: function () {
              return "replace";
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          attached: {
            value: function () {
              $(".image-link").each(function () {
                $(this).attr("title", this.alt);
                $(this).attr("href", this.src);
              });

              $(".image-link").magnificPopup({
                type: "image",
                gallery: { enabled: true }
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return ProjectBase;
      })();
      _export("ProjectBase", ProjectBase);
    }
  };
});