import React from 'react';
import '../styles/header.css';
import ResponsiveAppBar from '../mui_components/MenuBar';

import { Container, Row, Col } from 'react-bootstrap';
import FullWidthGrid from '../mui_components/Grid';
function Header() {
	return (
		<div className='header'>
			<ResponsiveAppBar />
			<FullWidthGrid />
		</div>
	);
}

export default Header;
