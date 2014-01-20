define(['durandal/app', 'plugins/router', 'shell/shell'], function (app, router, shell) {
	describe('shell', function () {
		var async = new AsyncSpec(this);

		it('expects to be loaded', function() {
			expect(shell).toBeDefined();
			//expect(1).toEqual(2);
		});

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