const express = require('express');
const cors = require('cors');
require('./db/config');
const PORT = process.env.PORT || 8080;
const inspdatesModel = require('./db/InspDates');
const registerationModel = require('./db/Register');
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, ()=>console.log("server is running"))

//register in mongo DB
app.post("/register", async(req, res)=>{
	const data = new registerationModel(req.body)
	await data.save()
	res.send({success: true, message: "data saved successfully", data:data})
});

//read data
app.get("/getinspdates", async(req, res)=>{
	const data = await inspdatesModel.find({})
	console.log(data.data)
	res.json({success: true, data:data})
});

//save data in mongo DB
app.post("/addinspdates", async(req, res)=>{
	const data = new inspdatesModel(req.body)
	await data.save()
	res.send({success: true, message: "data saved successfully", data:data})
});

//update data
app.put("/updateinspdates", async(req, res)=>{
	const{_id,...rest} = req.body
	const data = await inspdatesModel.updateOne({_id: _id}, rest)
	res.send({success: true, message:"data updated successfully", data: data})
});

//delete data
app.delete("/delete/:id", async(req, res)=>{
	const id = req.params.id
	const data = await inspdatesModel.deleteOne({_id: id})
	res.send({success: true, message:"data deleted successfully", data: data})
});
