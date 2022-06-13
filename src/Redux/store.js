import { configureStore } from '@reduxjs/toolkit';
import routeSlice from './Routes/routeSlice';
import routesReducer from './Routes/routeSlice';

export const store = configureStore({
	reducer: {
		routes: routesReducer,
	},
});
