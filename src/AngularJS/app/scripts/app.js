(function () {
  'use strict';

  angular
    .module('myTodoList', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute'
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