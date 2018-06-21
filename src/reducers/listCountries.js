export const countries = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTRIES':
            return action.payload;
        default:
            return state;
    }
};

export const stateProcessLoadCountries = (state = '', action) => {
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