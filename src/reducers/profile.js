export const processLoadProfile = (state = '', action) => {
    switch (action.type) {
        case 'PROFILE_SUCCESS':
            return 'success';
        case 'PROFILE_REQUEST':
            return 'request';
        case 'PROFILE_FAILURE':
            return 'failure';
        default:
            return state;
    }
};
