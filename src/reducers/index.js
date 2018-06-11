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

const stateProcessLogin = (state = '', action) => {
   switch (action.type) {
       case 'LOGIN_REQUEST':
           return 'request';
        case 'LOGIN_SUCCESS':
           return 'success';
        case 'LOGIN_FAILURE':
           return 'failure';
        default:
           return state;
   }
};

export default combineReducers({
	isLogin,
    stateProcessLogin,
});
