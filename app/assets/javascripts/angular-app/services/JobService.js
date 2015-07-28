app.factory('Job', ['$resource', function($resource) {
  return $resource('/api/jobs/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);