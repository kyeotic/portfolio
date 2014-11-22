define(['plugins/router', 'knockout', 'durandal/app'], 
function (router, ko, app) {
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

			return router.activate({ pushState: app.config.pushState });
		}
	};
});