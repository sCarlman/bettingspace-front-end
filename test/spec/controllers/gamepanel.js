'use strict';

describe('Controller: GamepanelCtrl', function () {

  // load the controller's module
  beforeEach(module('banterFnApp'));

  var GamepanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamepanelCtrl = $controller('GamepanelCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GamepanelCtrl.awesomeThings.length).toBe(3);
  });
});
