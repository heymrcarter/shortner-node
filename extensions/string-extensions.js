module.exports = function () {
	String.prototype.includes = function () {
		'use strict';
		
		return String.prototype.indexOf.apply(this, arguments) !== -1;	
	};
};