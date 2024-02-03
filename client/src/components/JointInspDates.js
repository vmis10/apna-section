import React from 'react';
import {useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import InspDatesModal from './InspDatesModal';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";

function JointInspDates () {
	const token = 'Bearer ' + JSON.parse(localStorage.getItem('token'));
	const [dataList, setDataList] = useState([]);
	const [show, setShow] = useState(false);
	const [addSection, setAddSection] = useState(false);
	const [editSection, setEditSection] = useState(false);
  	const [formData, setFormData] = useState({
  		stniblc: "",
	    ptandcrossing: "",
	    electricGen: "",
	    trd: "",
	    trackpwi: "",
	    ssd: ""
	});
	const [formDataEdit, setFormDataEdit] = useState({
		stniblc: "",
	    ptandcrossing: "",
	    electricGen: "",
	    trd: "",
	    trackpwi: "",
	    ssd: "",
		_id: ""
	});
	const handleClose = () => {
		setShow(false);
		setAddSection(false);
		setEditSection(false);
	}
	const handleShow = () => {
  		setShow(true);
  		setAddSection(true);
  	}
  	const handleEdit = async(el)=>{
		setShow(true);
		setEditSection(true);
		setFormDataEdit(el);
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
	const handleEditOnChange = async (e)=>{
		const {value, name} = (e.target)
		setFormDataEdit((preve)=>{
			return{
				...preve,
				[name]: value
			}
		})

	}
	const getFetchData = async()=>{
		const data = await axios.get("/getinspdates", {
			headers: {
				Authorization: token
			}
		});
		const dataObj = data.data;
		console.log(dataObj)
		if (dataObj.success) {
			setDataList(dataObj.data);
		}
	}
	const handleSubmit = async(e)=>{
		e.preventDefault();
		const data = await axios.post("/addinspdates",formData, {
			headers: {
				Authorization: token
			}});
		if (data.data.success) {
			handleClose();
			getFetchData();
		}
	}
	const handleUpdate = async(e)=>{
		e.preventDefault();
		const data = await axios.put("/updateinspdates", formDataEdit, {
			headers: {
				Authorization: token
			}});
		if (data.data.success) {
			handleClose();
			getFetchData();
		}
	}
	useEffect(()=>{
		getFetchData()
	},[]);
	return (
		<>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Station/IB/LC</th>
						<th>Point & Crossing</th>
						<th>Electric General</th>
						<th>TRD Track Ckt</th>
						<th>PWI Track Ckt</th>
						<th>SSD</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						dataList.map((el, i)=>{
							return (
								<tr key={i}>
									<td>{el.stniblc}</td>
									<td>{el.ptandcrossing}</td>
									<td>{el.electricGen}</td>
									<td>{el.trd}</td>
									<td>{el.trackpwi}</td>
									<td>{el.ssd}</td>
									<td>
										<Button onClick={()=>handleEdit(el)}>Edit</Button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</Table>
			<Button type="button" onClick={handleShow}>Add Inspections</Button>
			{addSection && (
				<InspDatesModal show={show} onClose={handleClose} handleSubmit={handleSubmit} rest={formData} handleOnChange={handleOnChange} />
			)}
			{editSection && (
				<InspDatesModal show={show} onClose={handleClose} handleSubmit={handleUpdate} rest={formDataEdit} handleOnChange={handleEditOnChange} />
			)}
		</>
	)
}
export default JointInspDates;