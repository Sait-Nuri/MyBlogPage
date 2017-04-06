var app = angular.module('myApp');

app.controller('MenuController', ['$scope', 'styleService', function($scope, styleService){

    $scope.createBorder = styleService.createBorder;

    $scope.menu_inside_css = {'background' : '#B3BAFF',
                              'height': '100%'
    };

    $scope.leftnavbar_css = {'height':'100%'}

    $scope.isCollapsed = false;

    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
}]);

