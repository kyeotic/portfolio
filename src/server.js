var fs = require('fs'),
    port = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    index = app.settings.env === 'production' ? 'index.prod.html' : 'index.dev.html';

//Add new relic monitor
require('newrelic');

//Configure
app.configure(function() {
    app.use(express.compress());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express['static'](__dirname + '/client/'));
    app.use(app.router); 
});

//Support PushState by sending everything to Durandal
app.get('/*', function(req, res){
    res.sendfile(__dirname + '/client/app/' + index);
});

//Start Listening
app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);