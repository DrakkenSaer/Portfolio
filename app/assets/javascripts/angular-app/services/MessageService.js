(function() {
  'use strict';

  angular
    .module('services.messages', [])
    .factory('MessageFactory', ['$resource', function($resource) {
      return $resource('/api/messages/:id', {id: '@id'});
    }]);
})();