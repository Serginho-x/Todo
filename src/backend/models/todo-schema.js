const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	text: {
		type: Schema.Types.String
	},	
	done: {
		type: Schema.Types.Boolean
	}
});

const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;
