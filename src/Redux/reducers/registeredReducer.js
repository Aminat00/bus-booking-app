const initialState = {
	users: [],
	loggedInUser: null,
	products: [
		{
			id: 1,
			name: 'Pen',
			price: 5,
		},
		{
			id: 2,
			name: 'Pen',
			price: 5,
		},
		{
			id: 3,
			name: 'Pen',
			price: 5,
		},
	],
	cart: [],
};
const registeredReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REGISTER':
			return {
				...state,
				users: [...state.users, action.payload],
			};
		default:
			return state;
	}
};
export default registeredReducer;
