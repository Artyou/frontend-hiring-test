(function() {
  'use strict';

  angular
    .module('artYou')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('netflix', {
        url: '/netflix',
        templateUrl: 'app/netflix/netflix.html',
        controller: 'NetflixController',
        controllerAs: 'netflix'
      });

    $urlRouterProvider.otherwise('/netflix');
  }

})();
