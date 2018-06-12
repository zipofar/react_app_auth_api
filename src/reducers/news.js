export const news = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_NEWS':
            return action.payload;
        default:
            return state;
    }
};

export const processLoadNews = (state = '', action) => {
    switch (action.type) {
        case 'LOAD_NEWS_SUCCESS':
            return 'success';
        case 'LOAD_NEWS_REQUEST':
            return 'request';
        case 'LOAD_NEWS_FAILURE':
            return 'failure';
        default:
            return state;
    }
};
