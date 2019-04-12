const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const userSchema = new Schema({
	firstName: {
		type: String
    },
	lastName: {
		type: String
    },
	nickName: {
		type: String
	},
	email: {
		type: String
    },
	password: {
		type: String
	},
});

userSchema.methods.joiValidate = function(obj) {	
	const schema = Joi.object().keys({
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		nickName: Joi.string().min(6).max(30).required(),		
		email: Joi.string().email().required(),
		password: Joi.string().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required()
	})
	return Joi.validate(obj, schema);
}

module.exports = mongoose.model('User', userSchema);
