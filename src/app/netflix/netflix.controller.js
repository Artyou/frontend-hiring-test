(function() {
  'use strict';

  angular
    .module('artYou')
    .controller('NetflixController', NetflixController);


  /** @ngInject */
  function NetflixController(netflixService) {

    var vm = this;

    vm.types = [
      {
        valueShow: 'Select a option'
      },
      {
        valueSend: 'title',
        valueShow: 'Some Movie or Series'
      },
      {
        valueSend: 'director',
        valueShow: 'Some Director'
      },
      {
        valueSend: 'actor',
        valueShow: 'Some Actor or Actress'
      }
    ];

    vm.searchNetflix = function() {
      netflixService.getApi(vm.searchResult, vm.searchResult2)
      .then(function(result) {
        vm.ResultSearch = result.data;
        delete vm.ResultSearchError;
      }, function(errorResult) {
        vm.ResultSearchError = 'Search No found, Try again :)';
        delete vm.ResultSearch;
      });
    };

  }
})();
