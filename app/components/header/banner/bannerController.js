var app = angular.module('appModule');


app.controller('BannerController', ['$scope', function($scope){
    $scope.title= "Wellcome to My Security Blog";

    $scope.navbar_css = {'height':'100%'};


}]);
