const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: {
		type: Schema.Types.String
    },
	lastName: {
		type: Schema.Types.String
    },
	nickName: {
		type: Schema.Types.String
	},
	email: {
		type: Schema.Types.String
    },
	password: {
		type: Schema.Types.String
	},
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
