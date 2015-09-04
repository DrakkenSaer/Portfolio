(function() {
  'use strict';

  angular
    .module('services.jobs', [])
    .factory('JobFactory', ['$resource', function($resource) {
      return $resource('/api/jobs/:id', {id: '@id'}, {
        'update': { method:'PUT' },
      });
    }]);
})();