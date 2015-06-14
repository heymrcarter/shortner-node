var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compression = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	flash = require('connect-flash'),
	env = require('./env');
	
module.exports = function (db) {
	var app = express();
	
	if (env.current === env.environments.devEnvironment) {
		app.use(morgan);
	} else if (env.current === env.environments.productionEnvironment) {
		app.use(compression());
	}
	
	app.set('views', './app/views');
	app.set('view engine', 'ejs');
	
	app.use(flash());
	app.use(express.static('./public'));
	
	return app;
};