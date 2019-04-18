const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');


const todoSchema = new Schema({
	text: {
		type: Schema.Types.String
	},	
	done: {
		type: Schema.Types.Boolean
	},
	userId: {
		type: Schema.Types.String
	}
});

todoSchema.methods.joiValidate = function(obj) {	
	const schema = Joi.object().keys({
		text: Joi.string().required(),
		done: Joi.boolean().default(false),
		userId: Joi.string().required()	
	})
	return Joi.validate(obj, schema);
}

module.exports = mongoose.model('Todo', todoSchema);;
