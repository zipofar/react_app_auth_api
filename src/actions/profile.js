import axios from 'axios';

const profileRequest = () => ({ type: 'PROFILE_REQUEST' });
const profileSuccess = () => ({ type: 'PROFILE_SUCCESS' });
const profileFailure = () => ({ type: 'PROFILE_FAILURE' });

export const getFullProfile = (id, api_token) => async (dispatch) => {
    dispatch(profileRequest());
    try {
        const response = await axios.get('/api/profile', { params: { id, api_token } });
        const profile = response.data.profile;
        dispatch(loadProfile(profile));
        dispatch(profileSuccess());
    } catch (e) {
        dispatch(profileFailure());
    }
};

export const loadProfile = (data) => {
    return {
        type: 'LOAD_PROFILE',
        payload: data,
    };
};