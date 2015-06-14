var config = require('./config'),
	mongoose = require('mongoose');
	
module.exports = function () {
	var db = mongoose.connect(config.db);
	
	// register mongoose models here
	
	return db;	
};