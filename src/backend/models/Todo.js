const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	text: {
		type: Schema.Types.String,
		required: true
	},	
	done: {
		type: Schema.Types.Boolean,
		default: false
	},
	userId: {
		type: Schema.Types.String,
		required: true
	}
});

module.exports = mongoose.model('Todo', todoSchema);;
