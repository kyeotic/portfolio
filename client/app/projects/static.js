define(['knockout', 'projects/index'], function(ko, parent) {
	return {
		view: ko.computed(function() {
			var route = parent.router.activeInstruction();
			return route ? 'projects/' + route.config.view : null;
		})
	};
});