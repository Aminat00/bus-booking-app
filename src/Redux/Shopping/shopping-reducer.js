import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
	routes: [
		{ id: 1, departCountry: 'Czech Republic', arriveCountry: 'Ukraine', date: '06/24/2022', agencyName: 'Vimbo', departTime: '1:35 AM', arriveTime: '10:32 AM', duration: 28, price: '$86.81', seatNo: null },
		{ id: 2, departCountry: 'Poland', arriveCountry: 'Russia', date: '07/30/2022', agencyName: 'Browsebug', departTime: '2:59 AM', arriveTime: '6:29 PM', duration: 27, price: '$254.71', seatNo: null },
		{ id: 3, departCountry: 'China', arriveCountry: 'China', date: '06/20/2022', agencyName: 'Oyope', departTime: '11:09 PM', arriveTime: '1:46 PM', duration: 12, price: '$225.55', seatNo: null },
		{ id: 4, departCountry: 'China', arriveCountry: 'Greece', date: '06/22/2022', agencyName: 'Eidel', departTime: '1:32 AM', arriveTime: '1:34 AM', duration: 22, price: '$281.23', seatNo: null },
		{ id: 5, departCountry: 'Philippines', arriveCountry: 'Dominican Republic', date: '07/16/2022', agencyName: 'Feedfish', departTime: '7:41 PM', arriveTime: '9:05 AM', duration: 9, price: '$139.84', seatNo: null },
		{ id: 6, departCountry: 'United States', arriveCountry: 'Ukraine', date: '06/19/2022', agencyName: 'Centizu', departTime: '11:17 AM', arriveTime: '12:21 AM', duration: 43, price: '$287.92', seatNo: null },
		{ id: 7, departCountry: 'China', arriveCountry: 'Malaysia', date: '06/26/2022', agencyName: 'Brainverse', departTime: '10:24 PM', arriveTime: '3:24 PM', duration: 42, price: '$277.52', seatNo: null },
		{ id: 8, departCountry: 'Poland', arriveCountry: 'Indonesia', date: '07/22/2022', agencyName: 'Ntag', departTime: '2:30 AM', arriveTime: '8:01 AM', duration: 10, price: '$144.17', seatNo: null },
		{ id: 9, departCountry: 'Slovenia', arriveCountry: 'Egypt', date: '06/16/2022', agencyName: 'Vinder', departTime: '9:57 PM', arriveTime: '12:49 PM', duration: 26, price: '$104.91', seatNo: null },
		{ id: 10, departCountry: 'Japan', arriveCountry: 'China', date: '07/29/2022', agencyName: 'Wikizz', departTime: '8:22 PM', arriveTime: '10:56 AM', duration: 37, price: '$258.54', seatNo: null },
		{ id: 11, departCountry: 'Indonesia', arriveCountry: 'United States', date: '06/29/2022', agencyName: 'Blogspan', departTime: '4:26 AM', arriveTime: '10:43 PM', duration: 35, price: '$296.34', seatNo: null },
		{ id: 12, departCountry: 'Azerbaijan', arriveCountry: 'Czech Republic', date: '07/12/2022', agencyName: 'Katz', departTime: '7:33 PM', arriveTime: '9:11 AM', duration: 2, price: '$247.52', seatNo: null },
		{ id: 13, departCountry: 'Ukraine', arriveCountry: 'Vietnam', date: '07/14/2022', agencyName: 'Tekfly', departTime: '12:24 PM', arriveTime: '8:13 AM', duration: 20, price: '$249.92', seatNo: null },
		{ id: 14, departCountry: 'China', arriveCountry: 'Brazil', date: '07/30/2022', agencyName: 'Gevee', departTime: '5:26 PM', arriveTime: '7:20 AM', duration: 34, price: '$170.06', seatNo: null },
		{ id: 15, departCountry: 'China', arriveCountry: 'Sweden', date: '07/06/2022', agencyName: 'Centidel', departTime: '10:12 PM', arriveTime: '10:41 AM', duration: 8, price: '$254.02', seatNo: null },
		{ id: 16, departCountry: 'Greece', arriveCountry: 'Portugal', date: '07/04/2022', agencyName: 'Kamba', departTime: '3:22 AM', arriveTime: '6:33 AM', duration: 26, price: '$251.44', seatNo: null },
		{ id: 17, departCountry: 'Bosnia and Herzegovina', arriveCountry: 'Sweden', date: '07/25/2022', agencyName: 'Twinte', departTime: '11:11 PM', arriveTime: '9:04 AM', duration: 19, price: '$232.46', seatNo: null },
		{ id: 18, departCountry: 'Indonesia', arriveCountry: 'Dominican Republic', date: '07/15/2022', agencyName: 'Kamba', departTime: '8:40 PM', arriveTime: '9:11 PM', duration: 22, price: '$247.86', seatNo: null },
		{ id: 19, departCountry: 'Russia', arriveCountry: 'Ukraine', date: '07/14/2022', agencyName: 'Tagcat', departTime: '5:12 PM', arriveTime: '2:02 PM', duration: 41, price: '$252.34', seatNo: null },
		{ id: 20, departCountry: 'Philippines', arriveCountry: 'Japan', date: '06/17/2022', agencyName: 'Centizu', departTime: '9:47 PM', arriveTime: '9:59 PM', duration: 19, price: '$182.19', seatNo: null },
		{ id: 21, departCountry: 'China', arriveCountry: 'Poland', date: '07/15/2022', agencyName: 'Blogtag', departTime: '1:33 PM', arriveTime: '6:53 PM', duration: 42, price: '$290.67', seatNo: null },
	],
	cart: [],
	currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			// Great Item data from products array
			const item = state.products.find((product) => product.id === action.payload.id);
			// Check if Item is in cart already
			const inCart = state.cart.find((item) => (item.id === action.payload.id ? true : false));
			return {
				...state,
				cart: inCart ? state.cart.map((item) => item.id === action.payload.id) : [...state.cart, { ...item, seat: 1 }],
			};
		case actionTypes.REMOVE_FROM_CART:
			return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
		case actionTypes.ADJUST_SEAT:
			return {
				...state,
				cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, seat: action.payload.seat } : item)),
			};

		case actionTypes.LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
