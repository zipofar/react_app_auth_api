import axios from 'axios';

const loadNewsSuccess = () => ({type: 'LOAD_NEWS_SUCCESS'});
const loadNewsRequest = () => ({type: 'LOAD_NEWS_REQUEST'});
const loadNewsFailure = () => ({type: 'LOAD_NEWS_FAILURE'});
const setNews = (data) => {
    return {
        type: 'LOAD_NEWS',
        payload: data,
    };
};

export const loadNews = () => async (dispatch) => {
    dispatch(loadNewsRequest());
    try {
        const response = await axios.get('/api/news');
        dispatch(setNews(response.data));
        dispatch(loadNewsSuccess());
    } catch (e) {
        dispatch(loadNewsFailure());
    }
};
