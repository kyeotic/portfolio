define(['durandal/app', 'plugins/router', 'projects/index', 'Q'], function (app, router, page, Q) {
	describe('projects module', function () {
		var async = new AsyncSpec(this);

		var navigateToEachPageAndExecute = function(action) {
			var routes = page.router.navigationModel(),
				navPromise = Q();

			var chainTest = function(route) {
				var defer = Q.defer();

				var sub = page.router.on('router:navigation:composition-complete', function(instance) {
					console.log('route');
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
					console.log(route)
					navPromise = navPromise.then(function() {
						return chainTest(route);
					});
				})(routes[i].hash);
			}

			navPromise = navPromise.fail(function(error) {
				console.log(error)
			});

			return navPromise;
		};

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
		async.it('should be able to navigate to each project', function(done) {
			var handler = function(view) {
				console.log('handler');
				expect(view).toBeDefined();
			};
			navigateToEachPageAndExecute(handler).then(function() {
				console.log('chain done');
				done();
			}).done();
		});
	});
});