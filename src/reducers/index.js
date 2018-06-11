import { combineReducers } from 'redux';

const isLogin = (state = false, action) => {
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

const stateProcessRegister = (state = '', action) => {
   switch (action.type) {
       case 'REGISTER_REQUEST':
           return 'request';
        case 'REGISTER_SUCCESS':
           return 'success';
        case 'REGISTER_FAILURE':
           return 'failure';
        default:
           return state;
   }
};

const profile = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_PROFILE':
            return action.payload;
        case 'LOGOUT':
            return {};
        default:
            return state;
    }    
};

const registerErrors = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ERRORS':
            return action.payload;
        case 'REMOVE_ERRORS':
            return [];
        default:
            return state;
    }    
};

export default combineReducers({
	isLogin,
    stateProcessLogin,
    profile,
    stateProcessRegister,
    registerErrors,
});
