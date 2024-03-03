import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Table, Form, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import * as Constants  from './Constants';
axios.defaults.baseURL = Constants.URL;

export default function Login () {
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({
  		emailid: "",
	    password: ""
	});
	useEffect(()=>{
	    const auth = localStorage.getItem("token");
	    if (auth) {
	      navigate('/getinspdates');
	    }
	});
	const handleOnChange = (e)=>{
  		const {value, name} = (e.target)
  		setLoginData((preve)=>{
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
		const data = await axios.post("/login",loginData);
		if (data.data.auth) {
			localStorage.setItem("user", JSON.stringify(data.data.data));
			localStorage.setItem("token", JSON.stringify(data.data.auth));
			navigate('/getinspdates');			
		}
		else {
			alert(data.data.message)
		}
	}
	return (
		<>
			<Form noValidate validated={validated} onSubmit={handleValidation}>
	            <Form.Group as={Col} md={{span: 4, offset: 4}} controlId="emailid" className="mt-3">
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
		            <Button variant="primary" type="submit">Login</Button>
		        </Col>
	        </Form> 
		</>
	);
}