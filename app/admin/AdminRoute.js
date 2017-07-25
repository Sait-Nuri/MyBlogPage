var app = angular.module('appModule');

app.config(['$stateProvider', function($stateProvider, $scope, $rootScope){

    $stateProvider

        //Admin main page
        .state('main.admin', {
            url:'admin',
            templateUrl: 'admin/adminMain.html',
            controller: 'AdminController'
        })

        // Create new page
        .state('main.admin.newpage', {
            url: '/newpage',
            views:{
                '@main':{
                    templateUrl: 'admin/newpage/createNewPage.html'
                }
            },
            controller: 'newpageController'
        })

        // step 1 gets page type and saved in rootscope
        .state('main.admin.newpage.step1', {
            url: '/step1',
            templateUrl: 'admin/newpage/step1.html',
        })

        //step 2 gets page title and saved in rootscope
        .state('main.admin.newpage.step2', {
            url: '/step2',
            templateUrl: 'admin/newpage/step2.html',
        })

        //Last step gets items from former steps via rootscope
        .state('main.admin.newpage.step3', {
            url: '/step3',
            templateUrl: 'admin/newpage/step3.html',
        })

        .state('main.admin.editpage', {
            url: '/editpage',
            views:{
                '@main':{
                    templateUrl: 'admin/editpage/editapage.html'
                }
            },
            controller: function(){
                console.log('editpage');
            }
        })

        .state('main.admin.editpage.step1', {
            url: '/step1',
            templateUrl: 'admin/editpage/step1.html',
            controller: function($scope, $http){

                $http({
                    method: 'GET',
                    url: '/post/titles'
                }).then(function successCallback(response) {
                    $scope.postlist = response.data;
                    console.log(response.data);
                }, function errorCallback(response) {
                    $scope.postlist = [];
                    console.log(response.status);
                });

                $http({
                    method: 'GET',
                    url: '/news/titles'
                }).then(function successCallback(response) {
                    $scope.newslist = response.data;
                    console.log(response.data);
                }, function errorCallback(response) {
                    $scope.newslist = [];
                    console.log(response.status);
                });

            }
         })

        // action step1 de belirtilmeli
        .state('main.admin.editpage.step2', {
            url: '/step2',
            templateUrl: 'admin/newpage/step3.html',
            params: {
                id: null,
                action: null,
                page_type: null
            },
            controller: 'AdminController'
        });
}]);