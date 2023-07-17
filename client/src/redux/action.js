import { GET_COUNTRIES, GET_COUNTRY_ID, SEARCH_COUNTRIES, CLEAN_DETAIL, 
    FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, FILTER_BY_ACTIVITY, POST_ACTIVITY } from "./action-type";
import axios from 'axios';

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/countries");
            if (data.length)
                return dispatch({ type: GET_COUNTRIES, payload: data });
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    };
};
export const getCountry = (id) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
            if (data.length)
                return dispatch({ type: GET_COUNTRY_ID, payload: data })
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    }
}

export const postActivity = (payload) => {
    return async function(dispatch){
        try {
            const {data} = await axios.post("http://localhost:3001/activities", payload);
            return dispatch({ type: POST_ACTIVITY, payload: data})
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    }
};

export const filterByActivity = (payload) => {
    return {type: FILTER_BY_ACTIVITY, payload}
}

export const onSearch = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`);
            if (data.length) {
                return dispatch({ type: SEARCH_COUNTRIES, payload: data });
            }
        } catch (error) {
            alert("Error: " + error.response.data.error);
        }
    };
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    };
};

export const filterCountryByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    };
};

export const orderByName = (payload) => {
    return {type: ORDER_BY_NAME, payload}
};

export const orderByPopulation = (payload) => {
    return {type: ORDER_BY_POPULATION, payload}
};
