import * as actionTypes from './deposit-types';

const depositReducer = (state = 0, action) => {
	switch (action.type) {
		case actionTypes.DEPOSIT_TO_CART:
			return state + action.payload;
		case actionTypes.WITHDRAW_FROM_CART:
			return state - action.payload;
		default:
			return state;
	}
};

export default depositReducer;
