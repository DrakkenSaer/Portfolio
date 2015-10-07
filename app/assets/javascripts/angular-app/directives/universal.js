(function() {
  'use strict';

  angular
    .module('directives.universal', [])
    .directive('updateTitle', [
    '$rootScope', '$timeout', 
    function($rootScope, $timeout) {
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
    }])
    .directive('updateContainer', [
    '$rootScope', '$timeout', 
    function($rootScope, $timeout) {
      return {
        link: function(scope, element, attr) {
          var listener = function(event, toState) {
            var container = 'container';
            if (toState.container) container = toState.container;
            element.attr("class", container);
          };
          $rootScope.$on('$stateChangeSuccess', listener);
        }
      };
    }])
    .directive('ngConfirmClick', [
    function(){
      return {
        link: function (scope, element, attr) {
          var msg = attr.ngConfirmClick || "Are you sure?";
          var clickAction = attr.confirmedClick;
          element.bind('click',function (event) {
            if ( window.confirm(msg) ) {
              scope.$eval(clickAction)
            }
          });
        }
      };
    }])
    .directive('fancybox',function(){
    return {
      link: function(scope, element, attrs) {
        $('.fancybox').fancybox();
      }
    }
  });
})();