export const validateFormProfile = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    } else if (isInvalidDate(values.birthday)) {
        errors.birthday = 'Invalid date of birthday';
    }
    return errors;
};

const isInvalidDate = (date) => {

    if (date === null) {
        return false;
    }

    if (!/^\d\d\d\d-\d{1,2}-\d{1,2}$/i.test(date)) {
        return true;
    }

    if (new Date(date) > Date.now()) {
        return true;
    }

    return false;
};