import React from 'react';
import '../../assets/styles/mainpage.css';
import ResponsiveAppBar from '../mui_components/MenuBar';
import FullWidthGrid from '../mui_components/Grid';

function Header() {
	return (
		<div className='header'>
			<ResponsiveAppBar />
			<div style={{ margin: '20% 5%' }}>
				<FullWidthGrid />
			</div>
		</div>
	);
}

export default Header;
