define(['plugins/router', 'knockout', 'durandal/app'], 
function (router, ko, app) {
	var childRouter = router.createChildRouter()
		.makeRelative({
			moduleId: 'projects',
        	fromParent: true
		}).map([
			//{ route: ['', 'intro'], 	moduleId: 'static',	title: 'Intro',			nav: true,	view: 'intro.html'			},
			//Project Children - this is done because Durandal doesn't yet support static views
			{ route: ['','swc'],		moduleId: 'static',	title: 'ShiftWise Connect',	nav: true, 	view: 'swc.html',			type: 'pro' },
			{ route: 'esp',				moduleId: 'static',	title: 'ESP',				nav: true, 	view: 'esp.html',			type: 'pro' },
			{ route: 'sprintr',			moduleId: 'static',	title: 'Sprintr',			nav: true, 	view: 'sprintr.html',		type: 'pro' },			
			{ route: 'nwmaico',			moduleId: 'static',	title: 'NW Maico & CZ',		nav: true, 	view: 'nwmaico.html',		type: 'pro' } ,
			{ route: 'affinity-web',	moduleId: 'static',	title: 'Affinity Web',		nav: true,	view: 'affinity-web.html',	type: 'pro' },
			{ route: 'affinity',		moduleId: 'static',	title: 'Affinity',			nav: true,	view: 'affinity.html', 		type: 'pro' },

			//Personal Projects
			{ route: 'jstestlite',		moduleId: 'static',	title: 'JS Test Lite',		nav: true, 	view: 'jstestlite.html',	type: 'personal' },
			{ route: 'chaos',			moduleId: 'static',	title: 'Chaos Crusade',		nav: true, 	view: 'chaos.html',			type: 'personal' }			
		]).buildNavigationModel();

	return {
		router: childRouter,
		proProjects: ko.computed(function() {
			return childRouter.navigationModel().filter(function(p) {
				return p.type === 'pro';
			});
		}),
		personalProjects: ko.computed(function() {
			return childRouter.navigationModel().filter(function(p) {
				return p.type === 'personal';
			});
		})
	};
});