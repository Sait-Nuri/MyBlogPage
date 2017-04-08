var app = angular.module('appModule');

app.controller('MenuController', ['$scope', function($scope){

    $scope.menu_inside_css = {'background' : '#B3BAFF',
                              'height': '100%'
    };

    $scope.leftnavbar_css = {'height':'100%'}
}]);

