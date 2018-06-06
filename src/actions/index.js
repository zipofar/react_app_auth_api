export const checkLoginPass = (login, password) => {
	if (login == 'Admin' && password == '12345') {
		localStorage.setItem('isLogin', true);
		return true;
	}
	return false;
};

export const setLogin = () => ({type: 'LOGIN'});
export const setLogout = () => ({type: 'LOGOUT'});
