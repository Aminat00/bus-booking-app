import React from 'react';
import '../styles/mainpage.css';
import ResponsiveAppBar from '../mui_components/MenuBar';

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
