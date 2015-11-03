(function() {
  'use strict';

  angular.module('app.filters', [])
    .filter('semicolonFilter', function() {
    return function(input) {
      return input.replace(/;/g, '<br>');
    };
  });
})();