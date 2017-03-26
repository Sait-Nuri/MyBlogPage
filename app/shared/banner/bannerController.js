var app = angular.module('myApp');


app.controller('BannerController', ['$scope', 'styleService', function($scope, styleService){
    $scope.title= "Wellcome to My Security Blog";

    $scope.createBorder = styleService.createBorder;
    $scope.inner_banner_css = {'height':'100%'};
    $scope.navbar_css = {'height':'100%'};
}]);
