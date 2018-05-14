import angular from 'angular';

function planetListCtrl($scope, planetService) {
    planetService.getPlanets().then(function(response) {
        $scope.planets = response.data.results;
    });
}

angular.module('myApp').controller('planetListCtrl', ['$scope', 'planetService', planetListCtrl]);
