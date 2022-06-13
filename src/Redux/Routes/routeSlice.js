import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const weblink = 'http://localhost:3000/MOCK_DATA_BUS.json';

export const fetchAsyncRoutesDepartCount = createAsyncThunk('routes/fetchAsyncRoutes', async (departCountry) => {
	const response = await axios.get(weblink);
	return response.data;
});

export const fetchAsyncRoutesArriveCount = createAsyncThunk('routes/fetchAsyncRoutes', async (arriveCountry) => {
	const response = await axios.get(weblink);
	return response.data;
});
export const fetchAsyncRoutesDate = createAsyncThunk('routes/fetchAsyncRoutes', async (date) => {
	const response = await axios.get(weblink);
	return response.data;
});
const initialState = {
	routes: {},
	selectedRoute: {},
};

const routeSlice = createSlice({
	name: 'routes',
	initialState,
	reducers: {
		removeSelectedRoute: (state) => {
			state.selectRoute = {};
		},
	},
	extraReducers: {
		[fetchAsyncRoutesDepartCount.pending]: () => {
			console.log('Pending');
		},
		[fetchAsyncRoutesDepartCount.fulfilled]: (state, { payload }) => {
			console.log('Fetched Successfully!');
			return { ...state, Rows: payload };
		},
		[fetchAsyncRoutesDepartCount.rejected]: () => {
			console.log('Rejected!');
		},
	},
});

export const { removeSelectedRow } = routeSlice.actions;
export const getAllRoutes = (state) => state.routes.routes;
export const getSelectedRoute = (state) => state.routes.selectRoute;

export default routeSlice.reducer;
