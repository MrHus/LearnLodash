'use strict';

module.exports = function(config) {
  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '.',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/lodash/lodash.js',
      'course/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9002,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-babel-preprocessor',
      'karma-sourcemap-loader',
      'karma-spec-reporter'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // coverage reporter generates the coverage
    reporters: ['spec'],

    preprocessors: {
      'course/**/*.js': ['babel', 'sourcemap'],
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: "inline",
      }
    },

    // The configure the reporter that is ran in the terminal.
    specReporter: {
      suppressErrorSummary: true,  // do not print error summary
      suppressPassed: true, // do not print successful specs
      showSpecTiming: true // print the time elapsed for each spec
    }
  });
};
