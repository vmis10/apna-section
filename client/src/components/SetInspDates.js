import React from 'react';
import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";

export function SetInspDates () {
	const [formData, setFormData] = useState({
		ptandcrossing: "",
		electricGen: "",
		trd: "",
		trackpwi: "",
		ssd: ""
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
		const data = await axios.post("/addinspdates",formData);
		if (data.data.success) {
			getFetchData()
		}
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