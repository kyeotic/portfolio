System.register(['aurelia-framework', 'aurelia-logging-console'], function (_export) {
  var LogManager, ConsoleAppender;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

    aurelia.start().then(function (a) {
      return a.setRoot('app/app', document.body);
    });
  }

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function () {
      'use strict';

      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQU1nQixTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixzQkFBc0IsRUFBRSxDQUN4QixnQkFBZ0IsRUFBRSxDQUNsQixNQUFNLEVBQUUsQ0FDUixlQUFlLEVBQUUsQ0FBQzs7QUFFckIsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0dBQ2hFOzs7O3FDQWRPLFVBQVU7OytDQUNWLGVBQWU7Ozs7O0FBRXZCLGdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM5QyxnQkFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9