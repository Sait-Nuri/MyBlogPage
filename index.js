'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const async = require('async');

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var database;
var routes;

// wait for db models sync

async.series([
    function (cb) {
        database = require("./server/Db.js");
        database.setup(cb); //Create models
    },
    function (cb) {
        routes = require('./server/Routes')(app, __dirname, database, express);
        routes.setup();
        cb(null);
    }],
    function (err, result) {
        if(err){
            throw (err);
        }
    });

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
	console.log('Node app is running on port', PORT);
});


