'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('unitTestCssApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


  var element;

  it('should attach a list of awesomeThings to the scope', function () {
    console.log("in test show attach list of awesomeThings");

    expect(MainCtrl.awesomeThings.length).toBe(3);
  });


  it('find the dimensions of the displayed button', function () {

    element = angular.element('btn-lg');
    console.log(element.css('color'));
    expect(element.getAttribute('color')).toMatch( "green");
  });

  var hasClass = function (element, cls) {
      return element.getAttribute('class').then(function (classes) {
          return classes.split(' ').indexOf(cls) !== -1;
      });
  };

});
