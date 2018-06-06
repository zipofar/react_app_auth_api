import { combineReducers } from 'redux';

const checkLogin = () => { return localStorage.getItem('isLogin') === 'true' };

const isLogin = (state = checkLogin(), action) => {
	switch (action.type) {
		case 'LOGIN':
			return true;
		case 'LOGOUT':
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	isLogin,
});
