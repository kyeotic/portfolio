System.register(["jquery", "magnific"], function (_export) {
  "use strict";

  var $, magnific, ProjectBase;
  return {
    setters: [function (_jquery) {
      $ = _jquery["default"];
    }, function (_magnific) {
      magnific = _magnific["default"];
    }],
    execute: function () {
      ProjectBase = function ProjectBase() {};

      ProjectBase.prototype.activate = function () {
        var container = $("html,body"),
            scrollTo = $("#projectsContainer");

        if (container.width() > 767) {
          return;
        }

        container.animate({
          scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 50 });
      };

      ProjectBase.prototype.determineActivationStrategy = function () {
        return "replace";
      };

      ProjectBase.prototype.attached = function () {
        $(".image-link").each(function () {
          $(this).attr("title", this.alt);
          $(this).attr("href", this.src);
        });

        $(".image-link").magnificPopup({
          type: "image",
          gallery: { enabled: true }
        });
      };

      _export("ProjectBase", ProjectBase);
    }
  };
});