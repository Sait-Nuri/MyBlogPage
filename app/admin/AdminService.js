var app = angular.module('appModule');

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.value('elementTmp', {
    id: 0,
    type_id: 1,
    desc: 'new description',
    body: ''
});

app.value('attrTmp', [
    {page_type:1, attr:{'title':null}},
    {page_type:2, attr:{'title':null, 'desc':null}},
    {page_type:3, attr:{'state_name':null, 'page_title':null, 'category_title':null}}
]);

app.constant('TYPE', {
    'POST':'Post',
    'NEWS':'News',
    'MENU_ITEM': 'MenuItem'
});
app.constant('pageTypes', [
    {type:'Post', id: 1},
    {type:'News', id: 2},
    {type:'MenuItem', id: 3}
]);

app.constant('elementType', [
    {type: 'paragraph', id: 1},
    {type: 'image', id: 2},
    {type: 'code', id: 3},
    {type: 'link', id: 4},
    {type: 'video', id: 5}
]);

app.service('ListService', function(RestService){

    // When add button clicked in editor, obj  will be added to the list
    this.addToList = function (obj, element_list) {
        var next_index = this.nextIndex(element_list);
        var new_obj = JSON.parse(JSON.stringify(obj));

        new_obj.id = next_index;

        element_list.push(new_obj);

        return new_obj;
    };

    // Update element in editor
    this.updateElement = function (obj, element_list) {
        var update_element = element_list[(obj.id-1)];

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                update_element[prop] = obj[prop];
            }
        }
    };

    this.edit = function (index) {
        var edit_element = $scope.element_list[index];

        $scope.currentAction = Actions[1];
        $scope.obj = JSON.parse(JSON.stringify(edit_element));
    };

    // Delete row
    this.deleteRow = function (index, element_list) {
        var removed = element_list.splice(index, 1);

        this.arrangeElements(element_list);
    };

    // Calculate and return index of new element in array
    this.nextIndex = function (elements) {
        //console.log('next index ' + (elements.length + 1) );
        return elements.length + 1;
    };

    // elements
    this.arrangeElements = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.id = (i+1);
        }
    };
});

app.service('DataService', function (Utils, elementTmp, attrTmp, pageTypes, elementType, RestService) {

    this.buildElement = function (id) {
        var new_id;

        if(id === null || id === undefined)
            new_id = Utils.random();
        else
            new_id = id;

        return {
            id: new_id,
            type_id: elementTmp.type_id,
            desc: elementTmp.desc,
            body: elementTmp.body
        };
    };

    this.getAttributes = function (type_id) {
        for(var i=0; i < attrTmp.length; i++){
            var attr = attrTmp[i];

            if(attr.page_type === type_id)
                return attr.attr;
        }
    };

    this.getPageType = function (id) {
        for(var i = 0; i < pageTypes.length; i++){
            var type = pageTypes[i];

            if(type.id === id )
                return type.type;
        }
    };

    this.getPageTypes = function () {
        return JSON.parse(JSON.stringify(pageTypes));
    };

    this.getPageTypeId = function (selected_type) {
        for(var i = 0; i < pageTypes.length; i++){
            var type = pageTypes[i];

            if(type.type === selected_type )
                return type.id;
        }
    };

    this.getElementType = function (id) {
        for(var i = 0; i < elementType.length; i++){
            var type = elementType[i];

            if(type.id === id){
                return type.type;
            }
        }
    };


});

app.service('Request', function($http, $q, RestService, TYPE) {

    var request = function(request) {
        // Creates a Deferred object
        var deferred = $q.defer();

        $http(request)
            .then(function successCallback(response) {
                console.log(response.status);
                deferred.resolve(response);
            }, function errorCallback(response) {
                console.log('Error status: '+ response.status);
                deferred.resolve(response);
            });

        // The promise of the deferred task
        return deferred.promise;
    };

    //********************* GETTERS ****************************

    // GET /page/:id
    this.getPage = function(page_id) {

        $q.when(true).then(function() {
            var getpage = RestService.getPage(page_id);
            return request(getpage); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
            return response.data;
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    this.getBulkPage = function () {
        $q.when(true).then(function() {
            var getbulkpage = RestService.getBulkPage();
            return request(getbulkpage); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
            return response.data;
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    // GET /post/:id
    // get post
    this.getPost = function(id) {

        $q.when(true).then(function() {
            var get_post = RestService.getPost(id);
            return request(get_post); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
            return response.data;
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    // Get news
    // GET /news/:id
    this.getNews = function(id) {

        $q.when(true).then(function() {
            var get_news = RestService.getNews(id);
            return request(get_news); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
            return response.data;
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    this.getBulkElement = function (id, type) {

        $q.when(true).then(function() {
            var get_elements = RestService.getBulkElement(id, type);
            return request(get_elements); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
            return response.data;
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    //************************************************************

    //************************ CREATE ****************************

    // POST /post/:id
    // create page + post
    this.createOnePost = function (page, attr, elements) {

        $q.when(true).then(function() { //page create request
            console.log("page");
            console.log(page);

            var data = {'data': page};
            var create_page = RestService.createPage( data );
            return request(create_page); // Will be resolved
        }).then(function(response) { //post create request
            if(response.status === 200){
                var post = {};
                post.page_id = response.data.id;

                for (var prop in attr) {
                    if (attr.hasOwnProperty(prop)) {
                        post[prop] = attr[prop];
                    }
                }
                console.log("post");
                console.log(post);

                var data = {'data': post};
                var create_post = RestService.createPost(data);
                return request(create_post); // Will be resolved
            }
        }).then(function(response) { // element create request
            if(response.status == 200){
                var model_id = response.data.id;
                console.log("model id: " +model_id);

                var createElements = RestService.createModelElements(model_id, elements, TYPE.POST);

                return request(createElements);
            }
        }).then(function(response) {
            console.log(response.status); // Success callback
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    // POST /news/:id
    // create page + news
    this.createOneNews = function() {

        $q.when(true).then(function() {
            var create_page = RestService.createPage();
            return request(create_page); // Will be resolved
        }).then(function(response) {
            if(response.status == 200){
                news.page_id = response.data.id;
                var create_news = RestService.createNews(news);
                return request(create_news); // Will be resolved
            }
        }).then(function(response) {
            console.log(response.status); // Success callback
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    //************************************************************

    //************************ UPDATE ****************************

    // PUT /post/:id
    this.updatePost = function(post) {
        $q.when(true).then(function() {
            var update_post = RestService.updatePost(post);
            return request(update_post); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    // PUT /news/:id
    this.updateNews = function(news) {
        $q.when(true).then(function() {
            var update_news = RestService.updateNews(news);
            return request(update_news); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
        }, function(err) {
            console.log(err); // Error callback
        });
    };

    //************************************************************

    //************************ DELETE ****************************

    //DELETE /page/:page_id
    this.deleteOnePost = function(post) {
        $q.when(true).then(function(post) {
            var delete_page = RestService.deleteOneModel(post.page_id);
            return request(delete_page); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
        }, function(err) {
            console.log(response.status); // Error callback
        });
    };

    //DELETE /page/:page_id
    this.deleteOneNews = function(news) {
        $q.when(true).then(function(news) {
            var delete_page = RestService.deleteOneModel(news.page_id);
            return request(delete_page); // Will be resolved
        }).then(function(response) {
            console.log(response.status); // Success callback
        }, function(err) {
            console.log(response.status); // Error callback
        });
    };

    //************************************************************
});

app.service('Utils', function() {

    this.equals = function(obj1, obj2) {
        function _equals(obj1, obj2) {
            var clone = $.extend(true, {}, obj1),
                cloneStr = JSON.stringify(clone);
            return cloneStr === JSON.stringify($.extend(true, clone, obj2));
        }

        return _equals(obj1, obj2) && _equals(obj2, obj1);
    };

    this.random = function () {
        return Math.floor(Math.random() * 1000) + 1
    };

});

app.service('RestService', function (Utils) {
    this.getPage = function (id) {
        return {
            method: 'GET',
            url: '/post/'+id
        };
    };

    this.getBulkPage = function () {
        return {
            method: 'GET',
            url: '/post'
        }
    };

    this.getPost = function (id) {
        return {
            method: 'GET',
            url: '/post/'+id
        }
    };

    this.getNews = function (id) {
        return {
            method: 'GET',
            url: '/news/'+id
        }
    };

    this.getBulkElement = function (id, type) {
        var option = {
            method: 'GET'
        };

        if(type === 'Post'){
            option.url = '/post/'+id+'/element'
        }else if(type === 'News'){
            option.url = '/news/'+id+'/element'
        }else if(type === 'MenuItem'){
            option.url = '/menuitem/'+id+'/element'
        }

        return option;
    };

    this.createPage = function (page) {
        return {
            method: 'POST',
            url: '/page/'+Utils.random(),
            data: JSON.stringify(page)
        }
    };

    this.createPost = function (post) {
        return {
            method: 'POST',
            url: '/post/'+post.data.id,
            data: JSON.stringify(post)
        }
    };

    this.createNews = function (news) {
        return {
            method: 'POST',
            url: '/news/'+news.data.id,
            data: JSON.stringify(news)
        }
    };

    this.createModelElements = function (model_id, elements, type) {
        var option = {
            method: 'POST',
            data: JSON.stringify(elements)
        };

        if(type === 'Post'){
            option.url = '/post/'+model_id+'/element'
        }else if(type === 'News'){
            option.url = '/news/'+model_id+'/element'
        }else if(type === 'MenuItem'){
            option.url = '/menuitem/'+model_id+'/element'
        }

        return option;
    };

    this.updatePost = function (post) {
        return {
            method: 'PUT',
            url: '/post/'+post.id,
            data: JSON.stringify(post)
        }
    };

    this.updateNews = function (news) {
        return {
            method: 'PUT',
            url: '/news/'+news.id,
            data: JSON.stringify(news)
        }
    };

    this.deleteOneModel = function (page_id) {
        return {
            method: 'DELETE',
            url: '/page/'+page_id
        }
    };

});