var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var LinkSchema = new Schema({
	id: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	link: {
		type: String,
		required: true,
		trim: true
	}
});

mongoose.model('Link', LinkSchema);