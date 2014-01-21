//Safety Net, exit after two seconds
setTimeout(function () {
    phantom.exit();
}, 20000);

/*global phantom, require, runTests*/
var fs = require('fs'),
    Q = require('./lib/q'),
    page = require('webpage').create(),
    specFiles;

specFiles = fs.list('specs/')
    .filter(function (item) {
        return item.indexOf('.js') !== -1;
    })
    .map(function (item) {
        return 'tests/' + item.substring(0, item.length - 3);
    });

//console.log('\nRunning spec files:' + specFiles.map(function (s) { return '\n' + s; }));

var runSpecs = { run: 0, failed: 0 };
var checkForResults = function (message) {
    if (message.indexOf('Specs:') !== -1) {
        runSpecs.run += parseInt(message.replace('Specs: ', ''), 10);
    } else if (message.indexOf('Specs Failed:') !== -1) {
        runSpecs.failed += parseInt(message.replace('Specs Failed: ', ''), 10);
    } else {
        return false;
    }
    return true;
};

var test = Q();

var chainTest = function (promise, test) {
    return promise.then(function () {
        var defer = Q.defer();

        page.onConsoleMessage = function (msg) {
            if (msg === "ConsoleReporter finished") {
                defer.resolve();
                return;
            }
            if (!checkForResults(msg))
                console.log(msg);
        };
        
        page.onLoadFinished = function () {
            page.evaluate(function (test) {
                window.specFiles = [test];
                require(['testLib/durandalHarness']);
            }, test);
        };

        page.open('lib/spec.html');

        return defer.promise;
    });
};

for (var i = 0; i < specFiles.length; i++) {
    test = chainTest(test, specFiles[i]);
}

test.then(function () {
    console.log("");
    console.log("Finished");
    console.log("-----------------");
    console.log('Specs: ' + runSpecs.run + ', Failed: ' + runSpecs.failed);
}).then(function() {
    phantom.exit(runSpecs.failed == 0 ? 0 : 1);
}).fail(function(error) {
    console.log('An error occured', error);
    phantom.exit(runSpecs.failed == 0 ? 0 : 1);
}).done();