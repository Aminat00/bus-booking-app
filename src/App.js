import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Offers from './components/Offers';
import TopRoutes from './components/TopRoutes';

export default function MainContainer() {
	return (
		<div className='Maindiv'>
			<Header />
			<Offers />
			<TopRoutes />
		</div>
	);
}
