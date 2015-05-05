define(['durandal/app', 'plugins/router', 'shell/shell'], function (app, router, shell) {
	describe('shell', function () {
		var async = new AsyncSpec(this);

		it('should be loaded', function() {
			expect(shell).toBeDefined();
		});
		it('should have a router', function() {
			expect(shell.router).toBeDefined();
		});		
		it('should have an activated router', function() {
			expect(shell.router.navigationModel).toBeDefined();
		});
		it('should have 2 nav routes', function() {
			expect(shell.router.navigationModel().length).toEqual(2);
		});

		//These are different advanced test examples

		/*
		beforeEach(function () {
            spyOn(loginService, 'login').andCallFake(function () { return Q({}); });
            spyOn(router, 'activeInstruction').andReturn({ params: [{ destination: 'test' }] });
            spyOn(router, 'navigate');
        });
		async.it('signIn calls loginService.login() with username and password', function (done) {
            sut.username('guy');
            sut.password('something');
            sut.signIn().then(function () {
                expect(loginService.login).toHaveBeenCalledWith('guy', 'something');
                done();
            });
        });
        async.it('isLoggedIn when cookie returns valid login token', function(done) {
            spyOn(cookie, 'get').andReturn({ sig: 1 });
            
            require(['services/login'], function (sut) {

                expect(sut.isLoggedIn()).toBe(true);
                done();
            });
        });
		*/
	});
});