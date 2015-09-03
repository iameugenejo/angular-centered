module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'angular-centered.js',
      'test/unit/**/*.js'
    ],
    browsers: ['PhantomJS'],
    frameworks: [
      'jasmine'
    ],
    reporters: ['progress', 'coverage', 'notify'],
    preprocessors: {
      'public/app/**/*.js': ['coverage'],
      'public/components/**/*.js': ['coverage']
    },
    plugins: [
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-notify-reporter'
    ],
    notifyReporter: {
      reportEachFailure: true,
      reportSuccess: false
    },
    coverageReporter: {
      reporters: [{
        type: 'html',
        subdir: 'report-html'
      }, {
        type: 'lcov',
        subdir: 'report-lcov'
      },
      {
        type: 'text-summary',
        subdir: 'report-summary',
        file: 'text-summary.txt'
      }]
    }
  });
};

