import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './HomePage/Header';
import Offers from './HomePage/Offers';
import TopRoutes from './HomePage/TopRoutes';
import Footer from './HomePage/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import ShowResultMain from './ShowResultsPage/ShowResultMain';
import HomePage from './HomePage/HomePage';

export default function MainContainer() {
	return (
		<div className='Maindiv'>
			<HomePage />
		</div>
	);
}
