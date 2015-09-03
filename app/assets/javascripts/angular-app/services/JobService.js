app.factory('JobFactory', ['$resource', function($resource) {
  return $resource('/api/jobs/:id', {id: '@id'}, {
    'update': { method:'PUT' },
  });
}]);