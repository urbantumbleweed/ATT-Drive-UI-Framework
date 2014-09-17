'use strict';

describe('Directive: attmediaplayer', function () {

  // load the directive's module
  beforeEach(module('connectedCarSdkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<attmediaplayer></attmediaplayer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the attmediaplayer directive');
  }));
});
