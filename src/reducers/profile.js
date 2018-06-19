export const processLoadProfile = (state = '', action) => {
    switch (action.type) {
        case 'PROFILE_LOAD_SUCCESS':
            return 'success';
        case 'PROFILE_LOAD_REQUEST':
            return 'request';
        case 'PROFILE_LOAD_FAILURE':
            return 'failure';
        default:
            return state;
    }
};

export const processUpdateProfile = (state = '', action) => {
    switch (action.type) {
        case 'PROFILE_UPDATE_SUCCESS':
            return 'success';
        case 'PROFILE_UPDATE_REQUEST':
            return 'request';
        case 'PROFILE_UPDATE_FAILURE':
            return 'failure';
        default:
            return state;
    }
};
