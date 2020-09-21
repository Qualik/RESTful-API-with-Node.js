var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);
module.exports = app; /* Used to make the app visible to the rest of the program when called using require */
//File will be used to configure the app

