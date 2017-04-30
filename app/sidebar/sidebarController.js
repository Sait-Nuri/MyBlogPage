var app = angular.module('appModule');

app.controller('SidebarController', ['$scope', function($scope){
    $scope.item1 = {subject: 'Security',
                    isCollapsed: true,
                    sublist:[{route:'app_sec', name:'Application Security'}
                        ,{route:'web_sec', name:'Web Security'}
                        ,{route:'net_sec', name:'Network Security'}]};

}]);

