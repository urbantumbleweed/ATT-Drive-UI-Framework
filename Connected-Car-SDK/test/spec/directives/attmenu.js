'use strict';

describe('Directive: attmenu', function () {

  // load the directive's module
  beforeEach(module('connectedCarSdkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<attmenu></attmenu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the attmenu directive');
  }));
});
