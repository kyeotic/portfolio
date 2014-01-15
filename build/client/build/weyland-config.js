exports.config = function(weyland) {
    weyland.build('main')
        .task.jshint({
            include:'app/**/*.js'
        })
        .task.uglifyjs({
            include:['app/**/*.js', 'lib/durandal/**/*.js']
        })
        .task.rjs({
            include:['app/**/*.{js,html}', 'lib/durandal/**/*.js'],
            loaderPluginExtensionMaps:{
                '.html':'text'
            },
            rjs:{
                name:'../lib/require/almond-custom', //to deploy with require.js, use the build's name here instead
                insertRequire:['main'], //not needed for require
                baseUrl : 'app',
                mainConfigFile:'app/main.js', //not needed for require
                wrap:true, //not needed for require
                paths : {
                    'text': '../lib/require/text',
                    'durandal':'../lib/durandal/js',
                    'plugins' : '../lib/durandal/js/plugins',
                    'transitions' : '../lib/durandal/js/transitions',
                    'knockout': '../lib/knockout-2.3.0',
                    'bootstrap': '../lib/bootstrap.min',
                    'magnific': '../lib/magnific-popup',
                    'jquery': '../lib/jquery-1.9.1',
                    'Q' : '../lib/q.min'
                },
                inlineText: true,
                optimize : 'uglify',
                pragmas: {
                    build: true
                },
                stubModules : ['text'],
                keepBuildDir: false,
                out:'app/main-built.js'
            }
        });
}