const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

const accountSchema = new Schema({
	firstName: {
		type: Schema.Types.String,
		required: true
    },
	lastName: {
		type: Schema.Types.String,
		required: true
    },
	nickName: {
		type: Schema.Types.String,
		required: true
	},
	email: {
		type: Schema.Types.String,
		required: true
    },
	password: {
		type: Schema.Types.String,
		required: true
	},
	confirmed: {
		type: Schema.Types.Boolean,
		default: false,
	},
	reset_password_token: {
		type: Schema.Types.String,
		default: ''
	},
	reset_password_expires: {
		type: Schema.Types.Date,
		default: null
  }
});

accountSchema.pre('save', async function(next)  {
	const salt =	await bcrypt.genSalt(12);
	const hash = await bcrypt.hash(this.password, salt).catch((err) => next(err));
	this.password = hash
      next()
})

module.exports = mongoose.model('Account', accountSchema);
