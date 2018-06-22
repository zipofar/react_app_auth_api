import axios from 'axios';
import { networkHandlerErrors, removeNetErrors } from "./helpers/handlerErrors";
import { loadProfile } from "./profile";

const loginRequest = () => ({ type: 'LOGIN_REQUEST' });
const loginSuccess = () => ({ type: 'LOGIN_SUCCESS' });
const loginFailure = () => ({ type: 'LOGIN_FAILURE' });
const logIn = () => ({type: 'LOGIN'});
export const logOut = () => ({type: 'LOGOUT'});



export const checkLoginPass = (data, cb) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post('/api/login', data);
        dispatch(loadProfile(response.data));
        dispatch(logIn());
        dispatch(loginSuccess());
        dispatch(removeNetErrors());
    } catch (e) {
        console.log(e.response)
        dispatch(loginFailure());
        cb();
        networkHandlerErrors(dispatch, e, ['Имя пользователя или пароль введены не верно']);
        
    }
};

const registerRequest = () => ({ type: 'REGISTER_REQUEST' });
const registerSuccess = () => ({ type: 'REGISTER_SUCCESS' });
const registerFailure = () => ({ type: 'REGISTER_FAILURE' });


export const register = (data) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post('/api/register', data);
        dispatch(registerSuccess());
        dispatch(removeNetErrors());
        dispatch(logIn());
        dispatch(loadProfile(response.data));
    } catch (e) {
        dispatch(registerFailure());
        networkHandlerErrors(dispatch, e, [],'response.data.error');
    }
};
