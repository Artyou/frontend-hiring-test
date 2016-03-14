(function() {
  'use strict';

  angular
    .module('artYou')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
