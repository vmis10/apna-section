const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/apna-section")
.then(()=>{
	console.log("connect to DB")
})
.catch((err)=>console.log(err));