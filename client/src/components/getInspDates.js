import React from 'react';
import {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';

function getInspDates (props) {
	const [data, setData] = useState({
		ptandcrossing: "",
		electricGen: "",
		trd: "",
		trackpwi: "",
		ssd: ""
	});
	const [dataList, setDataList] = useState([]);
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
							<th>Name</th>
							<th>Email</th>
							<th>Year</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							dataList.map((el, i)=>{
								return (
									<tr key={i}>
										<td>{el.name}</td>
										<td>{el.email}</td>
										<td>{el.year}</td>
										<td>
											<Button onClick={()=>handleEdit(el)}>Edit</Button>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</Table>
			</div>
	)
}
export default withRouter(UpdateInspDates);