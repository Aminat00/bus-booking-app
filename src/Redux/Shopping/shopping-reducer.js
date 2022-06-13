import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
	routes: [
		{
			id: 1,
			agencyName: 'Freedom Travel',
			departTime: '9:30',
			arriveTime: '16:30',
			duration: '7h',
			price: 50,
			departCity: 'Berlin',
			arriveCity: 'Munich',
			date: '13/06/2022',
			SeatNo: null,
		},
		{
			id: 2,
			agencyName: ' Travel Hope',
			departTime: '13:30',
			arriveTime: '20:30',
			duration: '7h',
			price: 60,
			departCity: 'Berlin',
			arriveCity: 'Munich',
			date: '13/06/2022',
			SeatNo: null,
		},
		{
			id: 3,
			agencyName: ' Travel Hope',
			departTime: '13:30',
			arriveTime: '20:30',
			duration: '7h',
			price: 60,
			depratCity: 'Munich',
			arriveCity: 'Berlin',
			date: '14/06/2022',
			SeatNo: null,
		},
		{
			id: 4,
			agencyName: ' Travel Hope',
			departTime: '11:30',
			arriveTime: '18:30',
			duration: '7h',
			price: 60,
			departCity: 'Munich',
			arriveCity: 'Berlin',
			date: '14/06/2022',
			SeatNo: null,
		},
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
