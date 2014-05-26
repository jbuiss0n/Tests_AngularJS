'use strict';

angular.module('angularJsApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.items = [
		{ desc: 'Task 1', done: true },
		{ desc: 'Task 2' },
		{ desc: 'Task 3' },
	];
  });
