(function() {
  'use strict';

  angular
    .module('artYou')
    .factory('netflixService', netflixService);

  /** @ngInject */
  function netflixService($http, $log) {

    var API = 'https://netflixroulette.net/api/api.php?';
    $log.debug(API);

    return {

      getApi: function(inputValue, inputValue2) {
        return $http({
          url:API + inputValue + '=' + inputValue2,
          method:'GET'
        })
      }
    };
  }
})();











