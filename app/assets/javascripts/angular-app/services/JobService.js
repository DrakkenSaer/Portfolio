app.factory('JobFactory', ['$resource', function($resource) {
  return $resource('/api/jobs/:id', {id: '@id'}, {
    'update': { method:'PUT' },
  });
}]);

app.factory('JobsFactory', ['$resource', function($resource) {
  return $resource('/api/jobs', null, {
    
  });
}]);