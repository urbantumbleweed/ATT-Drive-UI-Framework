'use strict';

describe('Directive: attTabs', function () {

  // load the directive's module
  beforeEach(module('connectedCarSdkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<att-tabs></att-tabs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the attTabs directive');
  }));
});
