import React, { useEffect, useState } from 'react';
import GridBootstrap from '../mui_components/GridBootstrap';
import ResponsiveAppBar from '../mui_components/MenuBar';
import Results from './Results';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addRoutes, fetchAsyncRoutesArriveCount, fetchAsyncRoutesDate, fetchAsyncRoutesDepartCount } from '../Redux/Routes/routeSlice';

const ShowResultMain = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncRoutesDepartCount());
		dispatch(fetchAsyncRoutesArriveCount());
		dispatch(fetchAsyncRoutesDate());
	}, [dispatch]);

	return (
		<div>
			<ResponsiveAppBar />
			<GridBootstrap />
			<Results />
		</div>
	);
};

export default ShowResultMain;
