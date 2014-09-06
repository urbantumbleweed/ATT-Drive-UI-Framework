'use strict';

describe('Directive: attcarousel', function () {

  // load the directive's module
    beforeEach(module('connectedCarSDK'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<attcarousel></attcarousel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the attcarousel directive');
  }));
});
