var app = angular.module('myApp');

app.controller('MenuController', ['$scope', 'styleService', function($scope, styleService){

    $scope.createBorder = styleService.createBorder;

    $scope.menu_inside_css = {'background' : '#F2F8FA',
                              'height': '100%',
                              'padding-top':'10px',
                              'padding-bottom':'10px',
                              'padding-left':'5px',
                              'padding-right':'5px'
    };

    $scope.leftnavbar_css = {'height':'100%'}
}]);

