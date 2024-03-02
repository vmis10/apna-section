const mongoose = require('mongoose');

const maintCircularData = mongoose.Schema({
	title: { type: String, trim: true},
	link: { type: String, trim: true},
}, {
	timeStamp: true
});

module.exports = mongoose.model("maintcirculars", maintCircularData);