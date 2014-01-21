define(['durandal/system', 'durandal/app', 'knockout', 'shell/shell', 'bootstrap', 'magnific'],
function (system, app, ko, shell) {
    app.configurePlugins({
        //Durandal plugins
        router: true,
        dialog: true,
        //App plugins
        knockoutExtensions: true,
        knockoutCommands: true,
        knockoutActivity: true,
        qPatch: true,
        envPatch: true
    });
    //Unfortunately phantom does not work with pushState
    app.config = {
        pushState: false
    };    
    app.start().then(function () {

        //Run the tests after bootstraping the app
        var shellActivate = shell.activate;
        shell.activate = function() {
            return shellActivate().then(function() {
                runTests(window.specFiles);
            });
        };

        app.setRoot('shell/shell');
    });
});