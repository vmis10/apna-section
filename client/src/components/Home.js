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
	// initial state declaration of name, email, year prop
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		year: ""
	});
	const [formDataEdit, setFormDataEdit] = useState({
		name: "",
		email: "",
		year: "",
		_id: ""
	});
	const [dataList, setDataList] = useState([]);
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
		const data = await axios.post("/create",formData);
		if (data.data.success) {
			getFetchData()
		}
	}
	const getFetchData = async()=>{
		const data = await axios.get("/");
		const dataObj = data.data;
		if (dataObj.success) {
			setDataList(dataObj.data);
		}
	}
	useEffect(()=>{
		//getFetchData()
	},[]);
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
			<div className="functionComponent">
				<form onSubmit={handleSubmit}>
					<p>Change Name: <span><input type="text" name="name" id="name" value={formData.name} onChange={handleOnChange}/></span></p>
					<p>Change Email: <span><input type="text" name="email" id="email" value={formData.email} onChange={handleOnChange}/></span></p>
					<p>Change Year: <span>
						<select id="year" name="year" value={formData.year} onChange={handleOnChange}>
							<option>Select</option>
							<option>2023</option>
							<option>2024</option>
						</select>
					</span></p>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}