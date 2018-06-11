import axios from 'axios';

const loginRequest = () => ({ type: 'LOGIN_REQUEST' });
const loginSuccess = () => ({ type: 'LOGIN_SUCCESS' });
const loginFailure = () => ({ type: 'LOGIN_FAILURE' });
const logIn = () => ({type: 'LOGIN'});
export const logOut = () => ({type: 'LOGOUT'});

const loadProfile = (data) => {
    return {
        type: 'LOAD_PROFILE',
        payload: data,
    };
};

export const checkLoginPass = (email, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post('/api/login', { email, password });
        dispatch(loginSuccess());
        dispatch(logIn());
        dispatch(loadProfile(response.data));
    } catch (e) {
        dispatch(loginFailure());
    }
};

const registerRequest = () => ({ type: 'REGISTER_REQUEST' });
const registerSuccess = () => ({ type: 'REGISTER_SUCCESS' });
const registerFailure = () => ({ type: 'REGISTER_FAILURE' });
const addRegisterErrors = (errors) => {
    return {
        type: 'ADD_ERRORS',
        payload: errors,
    };
};
const removeRegisterErrors = () => ({ type: 'REMOVE_ERRORS' });
export const register = (data) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post('/api/register', data);
        dispatch(registerSuccess());
        dispatch(removeRegisterErrors());
        dispatch(logIn());
        dispatch(loadProfile(response.data));
    } catch (e) {
        dispatch(registerFailure());
        dispatch(addRegisterErrors(e.response.data.error));
    }
};
