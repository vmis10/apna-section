import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";
import {Button, Table} from 'react-bootstrap';

// props getting in function and showing 
function Student (props) {
	return (
		<div> 
			<p>This is function component example</p>
			<p>Name - {props.name}</p>
			<p>Email ID- {props.email}</p>
		</div>
	);
}

//functional component example
export default function Home () {
	const [formDataEdit, setFormDataEdit] = useState({
		name: "",
		email: "",
		year: "",
		_id: ""
	});


	const handleDelete = async(id)=>{
		const data = await axios.delete("/delete/"+id);
		if (data.data.success) {
			getFetchData()
			console.log(data)
		}
	}
	const handleUpdate = async(e)=>{
		e.preventDefault()
		const data = await axios.put("/update", formDataEdit);
		if (data.data.success) {
			getFetchData()
			console.log(data)
		}
	}
	const handleEditOnChange = async (e)=>{
		const {value, name} = (e.target)
		setFormDataEdit((preve)=>{
			return{
				...preve,
				[name]: value
			}
		})

	}
	const handleEdit = async(el)=>{
		setFormDataEdit(el)
	}
	return (
		<div>
		</div>
	);
}