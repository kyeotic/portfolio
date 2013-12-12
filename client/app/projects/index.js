define(['plugins/router', 'knockout', 'durandal/app'], 
function (router, ko, app) {
	return {
		router: router,
		activate: function() {
			var route = router.activeInstruction();
			if (!route || !route.config.view)
				this.staticView(null);
			else
				this.staticView('/app/projects/' + route.config.view);
			return true;
		},
		staticView: ko.observable(null)
	}
});