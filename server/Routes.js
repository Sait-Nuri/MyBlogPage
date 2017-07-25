'use strict';
const async = require('async');
var Rest = require('./modelCRUD');
var random_teyze = require('random-number');
var random_options = {
    min:  1000,
    max:  9999,
    integer: true
};

module.exports = function (app, dir_path, db, express) {
    var module = {};

    module.setup = function () {

        var pageRouter = require('express').Router();
        var postRouter = require('express').Router();
        var newsRouter = require('express').Router();
        var elementRouter = require('express').Router({ mergeParams: true });

        app.get('/', function(req, res) {
            res.sendFile(dir_path + '/index.html');
        });
        this.setupPageRoutes(app, pageRouter);
        this.setupPostRoutes(app, postRouter, elementRouter);
        this.setupNewsRoutes(app, newsRouter, elementRouter);
        //this.setupMenuRoutes();
    };

    // page routing
    module.setupPageRoutes = function (app, router) {
        var bundle = { 'Model': db.models.Page };
        var pageRest = new Rest(bundle);

        router.route('/')
            .get(pageRest.readBulk);

        router.route('/:id')
            .post(pageRest.createOne)
            .get(pageRest.readOne)
            .put(pageRest.updateOne)
            .delete(pageRest.deleteOne);

        app.use('/page', router);
    };

    module.setupPostRoutes = function (app, router, elementRouter) {

        //console.log(db.models);
        var bundle = { 'Model': db.models.Post };
        var postRest = new Rest(bundle);

        var bundleElement = {'Model': db.models.Element };
        var elementRest = new Rest(bundleElement);

        router.use('/:id/element', elementRouter);

        router.route('/')
            .get(postRest.readBulk)
            .post(postRest.createBulk);

        router.route('/:id')
            .get(postRest.readOne)
            .post(postRest.createOne)
            .put(postRest.updateOne)
            .delete(postRest.deleteOne);

        elementRouter.route('/')
            .get(elementRest.readBulk)
            .post(elementRest.createBulk);

        elementRouter.route('/:element_id')
            .get(elementRest.readOne)
            .post(elementRest.createOne)
            .put(elementRest.updateOne)
            .delete(elementRest.deleteOne);

        app.use('/post', router);
    };

    //news routing
    module.setupNewsRoutes = function (app, router, elementRouter) {
        var bundle = { 'Model': db.models.News };
        var newsRest = new Rest(bundle);

        var bundleElement = {'Model': db.models.Element };
        var elementRest = new Rest(bundleElement);

        router.use('/:id/element', elementRouter);

        router.route('/')
            .get(newsRest.readBulk)
            .post(newsRest.createBulk);

        router.route('/:id')
            .get(newsRest.readOne)
            .post(newsRest.createOne)
            .put(newsRest.updateOne)
            .delete(newsRest.deleteOne);

        elementRouter.route('/')
            .get(elementRest.readBulk)
            .post(elementRest.createBulk);

        elementRouter.route('/:element_id')
            .get(elementRest.readOne)
            .post(elementRest.createOne)
            .put(elementRest.updateOne)
            .delete(elementRest.deleteOne);

        app.use('/news', router);
    };

    return module;
};