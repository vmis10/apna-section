import React from 'react';
import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";

export function SetInspDates () {	
	const handleOnChange = (e)=>{
		const {value, name} = (e.target)
		setFormData((preve)=>{
			return{
				...preve,
				[name]: value
			}
		})
	}
	const handleSubmit = async(e)=>{
		e.preventDefault();
		const data = await axios.post("/addinspdates",formData);
		if (data.data.success) {
			getFetchData()
		}
	}
	return (
		<div>
			<Form onSubmit={handleSubmit}>
			    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
			        <Form.Label>Email address</Form.Label>
			        <Form.Control type="date" name="ptandcrossingdate" placeholder="DateRange" value={formData.ptandcrossing} onChange={handleOnChange} />
			    </Form.Group>
			    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
			        <Form.Label>Email address</Form.Label>
			        <Form.Control type="date" name="electricGendate" placeholder="DateRange" value={formData.electricGen} onChange={handleOnChange} />
			    </Form.Group>
			    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
			        <Form.Label>Email address</Form.Label>
			        <Form.Control type="date" name="trddate" placeholder="DateRange" value={formData.trd} onChange={handleOnChange} />
			    </Form.Group>
			    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
			        <Form.Label>Email address</Form.Label>
			        <Form.Control type="date" name="trackpwidate" placeholder="DateRange" value={formData.trackpwi} onChange={handleOnChange} />
			    </Form.Group>
			    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
			        <Form.Label>Email address</Form.Label>
			        <Form.Control type="date" name="trackpwidate" placeholder="DateRange" value={formData.ssd} onChange={handleOnChange} />
			    </Form.Group>
		    </Form>
		</div>
	);
}