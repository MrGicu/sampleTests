var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
var path = require('path')

var prettyReporter = new PrettyReporter({
    path: path.join(__dirname, 'results'),
    screenshotOnPassed: false
});

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    },
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(prettyReporter);
    },
    beforeLaunch() {
        prettyReporter.startReporter();
    }
};