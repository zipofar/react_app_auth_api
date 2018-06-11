import axios from 'axios';

const loginRequest = () => ({ type: 'LOGIN_REQUEST' });
const loginSuccess = () => ({ type: 'LOGIN_SUCCESS' });
const loginFailure = () => ({ type: 'LOGIN_FAILURE' });
const logIn = () => ({type: 'LOGIN'});
export const logOut = () => ({type: 'LOGOUT'});

export const checkLoginPass = (email, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post('/api/login', { email, password });
        console.log(response)
        dispatch(loginSuccess());
        dispatch(logIn());
    } catch (e) {
        console.log(e.response.data)
        dispatch(loginFailure());
    }
};

