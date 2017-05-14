var app = angular.module('appModule');

app.controller('MenuController', ['$scope', 'menustate', function($scope, menustate){
    var menu_items = menustate.getStates();
    var scope_items = [];

    for (var i = 0; i < menu_items.length; i++) {
        var each_menu = menu_items[i];

        var itemObj = {
            subject: each_menu.subject,
            isCollapsed: true,
            sublist: each_menu.states
        };

        scope_items.push(itemObj);
    }

    $scope.menu_items = scope_items;
    console.log(menustate.getStates());
}]);

