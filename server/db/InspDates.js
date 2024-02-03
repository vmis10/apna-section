const mongoose = require('mongoose');

const inspDatesData = mongoose.Schema({
	userId: { type: String, trim: true},
	stniblc: { type: String, required: true, trim: true},
	ptandcrossing:  { type: String, trim: true},
	electricGen: { type: String, trim: true},
	trd: { type: String, trim: true},
	trackpwi: { type: String, trim: true},
	ssd: { type: String, trim: true}
}, {
	timeStamp: true
});

module.exports = mongoose.model("inspdates", inspDatesData);