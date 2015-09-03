describe('angular-centered', function() {
  'use strict';

  beforeEach(module('angular-centered'));

  var $compile;
  var $rootScope;

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {
    var element = $compile('<centered></centered>')($rootScope);
    $rootScope.$digest();
    var expectedOutput = '<div class="angular-center-container">  ';
    expectedOutput += '<div class="angular-centered" ng-transclude=""></div></div>';
    expect(element.html()).toContain(expectedOutput);
  });
});

