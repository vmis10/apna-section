import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Table, Form, Col, Row} from 'react-bootstrap';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";

export default function Login () {
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({
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
			<h1>Login</h1>
			<Form noValidate validated={validated} onSubmit={handleValidation}>
				<Row className="mb-3">
		            <Form.Group as={Col} md="4" controlId="emailid">
		                <Form.Label>Email</Form.Label>
		                <Form.Control type="email" required name="emailid" placeholder="Enter your email" onChange={handleOnChange}/>
		                <Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
		            </Form.Group>
		        </Row>
		        <Row className="mb-3">
		            <Form.Group as={Col} md="4" controlId="password">
		                <Form.Label>Password</Form.Label>
		                <Form.Control type="password" required name="password" placeholder="Enter your password" onChange={handleOnChange}/>
		            	<Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
		            </Form.Group>
		        </Row>
	            <Button variant="primary" type="submit">Login</Button>
	        </Form> 
		</>
	);
}