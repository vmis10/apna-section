const express = require('express');
const cors = require('cors');
const Jwt = require('jsonwebtoken');
const JwtKey = 'e-dashboard';
require('./db/config');
const PORT = process.env.PORT || 8080;
const inspdatesModel = require('./db/InspDates');
const maintCircularModel = require('./db/maintCircular');
const signupModel = require('./db/Signup');
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, ()=>console.log("server is running"))

function verifyToken (req, res, next) {
	let token = req.headers['authorization'];
	if (token) {
		token = token.split(' ')[1];
		Jwt.verify(token, JwtKey, (err, valid)=>{
			if (err) {
				res.status(401).send({message: "please provide valid token"})
			} else {
				next();
			}
		});
	} else {
		res.status(403).send({message: "please add token"})
	}
}

//register in mongo DB
app.post("/signup", async(req, res)=>{
	let user = await signupModel.findOne(req.body);
	if (user) {
	    return res.send({success: false, message: 'Your are already registered with us'});
	} else {
		const data = new signupModel(req.body);
		const result = await data.save();
		result.password = undefined;
		Jwt.sign({result}, JwtKey, {expiresIn: "2h"}, (err, token)=> {
			if (err) {
				res.send({message: "Something went wrong, please try later"})
			}
			res.send({success: true, message: "registered successfully", data:result, auth:token})
		})
	}
});

app.post("/login", async(req, res)=>{
	if (req.body.password && req.body.emailid) {
		const data = await signupModel.findOne(req.body).select("-password")
		if (data) {
			Jwt.sign({data}, JwtKey, {expiresIn: "2h"}, (err, token)=> {
				if (err) {
					res.send({message: "Something went wrong, please try later"})
				}
				res.send({success: true, message: "user found", data:data, auth:token})
			})
		} else {
			res.send({message: "No user found"})
		}
	} else {
		res.send({message: "No user found"})
	}
});

//read data
app.get("/getinspdates/:userId", verifyToken, async(req, res)=>{
	let data = await inspdatesModel.find({
		"$or": [
			{userId: {$regex: req.params.userId}}
		]
	})
	//const data = await inspdatesModel.findOne({userId: req.params.userId})
	if (data) {
		res.json({success: true, data:data})
	} else {
		res.send({message: "No data found"})
	}
});

app.get("/getmaintcirculars", async(req, res)=>{
	let data = await maintCircularModel.find({})
	if (data) {
		res.json({success: true, data:data})
	} else {
		res.send({message: "No data found"})
	}
});

//save data in mongo DB
app.post("/addmaintcirculars", verifyToken, async(req, res)=>{
	const data = new maintCircularModel(req.body)
	await data.save()
	res.send({success: true, message: "data saved successfully", data:data})
});

//save data in mongo DB
app.post("/addinspdates", verifyToken, async(req, res)=>{
	const data = new inspdatesModel(req.body)
	await data.save()
	res.send({success: true, message: "data saved successfully", data:data})
});

//update data
app.put("/updateinspdates", verifyToken, async(req, res)=>{
	const{_id,...rest} = req.body
	const data = await inspdatesModel.updateOne({_id: _id}, rest)
	res.send({success: true, message:"data updated successfully", data: data})
});

//delete data
app.delete("/delete/:id", verifyToken, async(req, res)=>{
	const id = req.params.id
	const data = await inspdatesModel.deleteOne({_id: id})
	res.send({success: true, message:"data deleted successfully", data: data})
});
