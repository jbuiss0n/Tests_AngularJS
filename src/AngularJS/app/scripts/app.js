(function () {
  'use strict';

  angular
    .module('myTodoList', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'helpers',
      'input-helpers'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
}());