(function() {
  'use strict';

  angular
    .module('controllers.messages', [])
    .controller('MessagesCtrl',[
    '$scope', 'messages', 'MessageFactory', 'flash',
    function($scope, messages, MessageFactory, flash) {
      $scope.messages = messages;
      $scope.messages.created_at = new Date();
    }
  ])
    .controller('MessageCtrl',[
    '$scope', '$state', 'message', 'MessageFactory', 'flash',
    function($scope, $state, message, MessageFactory, flash) {
      $scope.message = message[0];

      $scope.delete = function(message){
        var Message = new MessageFactory(message);
        Message.$delete(function(success) {
          $state.go('^', {messages: $scope.messages.splice(message, 1)});
          flash('Message deleted successfully!');
        });
      }
    }
  ])
    .controller('NewMessageCtrl',[
    '$scope', 'MessageFactory', 'flash',
    function($scope, MessageFactory, flash) {
      $scope.save = function(message) {
        var Message = new MessageFactory(message);
        Message.$save(function(success) {
          $scope.message = success;
          $scope.errors = null;
          flash('Message sent successfully!');
          console.log('Message sent successfully!');
        }, function(error) {
          $scope.errors = error.data;
        });
      }
    }
  ]);
})();