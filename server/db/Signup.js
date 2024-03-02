const mongoose = require('mongoose');

const signupData = mongoose.Schema({
	name: { type: String, required: true, trim: true},
	emailid: { type: String, index:true, unique:true, required: true, trim: true, sparse:true},
	password:  { type: String, required: true, trim: true}
}, {
	timeStamp: true
});

module.exports = mongoose.model("signup", signupData);