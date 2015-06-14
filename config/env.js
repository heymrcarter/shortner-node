module.exports = {
	current: process.env.NODE_ENV || 'development',
	environments: {
		devEnvironment: 'development',
		testEnvironment: 'test',
		qaEnvironment: 'qa',
		productionEnvironment: 'production'
	}	
};