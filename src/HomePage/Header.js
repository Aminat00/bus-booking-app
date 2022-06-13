import React from 'react';
import '../styles/mainpage.css';
import ResponsiveAppBar from '../mui_components/MenuBar';
import FullWidthGrid from '../mui_components/Grid';
import jsonData from '../api/MOCK_DATA_BUS.json';

function Header() {
	return (
		<div className='header'>
			<ResponsiveAppBar />
			<FullWidthGrid dataFrom={jsonData} dataTo={jsonData} dataTime={jsonData} />
		</div>
	);
}

export default Header;
