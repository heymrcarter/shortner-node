/// <reference path="../../../../typings/mocha/mocha.d.ts"/>
var app = require('../../../server'),
	should = require('should'),
	mongoose = require('mongoose'),
	Link = mongoose.model('Link');
	
var link;

describe('Link Model tests', function () {
	beforeEach(function (done) {
		link = new Link({
			id: '12ab',
			url: 'http://google.com'
		});
		
		link.save(function () {
			done();
		});
	});
	
	afterEach(function (done) {
		Link.remove(function () {
			done();
		});
	});
	
	describe('Testing fields', function () {
		it('Should have an id field', function () {
			link.should.have.property('id', link.id);
		});
		
		it('Should have a link field', function () {
			link.should.have.property('link', link.link);
		});
	});
	
	describe('Testing id field', function () {
		it('Should not allow empty IDs', function () {
			link.id = '';
			
			link.save(function (err) {
				should.exist(err);
			});
		});
		
		it('Should not allow duplicate IDs', function () {
			var link2 = new Link({
				id: '12ab',
				link: 'http://apple.com'
			});
			
			link2.save(function (err) {
				should.exist(err);
			});
		});
	});
	
	describe('Testing link field', function () {
		it('Should not allow empty links', function () {
			link.link = '';
			
			link.save(function (err) {
				should.exist(err);
			});
		});
		
		describe('Protocol tests', function () {
			it('Should allow http', function () {
				link.link = 'http://apple.com';
				
				link.save(function (err) {
					should.not.exist(err);
				});
			});
			
			it('Should allow https', function () {
				link.link = 'https://apple.com';
				
				link.save(function (err) {
					should.not.exist(err);
				});
			});
			
			it('Should not allow anything else', function () {
				link.link = 'mongodb://test-link.com';
				
				link.save(function (err) {
					should.exist(err);
				})
			});
		});
		
		it('Should have a domain', function () {
			link.link = 'http://.com';
			
			link.save(function (err) {
				should.exist(err);
			})	
		});
		
		it('Should have a tld', function () {
			link.link = 'http://google.';
			
			link.save(function (err) {
				should.exist(err);
			});
		});
	});
});