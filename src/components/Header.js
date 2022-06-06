import React from 'react';
import '../styles/header.css';
import ResponsiveAppBar from './MenuBar';
function Header() {
	return (
		<div className='header'>
			<ResponsiveAppBar />
		</div>
	);
}

export default Header;
