import angular from 'angular';
import userListTemplate from '../../templates/userList.html';

function userList() {
    return {
        restrict : 'EA',
        template: userListTemplate,
        controller: 'userListCtrl',
        scope: {
            title: '@',
        },
    };
}

angular.module('myApp').directive('userList', userList);
