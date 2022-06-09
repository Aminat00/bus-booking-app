import React from 'react';

import GridBootstrap from '../mui_components/GridBootstrap';
import ResponsiveAppBar from '../mui_components/MenuBar';
import Results from './Results';

function ShowResultMain() {
	return (
		<div>
			<ResponsiveAppBar />
			<GridBootstrap />
			<Results />
		</div>
	);
}

export default ShowResultMain;
