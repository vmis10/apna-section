const mongoose = require('mongoose');
const MONGODB_CONNECT_URI = process.env.MONGODB_CONNECT_URI || "mongodb://127.0.0.1:27017/apna-section";
mongoose.connect(MONGODB_CONNECT_URI)
.then(()=>{
	console.log("connect to DB")
})
.catch((err)=>console.log(err));