import React from 'react';

import './App.css';
import ShowResultMain from './ShowResultsPage/ShowResultMain';
import HomePage from './HomePage/HomePage';
import Payment from './Payment/Payment';
import Register from './HomePage/Register';
import Login from './HomePage/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function MainContainer() {
	return (
		<div className='Maindiv'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='ShowResultMain' element={<ShowResultMain />} />
					<Route path='Payment' element={<Payment />} />
					<Route path='Login' element={<Login />} />
					<Route path='Register' element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
