'use strict';

angular.module('myTodoList')
  .controller('MainController', ['$scope', 'TodoService', function ($scope, TodoService) {

  	var loadTodo = function () {
  		TodoService.query(function (items) {
  			$scope.items = items;
  		});
  	};

  	$scope.add = function () {
  		TodoService.save({ Description: $scope.Description }, function () {
  			$scope.Description = '';
  			loadTodo();
  		});
  	};

  	$scope.delete = function (item) {
  		TodoService.delete(item, loadTodo);
  	};

  	$scope.check = function (item) {
  		item.Done = true;
  		TodoService.update({ id: item.Id }, item, loadTodo);
  	};

  	loadTodo();
  }]);
