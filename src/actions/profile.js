import axios from 'axios';

const profileRequest = () => ({ type: 'PROFILE_REQUEST' });
const profileSuccess = () => ({ type: 'PROFILE_SUCCESS' });
const profileFailure = () => ({ type: 'PROFILE_FAILURE' });

export const getFullProfile = (id, api_token) => async (dispatch) => {
    dispatch(profileRequest());
    try {
        console.log(id, api_token)
        const response = await axios.get('/api/profile', { params: { id, api_token } });
        console.log(response)
        dispatch(profileSuccess());
    } catch (e) {
        dispatch(profileFailure());
    }
};