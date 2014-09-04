'use strict';

describe('Directive: attheader', function () {

  // load the directive's module
  beforeEach(module('connectedCarSdkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<attheader></attheader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the attheader directive');
  }));
});
