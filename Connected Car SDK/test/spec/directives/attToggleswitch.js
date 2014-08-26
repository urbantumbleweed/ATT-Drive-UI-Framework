'use strict';

describe('Directive: attToggleSwitch', function () {

  // load the directive's module
  beforeEach(module('connectedCarSdk'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div att-toggle-switch></div>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the toggleSwitch directive');
  }));
});
