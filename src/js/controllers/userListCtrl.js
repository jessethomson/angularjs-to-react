import angular from 'angular';

function userListCtrl($scope, userService) {
    userService.getUsers().then(function(response) {
        $scope.users = response.data.results;
    });
}

angular.module('myApp').controller('userListCtrl', ['$scope', 'userService', userListCtrl]);
