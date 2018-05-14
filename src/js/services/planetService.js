import angular from 'angular';

function planetService($http) {
    var url = 'https://swapi.co/api/planets/';
    function getPlanet(planetId) {
        return $http.get(url + planetId);
    }
    function getPlanets() {
        return $http.get(url);
    }
    return {
        getPlanet: getPlanet,
        getPlanets: getPlanets,
    };
}

angular.module('myApp').factory('planetService', ['$http', planetService]);