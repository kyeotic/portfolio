define(['plugins/router', 'knockout', 'durandal/app'], 
function (router, ko, app) {
	var childRouter = router.createChildRouter()
		.makeRelative({
			moduleId: 'projects',
        	fromParent: true
		}).map([
			//{ route: ['', 'intro'], 	moduleId: 'static',	title: 'Intro',			nav: true,	view: 'intro.html'			},
			//Project Children - this is done because Durandal doesn't yet support static views
			{ route: ['','swc'],		moduleId: 'static',	title: 'ShiftWise Connect',	nav: true, 	view: 'swc.html'			},
			{ route: 'esp',				moduleId: 'static',	title: 'ESP',				nav: true, 	view: 'esp.html'			},
			{ route: 'sprintr',			moduleId: 'static',	title: 'Sprintr',			nav: true, 	view: 'sprintr.html'		},
			{ route: 'nwmaico',			moduleId: 'static',	title: 'NW Maico & CZ',		nav: true, 	view: 'nwmaico.html'		},
			{ route: 'affinity-web',	moduleId: 'static',	title: 'Affinity Web',		nav: true,	view: 'affinity-web.html'	},
			{ route: 'affinity',		moduleId: 'static',	title: 'Affinity',			nav: true,	view: 'affinity.html' 		}
		]).buildNavigationModel();	

	return {
		router: childRouter
	};
});