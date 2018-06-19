import axios from 'axios';
import { networkHandlerErrors, removeNetErrors } from "./helpers/handlerErrors";

const profileLoadRequest = () => ({ type: 'PROFILE_LOAD_REQUEST' });
const profileLoadSuccess = () => ({ type: 'PROFILE_LOAD_SUCCESS' });
const profileLoadFailure = () => ({ type: 'PROFILE_LOAD_FAILURE' });

const profileUpdateRequest = () => ({ type: 'PROFILE_UPDATE_REQUEST' });
const profileUpdateSuccess = () => ({ type: 'PROFILE_UPDATE_SUCCESS' });
const profileUpdateFailure = () => ({ type: 'PROFILE_UPDATE_FAILURE' });

export const getFullProfile = (id, api_token) => async (dispatch) => {
    dispatch(profileLoadRequest());
    try {
        const response = await axios.get('/api/profile', { params: { id, api_token } });
        const profile = response.data.profile;
        dispatch(loadProfile(profile));
        dispatch(profileLoadSuccess());
    } catch (e) {
        dispatch(profileLoadFailure());
    }
};

export const loadProfile = (data) => {
    return {
        type: 'LOAD_PROFILE',
        payload: data,
    };
};

export const updateProfile = formData => async (dispatch) => {
    dispatch(profileUpdateRequest());
    try {
        const response = await axios.post('/api/profile', formData);
        dispatch(loadProfile(response.data));
        dispatch(profileUpdateSuccess());
        dispatch(removeNetErrors());
    } catch (e) {
        dispatch(profileUpdateFailure());
        dispatch(networkHandlerErrors(dispatch, e, [], 'response.data.error'));
    }
};