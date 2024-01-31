import React from 'react';
import {useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import ModalTemp from './ModalTemp';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080/";

function GetInspDates () {
	const [dataList, setDataList] = useState([]);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	const getFetchData = async()=>{
		const data = await axios.get("/getinspdates");
		const dataObj = data.data;
		if (dataObj.success) {
			setDataList(dataObj.data);
		}
	}
	useEffect(()=>{
		getFetchData()
	},[]);
	return (
		<div className="tableContainer">
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
									<td>{el.name}</td>
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
			<ModalTemp show={show} onClose={handleClose}/>
		</div>
	)
}
export default GetInspDates;