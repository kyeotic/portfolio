require.config({
    paths: {
        'text': '/lib/require/text',
        'durandal':'/lib/durandal/js',
        'plugins' : '/lib/durandal/js/plugins',
        'transitions' : '/lib/durandal/js/transitions',
        'knockout': '/lib/knockout-2.3.0',
        'bootstrap': '/lib/bootstrap.min',
        'magnific': '/lib/magnific-popup',
        'jquery': '/lib/jquery-1.9.1',
        'Q' : '/lib/q.min',
    },
    shim: {
        'bootstrap': {
          deps: ['jquery'],
          exports: "$.fn.popover"
        },
        'magnific': {
            deps: ['jquery'],
            exports: '$.magnificPopup'
        }
    },
    enforceDefine: true,
    waitSeconds: 30
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'],
function(system, app, viewLocator) {

    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");  

    //specify which plugins to install and their configuration
    app.configurePlugins({

        //Durandal plugins
        router:true,
        dialog: true,

        //App plugins
        envPatch: true,
        knockoutExtensions: true,
        knockoutCommands: true,
        knockoutActivity: true,
        qPatch: { debugMode: false }
    });

    app.title = 'Tyrsius';
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        //viewLocator.useConvention();
        
        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('shell/shell');
    });
});