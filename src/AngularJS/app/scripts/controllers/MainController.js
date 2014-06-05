(function () {
  'use strict';

  angular.module('myTodoList').controller('MainController', ['$scope', 'TodoService', 'DateHelper', function ($scope, TodoService, DateHelper) {

    var initModel = function () {
      $scope.model = { Description: '', Duedate: '', Priority: '', Done: false };
    };

    $scope.today = DateHelper.getTodayISO();

    $scope.add = function () {
      TodoService.save($scope.model, function (task) {
        $scope.items.push(task);
        initModel();
      });
    };

    $scope.reset = function (field) {
      if ($scope.model[field])
        $scope.model[field] = '';
    };

    $scope.delete = function (item) {
      if (!item.Done) {
        return;
      }

      var index = $scope.items.indexOf(item);
      TodoService.delete({ id: item.Id }, function () {
        $scope.items.splice(index, 1);
      });
    };

    $scope.check = function (item) {
      TodoService.update({ id: item.Id }, { Description: item.Description, Done: true }, function (result) {
        item.Done = result.Done;
      });
    };

    TodoService.query(function (items) {
      $scope.items = items;
    });

    initModel();
  }]);
}());