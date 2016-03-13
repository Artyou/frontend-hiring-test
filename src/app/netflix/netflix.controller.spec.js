(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('artYou'));
    beforeEach(inject(function(_$controller_, _netflixService_) {
      spyOn(_netflixService_, 'then').and.callThrough();

    }));

    it('should make search in api, and set value in view', function() {
      vm.searchNetflix();
      expect(vm.ResultSearch).toEqual('');
    });

  });
})();
