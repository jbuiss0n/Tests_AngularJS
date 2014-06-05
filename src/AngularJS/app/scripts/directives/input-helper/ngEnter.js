(function () {
  'use strict';

  var inputHelper = angular.module('input-helper', []);

  inputHelper.directive('ngEnter', function () {

    return {
      link: function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
          if (event.which === 13) {
            scope.$apply(function () {
              scope.$eval(attrs.ngEnter);
            });
            event.preventDefault();
          }
        });
      }
    };
  });
}());