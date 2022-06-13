import * as actionTypes from '../deposit-types';

export const depositMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.DEPOSIT_TO_CART,
			payload: amount,
		});
	};
};

export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.WITHDRAW_FROM_CART,
			payload: amount,
		});
	};
};
