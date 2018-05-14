import angular from 'angular';
import planetListTemplate from '../../templates/planetList.html';

function planetList() {
    return {
        restrict : 'EA',
        template: planetListTemplate,
        controller: 'planetListCtrl',
        scope: {
            title: '@',
        },
    };
}

angular.module('myApp').directive('planetList', planetList);
