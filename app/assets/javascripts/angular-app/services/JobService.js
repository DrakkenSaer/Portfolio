app.factory('JobUpdate', ['$resource', function($resource) {
  return $resource('/api/jobs/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);