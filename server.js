var fs = require('fs'),
    port = process.env.PORT || 9000,
    clientDir = __dirname + '/client/',
    express = require('express'),
    app = express();

//Configure
app.use(express.static(clientDir));

//Index Route
app.get('/*', function(req, res){
    res.sendFile(clientDir + '/index.html');
});

//Start Listening
app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);
