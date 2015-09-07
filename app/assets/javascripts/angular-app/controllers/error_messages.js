(function() {
  'use strict';

  angular
    .module('controllers.error_messages', [])
    .controller('ErrorsCtrl', ['$scope', function($scope) {    
      $scope.keys = [];
      for(var k in $scope.errors) $scope.keys.push(k);
    }]);
})();