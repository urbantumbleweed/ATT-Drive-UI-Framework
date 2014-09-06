'use strict';

describe('Directive: attbadge', function () {

  // load the directive's module
  beforeEach(module('connectedCarSdkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<attbadge></attbadge>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the attbadge directive');
  }));
});
