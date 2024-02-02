const express = require('express');
const cors = require('cors');
require('./db/config');
const PORT = process.env.PORT || 8080;
const inspdatesModel = require('./db/InspDates');
const signupModel = require('./db/Signup');
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, ()=>console.log("server is running"))

//register in mongo DB
app.post("/signup", async(req, res)=>{
	const data = new signupModel(req.body);
	const result = await data.save();
	result.password = undefined;
	res.send({success: true, message: "registered successfully", data:result})
});

app.post("/login", async(req, res)=>{
	if (req.body.password && req.body.emailid) {
		const data = await signupModel.findOne(req.body).select("-password")
		if (data) {
			res.send({success: true, message: "user found", data:data})
		} else {
			res.send({result: "No user found"})
		}
	} else {
		res.send({result: "No user found"})
	}
});

//read data
app.get("/getinspdates", async(req, res)=>{
	const data = await inspdatesModel.find({})
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
