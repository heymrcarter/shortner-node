process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('mongoose');
var express = require('express');

var db = mongoose();
var app = express();

app.listen(300);
module.exports = app;

console.log('Server running at http://localhost:3000');