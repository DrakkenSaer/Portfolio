(function() {
  'use strict';

  angular
    .module('services.resume', [])
    .factory('ResumeFactory', ['$resource', function($resource) {
      return $resource('/api/resume/:id', {id: '@id'}, {
        'update': { method:'PUT' },
      });
    }]);
})();