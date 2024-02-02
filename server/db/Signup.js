const mongoose = require('mongoose');

const signupData = mongoose.Schema({
	emailid: { type: String, required: true, trim: true},
	password:  { type: String, required: true, trim: true}
}, {
	timeStamp: true
});

module.exports = mongoose.model("signup", signupData);