define(['plugins/router', 'knockout', 'durandal/app', 'jquery'], 
function (router, ko, app, $) {  
	return {
		title: 'Home',
		router: router,
		activate: function() {
			router.map([
				{ route: '',			moduleId: 'home/index',			title: 'Home',		nav: false },
				{ route: 'projects',	moduleId: 'projects/index',		title: 'Projects',	nav: true },

				//Project Children - this is done because Durandal doesn't yet support static views
				{ route: 'projects/affinity',       moduleId: 'projects/index',	title: 'Affinity',		nav: false,		view: 'affinity.html' 		},
				{ route: 'projects/affinity-web',   moduleId: 'projects/index',	title: 'Affinity Web',	nav: false,		view: 'affinity-web.html'	},
				{ route: 'projects/nwmaico',		moduleId: 'projects/index',	title: 'NW Maico & CZ',	nav: false, 	view: 'nwmaico.html'		}
			]).buildNavigationModel();

			router.projects = router.routes.filter(function(x) {
				return x.view;
			});

			//Ensure the mobile nav menu gets closed during navigation (it doesn't do this itself)
			router.on('router:navigation:complete').then(function() {
				$('#navbar-collapse-group').collapse('hide')
			});

			return router.activate({ pushState: true });
		}
	};
});