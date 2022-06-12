export const register = () => {
	return {
		type: 'REGISTER',
		payload: {
			id: new Date().getTime(),
			fName,
			email,
			password,
		},
	};
};
