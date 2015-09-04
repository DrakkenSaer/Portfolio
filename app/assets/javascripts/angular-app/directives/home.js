(function() {
  'use strict';

  angular
    .module('directives.home', [])
    .directive('scrollOnClick', function() {
    return {
      restrict: 'A',
      link: function(scope, $elm) {
        $elm.on('click', function() {
          $("body").animate({scrollTop: $("#scroll-send").offset().top}, "slow");
        });
      }
    }
  });
})();