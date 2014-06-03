'use strict';

describe('the MainController', function () {

  beforeEach(module('myTodoList'));

  var MainController,
    scope,
    httpBackend,
    apiUrl = 'http://localhost:55643/api/todo';

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    httpBackend = _$httpBackend_;
    httpBackend.expectGET(apiUrl)
      .respond([{ Id: 1, Description: 'Task 1', Done: true }, { Id: 2, Description: 'Task 2', Done: false }]);

    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
    httpBackend.flush();
  }));

  it('should load tasks from service', function () {
    expect(scope.items.length).toEqual(2);
  });

  it('should save a new task on add', function () {
    httpBackend.expectPOST(apiUrl)
      .respond({ Id: 3, Description: 'Task 3', Done: false });

    scope.Description = 'task 3';
    scope.add();
    httpBackend.flush();

    expect(scope.items.length).toEqual(3);
    expect(scope.Description).toEqual('');
  });

  it('should remove a completed task on delete', function () {
    httpBackend.expectDELETE(apiUrl + '/1').respond({});

    scope.delete(scope.items[0]);
    httpBackend.flush();

    expect(scope.items.length).toEqual(1);
  });

  it('should not remove a task on delete if it is not complete', function () {
    scope.delete(scope.items[1]);
    expect(scope.items.length).toEqual(2);
  });

  it('should update a task to complete on check', function () {
    httpBackend.expectPUT(apiUrl + '/2')
      .respond({ Id: 2, Description: 'Task 2', Done: true });

    scope.check(scope.items[1]);
    expect(scope.items[1].Done).toEqual(false);

    httpBackend.flush();
    expect(scope.items[1].Done).toEqual(true);
  });
});
