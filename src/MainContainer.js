import React from 'react';

import './assets/styles/App.css';
import ShowResultMain from './components/ShowResultsPage/ShowResultMain';
import HomePage from './components/HomePage/HomePage';
import Payment from './components/PaymentPage/Payment';
import Register from './components/HomePage/Register';
import Login from './components/HomePage/Login';
import Support from './components/HomePage/Support';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
					<Route path='Support' element={<Support />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
