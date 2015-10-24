(function() {
  'use strict';

  angular
    .module('controllers.footer', [])
    .controller('FooterCtrl',[
    '$scope', 'resume',
    function($scope, resume) {
      $scope.resume = resume;
    }]);
})();