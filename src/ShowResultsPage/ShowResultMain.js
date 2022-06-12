import React from 'react';

import GridBootstrap from '../mui_components/GridBootstrap';
import ResponsiveAppBar from '../mui_components/MenuBar';
import Results from './Results';
import { connect } from 'react-redux';

const ShowResultMain = ({ routes }) => {
	return (
		<div>
			<ResponsiveAppBar />
			<GridBootstrap />
			{routes && routes.map((route) => <Results key={route.id} routeData={route} />)}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		routes: state.shop.routes,
	};
};

export default connect(mapStateToProps)(ShowResultMain);
