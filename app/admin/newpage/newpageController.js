app.controller('newpageController', ['$scope', 'Request', 'Actions', 'ListService', 'DataService', 'Utils', 'elementType', function($scope, Request, Actions, ListService, DataService, Utils, elementType){

    $scope.data = {};
    $scope.currentAction = Actions[0];

    //scope element template
    $scope.obj = DataService.buildElement();

    //right side list
    $scope.element_list = [];

    $scope.element_types = elementType;

    $scope.data.page_type = 'Post';
    $scope.data.page_type_id = DataService.getPageTypeId($scope.data.page_type);
    $scope.data.attr = DataService.getAttributes($scope.data.page_type_id);
    $scope.page_type_list = DataService.getPageTypes();

    //var initial_element = DataService.buildElement();
    //$scope.element_list.push(initial_element);

    console.log('######## ADD_PAGE Section #############');

    console.log('scope.data');
    console.log($scope.data);
    console.log('element_list');
    console.log($scope.element_list);

    console.log('----------------------------------------');

    $scope.showListTag = function (element) {
        return DataService.getElementType(element.id);
    };

    $scope.showElementType = function () {
        return DataService.getElementType($scope.obj.type_id);
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

    $scope.sendElements = function () {
        console.log('########## sendElements ############');

        var model_attr = $scope.data.attr;
        var elements = $scope.element_list;
        var page = {'type_id': $scope.data.page_type_id};
        model_attr.id = Utils.random();

        console.log('model attributes');
        console.log(model_attr);
        console.log('elements');
        console.log(elements);

        console.log('---------------------------------');

        // http rest request here
        var data = {'data': elements};
        console.log(JSON.stringify(data));

        var res = Request.createOnePost(page, model_attr, data);
    };

    $scope.$watch('data.page_type', function(newValue, oldValue){
        $scope.data.page_type_id = DataService.getPageTypeId(newValue);
        $scope.data.attr = DataService.getAttributes($scope.data.page_type_id);

        console.log('########## $watch ############');
        console.log("changed to: " + newValue);
        console.log('page_type_id: ' + $scope.data.page_type_id);
        console.log('data.attr');
        console.log($scope.data.attr);
        console.log('------------------------------------');

    });

    //is title changed?
    /*
    $scope.$watch('post_list', function(newList, oldList){

        for(var i = 0; i < oldList.length; i++){
            var newValue = newList[i];
            var oldValue = oldList[i];

            var changed = RestService.equals(newValue, oldValue);

            if(changed){
                RestService.updatePost(newValue);
            }
        }

    }, true);
    */

}]);
