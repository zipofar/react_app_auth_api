export const checkLoginPass = (login, password) => {
	return login == 'Admin' && password == '12345';
};

export const logIn = () => {
	localStorage.setItem('isLogin', true);
	return {type: 'LOGIN'};
};

export const logOut = () => {
	localStorage.removeItem('isLogin');
	return {type: 'LOGOUT'};
};
