define(['plugins/router', 'knockout', 'durandal/app', 'jquery'], 
function (router, ko, app, $) {
	var childRouter = router.createChildRouter()
		.makeRelative({
			moduleId: 'projects',
			fromParent: true
		}).map([
			//{ route: ['', 'intro'], 	moduleId: 'static',	title: 'Intro',			nav: true,	view: 'intro.html'			},
			//Project Children - this is done because Durandal doesn't yet support static views
			{ route: ['swc', ''],		moduleId: 'static',	title: 'ShiftWise Connect',	nav: true, 	view: 'swc.html',			type: 'pro' },
			{ route: 'esp',				moduleId: 'static',	title: 'ESP',				nav: true, 	view: 'esp.html',			type: 'pro' },
			{ route: 'nwmaico',			moduleId: 'static',	title: 'NW Maico & CZ',		nav: true, 	view: 'nwmaico.html',		type: 'pro' },
			{ route: 'affinity-web',	moduleId: 'static',	title: 'Affinity Web',		nav: true,	view: 'affinity-web.html',	type: 'pro' },
			{ route: 'affinity',		moduleId: 'static',	title: 'Affinity',			nav: true,	view: 'affinity.html',		type: 'pro' },

			//Personal Projects
			{ route: 'jstestlite',		moduleId: 'static',	title: 'JS Test Lite',		nav: true, 	view: 'jstestlite.html',	type: 'personal' },
			{ route: 'portfolio',		moduleId: 'static',	title: 'Portfolio',			nav: true,	view: 'portfolio.html',		type: 'personal' },
			{ route: 'durandal-grid',	moduleId: 'static',	title: 'Durandal Grid',		nav: true, 	view: 'durandal-grid.html',	type: 'personal' },
			{ route: 'sprintr',			moduleId: 'static',	title: 'Sprintr',			nav: true, 	view: 'sprintr.html',		type: 'personal' },
			{ route: 'chaos',			moduleId: 'static',	title: 'Chaos Crusade',		nav: true, 	view: 'chaos.html',			type: 'personal' },

			//Publications
			{ route: 'mastering-knockout',	moduleId: 'static',	title: 'Mastering KnockoutJS',	nav: true, 	view: 'masteringKnockout.html',	type: 'publication' }
		]).buildNavigationModel();

	var navCollapse = $('#navbar-collapse-group');

	//Scroll to the newly selected project
	childRouter.on('router:navigation:composition-complete')
		.then(function(instance, instruction) {

			//We don't want to scroll if we just got to this page
			//The link's created for SWC will actually get SWC and not the blank fragment
			//Since the links always use the first option
			//That way, if you click on an SWC link, it will scroll.
			if (instruction.fragment === '')
				return;

			var container = $('html,body'),
				scrollTo = $('#projectsContainer');

			//Not in mobile sized page
			if (container.width() > 767) {
				return;
			}

			container.animate({
				scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 50 //Nav offset
			});

		//Ensure the mobile nav menu gets closed during navigation (it doesn't do this itself)
		//I shouldn't have to double this up, but bootstrap's collapse module is finicky
		}).then(function() {
			if (navCollapse.hasClass('in'))
				navCollapse.collapse('hide');
	});

	return {
		router: childRouter,
		projectGroups:[
			{
				title: 'Personal Projects',
				projects: childRouter.navigationModel().filter(function(route) {
					return route.type === 'personal';
				})
			},{
				title: 'Professional Work',
				projects: childRouter.navigationModel().filter(function(route) {
					return route.type === 'pro';
				})
			}, {
				title: 'Publications',
				projects: childRouter.navigationModel().filter(function(route) {
					return route.type === 'publication';
				})
			}
		]
	};
});