import angular from 'angular';

function userService($http) {
    var url = 'https://swapi.co/api/people/';
    this.getUser = function(userId) {
        return $http.get(url + userId);
    }
    this.getUsers = function() {
        return $http.get(url);
    }
};

angular.module('myApp').service('userService', ['$http', userService]);