import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/HomePage/Header';
import Offers from './components/HomePage/Offers';
import TopRoutes from './components/HomePage/TopRoutes';
import Footer from './components/HomePage/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import ShowResultMain from './components/ShowResultsPage/ShowResultMain';

export default function MainContainer() {
	return (
		<div className='Maindiv'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
			</Routes>
			{/* <Header />
			<Offers />
			<TopRoutes />
			<Footer /> */}
			<ShowResultMain />
		</div>
	);
}
