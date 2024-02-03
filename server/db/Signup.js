const mongoose = require('mongoose');

const signupData = mongoose.Schema({
	name: { type: String, required: true, trim: true},
	emailid: { type: String, required: true, trim: true},
	password:  { type: String, required: true, trim: true}
}, {
	timeStamp: true
});

module.exports = mongoose.model("signup", signupData);