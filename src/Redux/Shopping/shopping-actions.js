import * as actionTypes from './shopping-types';

export const addToCart = (itemID, value) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: itemID,
			seat: value,
		},
	};
};

export const removeFromCart = (itemID) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: {
			id: itemID,
		},
	};
};

export const adjustSeat = (itemID, value) => {
	return {
		type: actionTypes.ADJUST_SEAT,
		payload: {
			id: itemID,
			seat: value,
		},
	};
};

export const loadCurrentItem = (item) => {
	return {
		type: actionTypes.LOAD_CURRENT_ITEM,
		payload: item,
	};
};

export const searchFromData = (itemID, value, value, value) => {
	return {
		type: actionTypes.SEARCH_FROM_DATA,
		payload: {
			id: itemID,
			departCity: value,
			arriveCity: value,
			date: value,
		},
	};
};
