import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
	return (
		<>
			<Form noValidate validated={validated} onSubmit={handleValidation}>
				<Row className="mb-3">
		            <Form.Group as={Col} md="4" controlId="emailid">
		                <Form.Label>Email</Form.Label>
		                <Form.Control type="email" required name="stniblc" placeholder="Enter your email" />
		                <Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
		            </Form.Group>
		        </Row>
		        <Row className="mb-3">
		            <Form.Group as={Col} md="4" controlId="password">
		                <Form.Label>Password</Form.Label>
		                <Form.Control type="password" required name="password" placeholder="Enter your password" />
		            	<Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
		            </Form.Group>
		        </Row>
	            <Button variant="primary">Signup</Button>
	        </Form> 
		</>
	);
}