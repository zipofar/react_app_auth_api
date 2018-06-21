import { networkHandlerErrors, removeNetErrors } from "./helpers/handlerErrors";
import axios from "axios/index";

const loadCountriesSuccess = () => ({type: 'LOAD_COUNTRIES_SUCCESS'});
const loadCountriesRequest = () => ({type: 'LOAD_COUNTRIES_REQUEST'});
const loadCountriesFailure = () => ({type: 'LOAD_COUNTRIES_FAILURE'});
const addCountries = (data) => ({type: 'ADD_COUNTRIES', payload: data});

export const loadCountries = (partNameCountry) => async (dispatch) => {
    dispatch(loadCountriesRequest());
    try {
        const response = await axios.get('/api/countries',
            { params: {
                pName: partNameCountry,
                pLimit: 5,
            } });

        const countries = response.data;
        dispatch(addCountries(countries));
        dispatch(removeNetErrors());
        dispatch(loadCountriesSuccess());
    } catch (e) {
        networkHandlerErrors(dispatch, e, [], 'response.data.error');
        dispatch(loadCountriesFailure());
    }
};
