var app = angular.module('appModule');

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.service('ListService', function(objTemplate, $filter){

    // When add button clicked in editor, obj  will be added to the list
    this.addToList = function (obj, elements) {
        var next_index = this.nextIndex(elements);

        var newobj = {
            id: next_index,
            status: obj.status,
            tag: obj.tag,
            desc: obj.desc,
            body: obj.body
        };

        elements.push(newobj);

        return newobj;
    };

    // Update element in editor
    this.updateElement = function (obj, elements) {
        var update_element = elements[(obj.id-1)];

        console.log(update_element);

        update_element.status = obj.status;
        update_element.tag = obj.tag;
        update_element.desc = obj.desc;
        update_element.body = obj.body;

    };

    // Reset object
    this.resetObj = function (obj) {
        for(var k in objTemplate)
            obj[k]=objTemplate[k];
    };


    // When edit button clicked, current row will be placed on editor
    this.editRow = function (obj) {

    };

    // Delete row
    this.deleteRow = function (index, elements) {
        var removed = elements.splice(index, 1);

        this.arrangeElements(elements);
    };

    // Calculate and return index of new element in array
    this.nextIndex = function (elements) {
        console.log('next index ' + (elements.length + 1) );
        return elements.length + 1;
    };

    this.arrangeElements = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.id = (i+1);
        }
    };

});