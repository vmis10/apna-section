import React from 'react';

export default function Home () {

	const handleDelete = async(id)=>{
		const data = await axios.delete("/delete/"+id);
		if (data.data.success) {
			getFetchData()
			console.log(data)
		}
	}
	return (
		<div>
			<h1>This is home page</h1>
		</div>
	);
}