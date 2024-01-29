import React, {Component} from 'react';
import {useState} from 'react';
import {Home} from './component/Home';
import {Positions} from './component/Positions';
import NavBar from './component/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//functional component example
export function App () {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/positions' element={<Positions/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
        