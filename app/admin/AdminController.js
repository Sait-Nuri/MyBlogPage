var app = angular.module('appModule');

app.constant('objTemplate', {
    id: 0,
    status: 1,
    tag: 'paragraph',
    desc: 'new description',
    body: ''
});

app.constant('Actions', ['ADD', 'UPDATE']);

app.controller('AdminController',['$scope', '$filter', 'ListService', 'objTemplate', 'Actions', '$http',  function($scope, $filter, ListService, objTemplate, Actions, $http) {

    $scope.currentAction = Actions[0];

    $scope.obj = {
        id: 1,
        status: objTemplate.status,
        tag: objTemplate.tag,
        desc: objTemplate.desc,
        body: objTemplate.body
    };

    //right side list
    $scope.elements = [
        {id: 1, status: 1, tag:'paragraph', desc:'Paragraf 1', body: ''},
        {id: 2, status: 1, tag:'paragraph', desc:'Paragraf 2', body: ''},
        {id: 3, status: 2, tag:'image', desc:'Resim 1', body: ''},
    ];

    //
    $scope.statuses = [
        {value: 1, text: 'paragraph'},
        {value: 2, text: 'image'},
        {value: 3, text: 'code'},
        {value: 4, text: 'link'},
        {value: 5, text: 'video'}
    ];

    $scope.showEditorTag = function() {
        var selected = $filter('filter')($scope.statuses, {value: $scope.obj.status});
        var tag = ($scope.obj.status && selected.length) ? selected[0].text : 'Not set';

        $scope.obj.tag = tag;

        return tag;
    };

    $scope.showListTag = function (element) {

        return element.tag;
    };

    $scope.validateTag = function (val, element) {
        var selected = $filter('filter')($scope.statuses, {value: val});
        //var value = (val && selected.length) ? selected[0].value : '0';
        element.tag = (val && selected.length) ? selected[0].text : 'Not set';

        //element.tag = tag;

        //console.log(element);
    };

    // Add new element to list
    $scope.save = function () {

        var scope_obj = $scope.obj;
        var elements = $scope.elements;

        //add element
        if($scope.currentAction === 'ADD'){
            ListService.addToList(scope_obj, elements);
        }

        //update element
        else if($scope.currentAction === 'UPDATE'){
            ListService.updateElement(scope_obj, elements);
            $scope.currentAction = Actions[0];
        }

        //reset main object
        ListService.resetObj(scope_obj);
    };

    $scope.reset = function (obj) {
        ListService.resetObj(obj);
    };

    $scope.edit = function (index) {
        var edit_element = $scope.elements[index];

        $scope.currentAction = Actions[1];

        $scope.obj.status = $scope.getStatus(edit_element.tag);
        $scope.obj.id = edit_element.id;
        $scope.obj.tag = edit_element.tag;
        $scope.obj.desc = edit_element.desc;
        $scope.obj.body = edit_element.body;
    };

    $scope.delete = function (index) {
        var elements = $scope.elements;

        ListService.deleteRow(index, elements);
        ListService.resetObj($scope.obj);

        $scope.currentAction = Actions[0];
    };

    $scope.getStatus = function (tag) {
        var selected = $filter('filter')($scope.statuses, {text: tag});
        var value = ($scope.obj.tag && selected.length) ? selected[0].value : 'Not set';

        return value;
    };

    $scope.sendElements = function () {

        // Simple POST request example:
        $http.post('/someUrl', $scope.elements)

            .then(function successCallback(response) {
                console.log(response.status);
            }, function errorCallback(response) {
                console.log(response.statusText);
            });
    }
}]);