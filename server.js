var port = process.env.PORT || 9000,
    ip = process.env.IP || "0.0.0.0",
    isProduction = process.env.NODE_ENV == 'production',
    clientDir = __dirname + (isProduction ? '/dist/' : '/src/'),
    assetDir = __dirname + '/assets',
    express = require('express'),
    app = express();

//Configure
app.use('/assets', express.static(assetDir));
app.use(express.static(clientDir));

//Index Route
app.get('/*', function(req, res){
    res.sendFile(__dirname + (isProduction ? '/index-built.html' : '/index.html'));
});

//Start Listening
app.listen(port, ip);
console.log('Express server listening on port %d in %s mode', port, app.settings.env);
