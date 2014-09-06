'use strict';

describe('Directive: attTabset', function () {

  // load the directive's module
    beforeEach(module('connectedCarSDK'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<att-tabset></att-tabset>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the attTabset directive');
  }));
});
