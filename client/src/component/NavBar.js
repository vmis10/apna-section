import React, {Component} from 'react';
import {Link} from 'react-router-dom';
function NavBar () {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Link to='/positions'>positions</Link>
		</div>
	)
}
export default NavBar;