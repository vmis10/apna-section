const mongoose = require('mongoose');

const registerData = mongoose.Schema({
	emailid: { type: String, required: true, trim: true},
	password:  { type: String, required: true, trim: true}
}, {
	timeStamp: true
});

module.exports = mongoose.model("registeration", registerData);