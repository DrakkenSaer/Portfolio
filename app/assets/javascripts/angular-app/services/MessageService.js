app.factory('MessageFactory', ['$resource', function($resource) {
  return $resource('/api/messages/:id', {id: '@id'});
}]);