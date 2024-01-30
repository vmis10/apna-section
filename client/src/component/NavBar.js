import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
function NavBar () {
	return (
		<div>
			<ul>
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/positions'>positions</NavLink></li>
			</ul>
		</div>
	)
}
export default NavBar;