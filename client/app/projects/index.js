define(['plugins/router', 'knockout', 'durandal/app'], 
function (router, ko, app) {
	var childRouter = router.createChildRouter()
		.makeRelative({
			moduleId: 'projects',
        	fromParent: true
		}).map([
			//{ route: ['', 'intro'], 	moduleId: 'static',	title: 'Intro',			nav: true,	view: 'intro.html'			},
			//Project Children - this is done because Durandal doesn't yet support static views
			{ route: ['','nwmaico'],	moduleId: 'static',	title: 'NW Maico & CZ',	nav: true, 	view: 'nwmaico.html'		},
			{ route: 'affinity-web',	moduleId: 'static',	title: 'Affinity Web',	nav: true,	view: 'affinity-web.html'	},
			{ route: 'affinity',		moduleId: 'static',	title: 'Affinity',		nav: true,	view: 'affinity.html' 		}
		]).buildNavigationModel();	

	return {
		router: childRouter
	};
});