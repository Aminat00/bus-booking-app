import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Offers from './components/Offers';
import TopRoutes from './components/TopRoutes';
import Footer from './components/Footer';
import ShowResultMain from './components/ShowResultsPage/ShowResultMain';

export default function MainContainer() {
	return (
		<div className='Maindiv'>
			{/* <Header />
			<Offers />
			<TopRoutes />
			<Footer /> */}
			<ShowResultMain />
		</div>
	);
}
