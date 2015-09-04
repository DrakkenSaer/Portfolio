(function() {
  'use strict';

  angular
    .module('directives.header', [])
    .directive('updateTitle', ['$rootScope', '$timeout', function($rootScope, $timeout) {
      return {
        link: function(scope, element) {
          var listener = function(event, toState) {
            var title = 'Saer Designs';
            if (toState.title) title = toState.title;
            $timeout(function() {
              element.text('Saer Designs | ' + title);
            }, 0, false);
          };
          $rootScope.$on('$stateChangeSuccess', listener);
        }
      };
    }]);
})();