(function() {
  'use strict';

  angular
    .module('services.resume', [])
    .factory('ResumeFactory', ['$resource', function($resource) {
      return $resource('/api/resume', null, {
        'update': { method:'PUT' },
      });
    }]);
})();