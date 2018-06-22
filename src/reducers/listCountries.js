export const countries = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTRIES':
            return action.payload;
        case 'CLEAR_LIST_COUNTRIES':
            return [];
        default:
            return state;
    }
};

export const processLoadCountries = (state = '', action) => {
    switch (action.type) {
        case 'LOAD_COUNTRIES_SUCCESS':
            return 'success';
        case 'LOAD_COUNTRIES_REQUEST':
            return 'request';
        case 'LOAD_COUNTRIES_FAILURE':
            return 'failure';
        default:
            return state;
    }
};