require('../extensions/string-extensions')();

module.exports = function (url) {
	var self = this;
	
	self.protocol;
	self.subdomain;
	self.domain;
	self.tld;
	self.queryStringParameters;
};