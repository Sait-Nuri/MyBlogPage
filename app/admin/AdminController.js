var app = angular.module('appModule');

app.constant('Actions', ['ADD', 'UPDATE']);

app.controller('AdminController',['$scope', '$rootScope', '$filter', 'Request', 'Actions', '$http', '$stateParams', 'ListService', 'DataService',
    function($scope, $rootScope, $filter, Request, Actions, $http, $stateParams, ListService, DataService) {

    $scope.data = {};
    $scope.currentAction = Actions[0];

    //scope element template
    $scope.obj = DataService.buildElement();

    //right side list
    $scope.element_list = [];

    // fetch the page with element and title
    if($stateParams.action === 'EDIT_PAGE'){
        console.log('edit page');
        $http({
            method: 'GET',
            url: '/'+$stateParams.page_type+'/'+$stateParams.id
        }).then(function successCallback(response) {
            $scope.data.title = response.data.title;
            $scope.data.elements = response.data.elements;
            var title = response.data.title;
            var elements = response.data.elements;
            var element_list = $scope.element_list;

            for (var i = 0; i < elements.length; i++){
                var element = elements[i];

                ListService.addToList(element, element_list);
            }

        }, function errorCallback(response) {
            console.log(response.status);
        });
    }else if($stateParams.action === 'ADD_PAGE'){
        // Default page is Post
        $scope.data.page_type_id = DataService.getPageTypeId('Post');
        $scope.data.page_type = 'Post';
        $scope.data.attr = DataService.getAttributes($scope.data.page_type_id);
        $scope.page_type_list = DataService.getPageTypes();

        var initial_element = DataService.buildElement();
        $scope.element_list.push(initial_element);

        console.log('######## ADD_PAGE Section #############');

        console.log('scope.data');
        console.log($scope.data);
        console.log('element_list');
        console.log($scope.element_list);

        console.log('----------------------------------------');
    }

    $scope.showListTag = function (element) {
        return element.tag;
    };

    // Add new element to list
    $scope.save = function () {

        //add element
        if($scope.currentAction === 'ADD'){
            console.log('########## SAVE ############');
            console.log('element list before:');
            console.log($scope.element_list);

            ListService.addToList($scope.obj, $scope.element_list);

            console.log('element list after:');
            console.log($scope.element_list);
            console.log('----------------------------');
        }

        //update element
        else if($scope.currentAction === 'UPDATE'){
            ListService.updateElement($scope.obj, $scope.element_list);
            $scope.currentAction = Actions[0];
        }

        //reset main object
        $scope.reset();
    };

    //Reset indexed row
    $scope.reset = function () {
        console.log('########## RESET obj ############');

        $scope.obj = DataService.buildElement();
        console.log($scope.obj);

        console.log('---------------------------------');
    };

    //Edit indexed row
    $scope.edit = function (index) {
        console.log('########## EDIT obj ############');

        var edit_element = $scope.element_list[index];
        $scope.currentAction = Actions[1];
        $scope.obj = JSON.parse(JSON.stringify(edit_element));

        console.log('---------------------------------');
    };

    //Delete indexed row
    $scope.delete = function (index) {
        console.log('########## EDIT obj ############');

        var elements = $scope.element_list;

        ListService.deleteRow(index, elements);
        $scope.reset();

        $scope.currentAction = Actions[0];
        console.log('---------------------------------');
    };

    // Send data to backend server
    $scope.sendElements = function () {
        // edit a page with elements
        if($stateParams.action === 'EDIT_PAGE'){
            var title = $scope.data.title;
            var elements = ListService.get_element_list($scope.element_list);

            if(title === null || elements.length === 0){
                console.log("Error: title or elements not found");
                return;
            }

            console.log(title);
            console.log(elements);

            var edited_data = {
                'title': title,
                'elements': elements
            };

            $http.put('/'+$stateParams.page_type+'/'+$stateParams.id, JSON.stringify(edited_data))
                .then(function successCallback(response) {
                    console.log(response.data);
                }, function errorCallback(response) {
                    console.log(response.statusText);
                });
        }
        // create new page with elements
        else if($stateParams.action === 'ADD_PAGE'){
            console.log('########## sendElements ############');

            var model_attr = $scope.data.attr;
            var elements = $scope.element_list;
            model_attr.type_id = $scope.data.page_type_id;

            console.log('model attributes');
            console.log(model_attr);
            console.log('elements');
            console.log(elements);

            console.log('---------------------------------');

            // http rest request here
            //var res = Request.createOnePost(model_attr, elements);
        }
    };
}]);