(function() {
  'use strict';

  angular
    .module('services.projects', [])
    .factory('ProjectFactory', ['$resource', function($resource) {
      return $resource('/api/projects/:id', {id: '@id'}, {
        'update': { method:'PUT' },
      });
    }]);
})();