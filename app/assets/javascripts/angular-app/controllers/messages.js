//http://dillonbuchanan.com/programming/ruby-on-rails-angularjs-resources/

app.controller('MessagesCtrl',[
  '$scope', '$state', 'MessageFactory',
  function($scope, $state, MessageFactory) {    

  }
]);

app.controller('NewMessageCtrl',[
  '$scope', '$state', 'MessageFactory', 'flash',
  function($scope, $state, MessageFactory, flash) {
    $scope.save = function(message) {
      var Message = new MessageFactory(message);
      Message.$save(function() {
        flash('Message sent successfully!');
        console.log('Message sent successfully!');
      }, function(response) {
        $scope.errors = response.data;
      });
    }
  }
]);