'use strict';
const Sequelize = require('sequelize');
const async = require('async');
const connectionUri = "postgres://wlcchjco:JKVHGVDtMO5zCvuJR0xabshc5Z49dCq4@fizzy-cherry.db.elephantsql.com:5432/wlcchjco";
const FORCE_DROP = { force:true };
const NO_LOGGING = { logging: false};

function Database() {
    this.models = {};
    this.sequelize = null;
    var that = this;

    this.setup = function (parent_cb) {

        async.series([
            function (cb) {
                that.connectToDB(cb);
            },
            function (cb) {
                //cb(null);
                that.modelDefine(cb);
            },
            function (cb) {
                //that.dropTables(cb);
                that.createRelations(cb);
                //cb(null);
            },
            function (cb) {
                //cb(null);
                that.saveModels(cb);
            },
            function (cb) {
                //cb(null);
                that.initModels(cb);
            }
        ],
        function (err, result) {
            if(err){
                throw (err);
            }else{
                parent_cb(null);
            }
        });

        //Buraya log atma
    };

    this.connectToDB = function (cb) {

        //Connect to database
        this.sequelize = new Sequelize(connectionUri, {
            define: {
                timestamps: false, // true by default
                underscored: true,
                freezeTableName: true
            }
        });

        this.sequelize
            .authenticate()
            .then(function (){
                console.log('Connection has been established successfully.');
                cb(null, 'connectToDB done');
            })
            .catch(function (err) {
                console.error('Unable to connect to the database:', err);
                cb(err);
            });
    };

    this.modelDefine = function (callback) {

        // Element definition
        this.models.Element = this.sequelize.define('element', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true
            },
            order: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            desc: {
                type: Sequelize.TEXT
            },
            body: {
                type: Sequelize.TEXT
            }
        },{
            tableName: 'element_list'
        });

        //Tag type
        this.models.Element_Type = this.sequelize.define('element_type', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        });

        // page list table
        this.models.Page = this.sequelize.define('page', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }
        },{
            tableName: 'page_list'
        });

        this.models.Page_Type = this.sequelize.define('page_type', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        });

        // Post list table
        this.models.Post = this.sequelize.define('post', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title:{
                type: Sequelize.TEXT
            },
            numread:{
                type: Sequelize.INTEGER,
                defaultValue: 0
            }
        },{
            tableName: 'post_list'
        });

        // news list table
        this.models.News = this.sequelize.define('news', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title:{
                type: Sequelize.TEXT
            },
            desc: {
                type: Sequelize.TEXT
            },
            numread:{
                type: Sequelize.INTEGER
            }
        },{
            tableName: 'news_list'
        });

        // Left Menu list
        this.models.MenuItem = this.sequelize.define('menu_item', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            state_name: {  //name
                type: Sequelize.STRING
            },
            page_title: {  // desc
                type: Sequelize.TEXT
            },
            category_title: { // subject
                type: Sequelize.TEXT
            }
        });

        callback(null, 'model_loader done');
    };

    this.createRelations = function (parent_callback) {

        this.models.Element.belongsTo(this.models.Element_Type, {foreignKey: 'type_id'}); // Element.getTag();

        this.models.Page.hasMany(this.models.Element, {as: 'Elements'}); // Page.getElements();
        this.models.Page.belongsTo(this.models.Page_Type, {foreignKey: 'type_id'});

        this.models.Post.belongsTo(this.models.Page, {onDelete: 'CASCADE', hooks: true});  // Post.getPage();

        this.models.News.belongsTo(this.models.Page, {onDelete: 'CASCADE', hooks: true});  // News.getPage();

        this.models.MenuItem.belongsTo(this.models.Page, {onDelete: 'CASCADE', hooks: true});

        parent_callback(null, 'createRelations done');
    };

    this.saveModels = function (parent_callback) {
        var models = this.models;

        async.series([
                function (callback) {
                    models.Element_Type.sync()
                        .then(function () {
                            callback(null, 'Element_Type model saved');
                        }).catch(function (err) {
                            callback(err);
                        });
                },
                function (callback) {
                    models.Page_Type.sync()
                        .then(function () {
                            callback(null, 'Page_Type model saved');
                        }).catch(function (err) {
                            callback(err);
                        });
                },
                function (callback) {
                    models.Page.sync()
                        .then(function () {
                            callback(null, 'Page model saved');
                        }).catch(function (err) {
                            callback(err);
                        });
                },
                function (callback) {
                    models.Post.sync()
                        .then(function () {
                            callback(null, 'Post model saved');
                        }).catch(function (err) {
                            callback(err);
                        });
                },
                function (callback) {
                    models.News.sync()
                        .then(function () {
                            callback(null, 'News model saved');
                        }).catch(function (err) {
                            callback(err);
                        });
                },
                function (callback) {
                    models.MenuItem.sync()
                        .then(function () {
                            callback(null, 'MenuItem model saved');
                        }).catch(function (err) {
                            callback(err);
                        });
                },
                function (callback) {
                    models.Element.sync()
                        .then(function () {
                            callback(null, 'Element model saved');
                        }).catch(function (err) {
                        callback(err);
                    });
                }],
            function (err, result) {
                if(err){
                    console.error(err);
                    parent_callback(err);
                }else{
                    parent_callback(null, 'saveModels done');
                }
            });
    };

    this.initModels = function (cb) {
        var models = this.models;

        async.series([
            function (callback) {
                models.Page_Type.bulkCreate([{name: 'post'}, {name: 'news'}, {name: 'menu_item'}])
                    .then(function () {
                        callback(null);
                    }).catch(function (err) {
                        console.log(err);
                        callback(err);
                    });
            },
            function (callback) {
                models.Element_Type.bulkCreate([{name: 'paragraph'}, {name: 'image'}, {name: 'code'}, {name: 'link'}, {name: 'video'}])
                    .then(function (){
                        callback(null);
                    }).catch(function (err){
                        console.log(err);
                        callback(err);
                    });
            }],
            function (err) {
                if(err){
                    cb(err);
                }else{
                    cb(null, 'initModels done');
                }
            }
        );
    };

    this.dropTables = function (parent_cb) {
        var models = this.models;

        async.series([
                function (callback) {
                    models.Post.drop().then(function (){
                        callback(null);
                    }).catch(function (err){
                        console.log(err);
                        callback(err);
                    });
                },
                function (callback) {
                    models.News.drop().then(function (){
                        callback(null);
                    }).catch(function (err){
                        console.log(err);
                        callback(err);
                    });
                },
                function (callback) {
                    models.Element.drop().then(function (){
                        callback(null);
                    }).catch(function (err){
                        console.log(err);
                        callback(err);
                    });
                },
                function (callback) {
                    models.Tag.drop().then(function (){
                        callback(null);
                    }).catch(function (err){
                        console.log(err);
                        callback(err);
                    });

                },
                function (callback) {
                    models.Page.drop().then(function (){
                        callback(null);
                    }).catch(function (err){
                        console.log(err);
                        callback(err);
                    });
                }],
            function (err, result) {
                if (err) {
                    console.log(err);
                    parent_cb(err);
                }else{
                    parent_cb(null);
                }
            });
    };
}

module.exports = new Database();
