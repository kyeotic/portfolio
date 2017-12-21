# JS Test Lite

[JSTestLite](http://tyrsius.github.io/jsTestLite/) is a little tool I made after a frustrating day spent trying to work out some complex logic on a new project. Sometimes you just need to write some quick tests, without the grunt work of setting up your whole project.

JsTestLite is basically [jsFiddle](http://jsfiddle.net/) for [Jasmine](http://pivotal.github.io/jasmine/) unit tests. Write some code, write some tests, check the results. The tests are re-run on keyup in either field (with a debounce of 500ms for performance), and hosted inside of a freshly created iframe to ensure each environment is fresh and unpolluted by previous runs. The input fields use Ace Editor, and a few buttons let you easily resize everything. If you are using a supporting browser, your code is automatically kept in localStorage for you.

It's a small tool, but it was fun to make. Sometimes the smallest tools are the most useful.