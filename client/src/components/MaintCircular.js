import React from 'react';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";

function MaintCircular () {
	const token = 'Bearer ' + JSON.parse(localStorage.getItem('token'));
	const [dataList, setDataList] = useState([]);
	const [show, setShow] = useState(false);
	const [addSection, setAddSection] = useState(false);
	const [formData, setFormData] = useState({
  		title: "",
  		link: ""
	});
	const [validated, setValidated] = useState(false);
	const handleSubmit = async(e)=>{
		e.preventDefault();
		const data = await axios.post("/addmaintcirculars",formData, {
			headers: {
				Authorization: token
			}});
		if (data.data.success) {
			handleClose();
			getFetchData();
		}
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
	const handleClose = () => {
		setShow(false);
		setAddSection(false);
	}
	const handleShow = () => {
  		setShow(true);
  		setAddSection(true);
  	}
  	const handleOnChange = (e)=>{
  		const {value, name} = (e.target)
  		setFormData((preve)=>{
	      return{
	        ...preve,
	        [name]: value
	      }
	    });
	}
	const getFetchData = async()=>{
		const data = await axios.get("/getmaintcirculars", {
			headers: {
				Authorization: token
			}
		});
		const dataObj = data.data;
		if (dataObj.success) {
			setDataList(dataObj.data);
		}
	}
	useEffect(()=>{
		getFetchData()
	},[]);
	return (
		<>
			<h1>S&T maintenance Circulars</h1>
			{
				dataList.map((el, i)=>{
					return (
						<li key={i}>
							<a href={el.link}><span>{el.title}</span></a>
						</li>
					)
				})
			}
			<Button type="button" onClick={handleShow}>Add Inspections</Button>
			{addSection && (<Form noValidate validated={validated} onSubmit={handleValidation}>
	            <Form.Group className="mb-3" controlId="title">
	                <Form.Label>Title</Form.Label>
	                <Form.Control type="text" required name="title" placeholder="Title" value={formData.title} onChange={handleOnChange} />
	                <Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
	            </Form.Group>
	            <Form.Group className="mb-3" controlId="link">
	                <Form.Label>Drive Link</Form.Label>
	                <Form.Control.Feedback type="invalid">This field is mandatory</Form.Control.Feedback>
	                <Form.Control type="text" name="link" placeholder="Link" value={formData.link} onChange={handleOnChange} />
	            </Form.Group>
	            <Button variant="primary" type="submit">Save</Button>
	        </Form>)}
		</>
	)
}
export default MaintCircular;