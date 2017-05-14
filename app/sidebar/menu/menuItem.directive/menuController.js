var app = angular.module('appModule');

app.controller('MenuController', ['$scope', 'menustate', function($scope, menustate){
    var menuObj = menustate.getStates();

    $scope.item1 = {subject: menuObj.subject,
        isCollapsed: true,
        sublist: menuObj.states
    };

    console.log(menustate.getStates());
}]);

