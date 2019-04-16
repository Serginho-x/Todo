const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const bcrypt = require('bcrypt')

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
		nickName: Joi.string().max(20).required(),		
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(20).regex(/[a-zA-Z0-9]{6,30}/).required()
	})
	return Joi.validate(obj, schema);
}

userSchema.pre('save', async function(next)  {
	const salt =	await bcrypt.genSalt(12);
	const hash = await bcrypt.hash(this.password, salt).catch((err) => next(err));
	this.password = hash
      next()
})

module.exports = mongoose.model('User', userSchema);
