/**
 * Created by saidnuriPC on 1.07.2017.
 */
var app = angular.module('appModule');

app.constant('objTemplate', {
    id: 0,
    page_type: 'Post',
    tag: 'paragraph',
    desc: 'new description',
    body: ''
});

//
app.controller('editpageController', ['$scope', function($scope){
    $scope.model = {};
    $scope.model.type_id = 1;
    $scope.model.elements = []; //{'id': 1, 'type_id': 1, 'desc': 'açıklama', 'body': 'içerik'}

    // 1. adımda sayfa tipi seçimi
    var page_types = [
        {'id': 1, 'name':'post'},
        {'id': 2, 'name':'news'},
        {'id': 3, 'name':'menu_item'}
    ];

    //
    var attribute_list = [
        ['id', 'title', 'desc'],
        ['id', 'title', 'desc'],
        ['id', 'title']
    ];

    var index = $scope.model.type_id;
    var attributes = attribute_list[index];

    $scope.posts = [
        {id:'1', 'title':'başlık 1'},
        {id:'2', 'title':'başlık 2'},
        {id:'3', 'title':'başlık 3'},
        {id:'4', 'title':'başlık 4'},
        {id:'5', 'title':'başlık 5'}
    ];

}]);