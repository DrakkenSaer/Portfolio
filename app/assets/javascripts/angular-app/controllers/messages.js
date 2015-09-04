(function() {
  'use strict';

  //http://dillonbuchanan.com/programming/ruby-on-rails-angularjs-resources/

  angular
    .module('controllers.messages', [])
    .controller('MessagesCtrl',[
    '$scope', '$state', 'MessageFactory',
    function($scope, $state, MessageFactory) {    

    }
  ]);

  angular
    .module('controllers.messages', [])
    .controller('NewMessageCtrl',[
    '$scope', 'MessageFactory', 'flash',
    function($scope, MessageFactory, flash) {
      $scope.save = function(message) {
        var Message = new MessageFactory(message);
        Message.$save(function(response) {
          $scope.message = response;
          $scope.errors = null;
          flash('Message sent successfully!');
          console.log('Message sent successfully!');
        }, function(response) {
          $scope.errors = response.data;
        });
      }
    }
  ]);
})();