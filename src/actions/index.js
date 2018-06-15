import axios from 'axios';
import _ from 'lodash';
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
        dispatch(removeAuthErrors());
    } catch (e) {
        dispatch(loginFailure());
        cb();
        console.log(e.response)
        authHandlerErrors(dispatch, e, ['Имя пользователя или пароль введены не верно']);
        
    }
};

const registerRequest = () => ({ type: 'REGISTER_REQUEST' });
const registerSuccess = () => ({ type: 'REGISTER_SUCCESS' });
const registerFailure = () => ({ type: 'REGISTER_FAILURE' });
const addAuthErrors = (errors) => {
    return {
        type: 'ADD_ERRORS',
        payload: errors,
    };
};
const removeAuthErrors = () => ({ type: 'REMOVE_ERRORS' });
export const register = (data) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post('/api/register', data);
        dispatch(registerSuccess());
        dispatch(removeAuthErrors());
        dispatch(logIn());
        dispatch(loadProfile(response.data));
    } catch (e) {
        dispatch(registerFailure());
        authHandlerErrors(dispatch, e, [],'response.data.error');
    }
};

const authHandlerErrors = (dispatch, e, messages = [], path) => {

    if (typeof e.response == 'undefined') {
        dispatch(addAuthErrors(['Ошибка подключения к сети']));
        return;
    }
    if (e.response.status >= 500) {
        dispatch(addAuthErrors(['Сервер не доступен']));
        return;
    }
    if (typeof path === 'string') {
        messages = _.get(e, path, ['Message not found']);
    }
    if (e.response.status >= 400) {
        dispatch(addAuthErrors(messages));
        return;
    }
};
