import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
	routes: [
		{
			id: 1,
			agencyName: 'Freedom Travel',
			departTime: '17:30',
			arriveTime: '4:30',
			duration: '7h',
			price: 50,
		},
		{
			id: 2,
			agencyName: ' Travel Hope',
			departTime: '7:30',
			arriveTime: '14:30',
			duration: '19h',
			price: 150,
		},
		{
			id: 3,
			agencyName: 'Buzzy Journey',
			departTime: '8:30',
			arriveTime: '19:30',
			duration: '17h',
			price: 30,
		},
	],
	cart: [],
	currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			return {};
		case actionTypes.REMOVE_FROM_CART:
			return {};
		case actionTypes.ADJUST_SEAT:
			return {};
		case actionTypes.LOAD_CURRENT_ITEM:
			return {};
		default:
			return state;
	}
};

export default shopReducer;
