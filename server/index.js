const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

//schema
const schemaData = mongoose.Schema({
	ptandcrossing: Date,
	electricGen: Date,
	trd: Date,
	trackpwi: Date,
	ssd: Date
}, {
	timeStamp: true
});

const userModel = mongoose.model("user", schemaData);

//read data
app.get("/getinspdates", async(req, res)=>{
	const data = await userModel.find({})
	res.json({success: true, data:data})
});

//save data in mongo DB
app.post("/create", async(req, res)=>{
	const data = new userModel(req.body)
	await data.save()
	res.send({success: true, message: "data saved successfully", data:data})
});

//update data
app.put("/update", async(req, res)=>{
	const{_id,...rest} = req.body
	const data = await userModel.updateOne({_id: _id}, rest)
	res.send({success: true, message:"data updated successfully", data: data})
});

//delete data
app.delete("/delete/:id", async(req, res)=>{
	const id = req.params.id
	const data = await userModel.deleteOne({_id: id})
	res.send({success: true, message:"data deleted successfully", data: data})
});

mongoose.connect("mongodb://127.0.0.1:27017/apna-section")
.then(()=>{
	console.log("connect to DB")
	app.listen(PORT, ()=>console.log("server is running"))
})
.catch((err)=>console.log(err));