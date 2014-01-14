define(['plugins/router', 'knockout', 'durandal/app', 'jquery'], 
function (router, ko, app, $) {

	var navCollapse = $('#navbar-collapse-group');

	return {
		title: 'Home',
		router: router,
		activate: function() {
			router.map([
					{ route: ['', 'home'],			moduleId: 'home/index',			title: 'Home',		nav: false },
					{ route: 'projects*project',	moduleId: 'projects/index',		title: 'Portfolio',	nav: true,	hash: '#projects' },
					{ route: 'resume',				moduleId: 'resume/index', 		title: 'Resume',	nav: true }
				])
				.buildNavigationModel()
				.mapUnknownRoutes('shell/404', '404');

			//Ensure the mobile nav menu gets closed during navigation (it doesn't do this itself)
			router.on('router:navigation:complete').then(function() {
				if (navCollapse.hasClass('in'))
			navCollapse.collapse('hide');
			});

			return router.activate({ pushState: true });
		}
	};
});