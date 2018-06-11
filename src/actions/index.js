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

