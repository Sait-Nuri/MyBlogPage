'use strict';
const async = require('async');
var randomize = require('random-number');
var random_options = {
    min:  1000,
    max:  9999,
    integer: true
};

function CRUD(bundle) {

    this.createBulk = function (req, res) {
        console.log(req.body);
        var bulkdata = req.body.data;

        bundle.Model.bulkCreate(bulkdata)
            .then(function (models) {
                res.statusCode = 200;
                res.json({});
            })
            .catch(function (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            });
    };

    // GET /model
    this.readBulk = function (req, res) {

        bundle.Model.findAll().
            then(function (models) {
                console.log(models);
                var data = models.map(function (model) {
                    return model.get();
                });

                res.statusCode = 200;
                res.json(data);
            }).catch(function (err) {
                console.log(err);

                res.statusCode = 400;
                res.json({});
            });
    };

    // PUT /model
    this.updateBulk = function (req, res) {
        var data_array = req.body.data;
        var new_data_array = [];

        async.each(data_array,
            function (data, callback) {
                var option = {
                    'where': {'id': data.id}
                };

                bundle.Model.update(data, option)
                    .then(function (model) {
                        new_data_array.push(model.get());
                        callback(null);
                    })
                    .catch(function (err) {
                        console.log(err);
                        callback(err);
                    });
            },
            function (err) {
                if (err) {
                    console.log(err);
                    res.statusCode = 400;
                    res.json({});
                } else {
                    res.statusCode = 200;
                    res.json({});
                }
            });
    };

    // DELETE /model
    this.deleteBulk = function (req, res) {
        var response = {
            'status': null,
            'data': null
        };

        bundle.Model.destroy({truncate: true})
            .then(function (numberof_deleted) {
                response.status = 'success';
                res.json(response);
            })
            .catch(function (err) {
                console.log(err);
                response.status = 'failed';
                res.json(response);
            });
    };

    //  POST /model/:id
    this.createOne = function (req, res) {
        var model = req.body.data;
        model.id = req.params.id;

        console.log('model');
        console.log(model);

        bundle.Model.create(model)
            .then(function (model) {
                var new_model_data = model.get();
                console.log(new_model_data);
                res.statusCode = 200;
                res.json(new_model_data);
            })
            .catch(function (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            });
    };

    // GET /model/:id
    this.readOne = function (req, res) {
        var id = req.params.id;
        var where = {where: {'id': id}};

        bundle.Model.findOne(where)
            .then(function (instance) {
                var data = instance.get();
                console.log(data);

                res.statusCode = 200;
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            });
    };

    // PUT /model/:id
    this.updateOne = function (req, res) {
        var id = req.params.id;
        var new_data = req.body.data;
        var where = {where: {'id': id}};

        bundle.Model.update(new_data, where)
            .then(function (instance) {
                res.statusCode = 200;
                res.json(instance.get());
            })
            .catch(function (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            });
    };

    // DELETE /model/:id
    this.deleteOne = function (req, res) {
        var id = req.params.id;
        var where = {where: {'id': id}};

        bundle.Model.destroy(where)
            .then(function (numof_effeted) {
                res.statusCode = 200;
                res.json({});
            })
            .catch(function (err) {
                res.statusCode = 400;
                res.json({});
            });
    };
}
module.exports = CRUD;


