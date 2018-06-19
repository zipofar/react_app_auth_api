import _ from "lodash";

export const networkHandlerErrors = (dispatch, e, messages = [], pathToElementArray) => {

    if (typeof e.response == 'undefined') {
        dispatch(addNetErrors(['Ошибка подключения к сети']));
        return;
    }
    if (e.response.status >= 500) {
        dispatch(addNetErrors(['Сервер не доступен']));
        return;
    }
    if (typeof pathToElementArray === 'string') {
        messages = _.get(e, pathToElementArray, ['Message not found']);
    }
    if (e.response.status >= 400) {
        dispatch(addNetErrors(messages));
        return;
    }
};

const addNetErrors = (errors) => {
    return {
        type: 'ADD_ERRORS',
        payload: errors,
    };
};

export const removeNetErrors = () => ({ type: 'REMOVE_ERRORS' });