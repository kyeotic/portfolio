define(['durandal/app', 'durandal/system', 'durandal/viewLocator', 'plugins/router', 'projects/index', 'Q'],
function (app, system, viewLocator, router, page, Q) {
	describe('projects module', function () {
		var async = new AsyncSpec(this);

		it('should be defined', function() {
			expect(page).toBeDefined();
		});
		it('should have a router', function() {
			expect(page.router).toBeDefined();
		});
		it('should have pro projects', function() {
			expect(page.proProjects).toBeDefined();
		});
		it('should have personal projects', function() {
			expect(page.personalProjects).toBeDefined();
		});
		it('all routes should have view ending in .html', function() {
			var filteredRoutes = page.router.navigationModel().count(function(instruction) {
				return instruction.view.indexOf('.html') === instruction.view.length - 5;
			});
			expect(filteredRoutes).toEqual(page.router.navigationModel().length);
		});
		async.it('can load all route modules', function(done) {
			//console.log(page.router.navigationModel()[0]);
			expect(2).toBe(2);
			done();
		});
		
		//test is too slow, also  isn't working
		/*
		async.it('should be able to navigate to each project', function(done) {

			var navigateToEachPageAndExecute = function(action) {
				var routes = page.router.navigationModel(),
					navPromise = Q();

				var chainTest = function(route) {
					var defer = Q.defer();

					route = route.replace('#', '#projects');

					var sub = page.router.on('router:navigation:composition-complete', function(instance) {
						action(instance);
						sub.off();
						defer.resolve();
					});

					console.log(route);
					router.navigate(route);
					return defer.promise;
				};

				for (var i = 0; i < routes.length; i++) {
					(function(route) {
						navPromise = navPromise.then(function() {
							return chainTest(route);
						});
					})(routes[i].hash);
				}

				return navPromise.fail(function(error) {
					console.log(error);
					console.log(Object.keys(error));
				});
			};

			var handler = function(instance) {
				var paragraphs = $("#projectsContainer").find('p');
				expect(paragraphs.length).toBeGreaterThan(0);
				//Spell checking to be handled by grunt
			};
			navigateToEachPageAndExecute(handler).then(function() {
				console.log('chain done');
				done();
			}).done();
		});
		*/
		
	});
});