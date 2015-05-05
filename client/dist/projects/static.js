System.register([], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      define(["jquery", "knockout", "projects/index"], function ($, ko, parent) {
        return function Static() {
          var self = this;
          self.view = ko.computed(function () {
            var route = parent.router.activeInstruction();
            return route ? "projects/" + route.config.view : null;
          });
          self.compositionComplete = function (view) {
            $(".image-link").each(function () {
              $(this).attr("title", this.alt);
              $(this).attr("href", this.src);
            });

            $(".image-link").magnificPopup({
              type: "image",
              gallery: { enabled: true }
            });
          };
        };
      });
    }
  };
});