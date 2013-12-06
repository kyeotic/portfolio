define(['plugins/router', 'knockout', 'durandal/app'], 
function (router, ko, app) {  
    return {
        title: app.title,
        router: router,
        activate: function() {

            router.map([
                { route: '',        moduleId: 'home/index',     title: 'Home',      nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});