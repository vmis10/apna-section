import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Table, Form, Col, Row} from 'react-bootstrap';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";

export default function Signup () {

	// const handleDelete = async(id)=>{
	// 	const data = await axios.delete("/delete/"+id);
	// 	if (data.data.success) {
	// 		getFetchData()
	// 		console.log(data)
	// 	}
	// }
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();
	const [signupData, setSignupData] = useState({
		name: "",
  		emailid: "",
	    password: ""
	});
	useEffect(()=>{
	    const auth = localStorage.getItem("user");
	    if (auth) {
	      navigate('/getinspdates');
	    }
	});
	const handleOnChange = (e)=>{
  		const {value, name} = (e.target)
  		setSignupData((preve)=>{
	      return{
	        ...preve,
	        [name]: value
	      }
	    });
	}
    const handleValidation = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
            handleSubmit(event);
        }
        setValidated(true);
    };
    const handleSubmit = async(e)=>{
		e.preventDefault();
		const data = await axios.post("/signup",signupData);
		alert(data.data.message);
		if (data.data.auth) {
			localStorage.setItem("user", JSON.stringify(data.data.data));
			localStorage.setItem("token", JSON.stringify(data.data.auth));
			navigate('/getinspdates');			
		}
	}
	return (
		<>
			<Form noValidate validated={validated} onSubmit={handleValidation}>
	            <Form.Group as={Col} md={{span: 4, offset: 4}} controlId="name" className="mt-3">
	                <Form.Label column>User Name</Form.Label>
	                <Form.Control type="text" required name="name" placeholder="Enter your user name" onChange={handleOnChange}/>
	                <Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
	            </Form.Group>
	            <Form.Group as={Col} md={{span: 4, offset: 4}} controlId="emailid" className="mt-2">
	                <Form.Label>Email</Form.Label>
	                <Form.Control type="email" required name="emailid" placeholder="Enter your email" onChange={handleOnChange}/>
	                <Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
	            </Form.Group>
	            <Form.Group as={Col} md={{span: 4, offset: 4}} controlId="password" className="mt-2">
	                <Form.Label>Password</Form.Label>
	                <Form.Control type="password" required name="password" placeholder="Enter your password" onChange={handleOnChange}/>
	            	<Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
	            </Form.Group>
		        <Col md={{span: 4, offset: 4}} className="mt-3">
	            	<Button variant="primary" type="submit">Signup</Button>
	            </Col>
	        </Form> 
		</>
	);
}