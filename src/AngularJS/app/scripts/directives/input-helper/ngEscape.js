(function () {
  'use strict';

  var inputHelper = angular.module('input-helpers', []);

  inputHelper.directive('ngEscape', function () {

    return {
      link: function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
          if (event.which === 27) {
            scope.$apply(function () {
              scope.$eval(attrs.ngEscape);
            });
            event.preventDefault();
          }
        });
      }
    };
  });
}());