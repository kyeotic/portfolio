define(['durandal/system', 'durandal/app', 'knockout', 'bootstrap', 'magnific'],
function (system, app, ko) {
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
    app.start().then(function () {
        runTests(window.specFiles);
    });
});