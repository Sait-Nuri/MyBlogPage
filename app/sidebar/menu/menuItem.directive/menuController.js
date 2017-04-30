var app = angular.module('appModule');

app.controller('MenuController', ['$scope', function($scope){
    $scope.item1 = {subject: 'Security',
        isCollapsed: true,
        sublist:[{route:'main.app_sec', name:'Application Security'}
            ,{route:'main.web_sec', name:'Web Security'}
            ,{route:'main.net_sec', name:'Network Security'}]};
}]);

