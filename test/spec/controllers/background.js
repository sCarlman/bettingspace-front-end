'use strict';

describe('Controller: BackgroundCtrl', function () {

  // load the controller's module
  beforeEach(module('bettingSpaceApp'));

  var BackgroundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BackgroundCtrl = $controller('BackgroundCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BackgroundCtrl.awesomeThings.length).toBe(3);
  });
});
