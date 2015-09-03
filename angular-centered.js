(function() {
  'use strict';

  angular.module('angular-centered', [])
    .directive('centered', centered);

  function centered() {
    return {
      restrict : 'E',
      transclude : true,
      template : [
        '<div class="angular-center-container">',
        '  <div class="angular-centered" ng-transclude></div>',
        '</div>'
      ].join('')
    };
  }

})();
