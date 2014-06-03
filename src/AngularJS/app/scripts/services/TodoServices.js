(function () {
  'use strict';

  var myTodoList = angular.module('myTodoList');

  myTodoList.factory('TodoService', ['$resource', function ($resource) {
    return $resource('http://localhost:55643/api/todo/:id', null, { 'update': { method: 'PUT' } });
  }]);
}());