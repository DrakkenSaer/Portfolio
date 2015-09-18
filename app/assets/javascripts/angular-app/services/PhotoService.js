(function() {
  'use strict';

  angular
    .module('services.photos', [])
    .factory('PhotoFactory', ['$resource', function($resource) {
      return $resource('/api/photos/:id', {id: '@id'}, {
        'update': { method:'PUT' },
      });
    }]);
})();