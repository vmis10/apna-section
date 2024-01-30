import React, {Component} from 'react';
import {useState} from 'react';
import HomeContainer from './containers/HomeContainer';
import {Positions} from './components/Positions';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//functional component example
export function App () {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar/>
				<Routes>
					<Route path='/' element={<HomeContainer/>}/>
					<Route path='/positions' element={<Positions/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
        