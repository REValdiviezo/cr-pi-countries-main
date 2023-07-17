import {
    GET_COUNTRIES, GET_COUNTRY_ID, SEARCH_COUNTRIES, CLEAN_DETAIL,
    FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, POST_ACTIVITY,
    FILTER_BY_ACTIVITY } from "./action-type";

const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: [],
    activities: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };
        case POST_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }
        case FILTER_BY_ACTIVITY:
            const activityName = action.payload;
            const filterAct = activityName === 'All' ? state.allCountries :
                state.allCountries.filter((country) =>
                    country.Activities?.some((activity) => activity.name === activityName)
                )
            return {
                ...state,
                countries: filterAct,
            }
        case GET_COUNTRY_ID:
            return {
                ...state,
                countryDetail: action.payload
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                countryDetail: []
            };
        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(elemento => elemento.continent === action.payload)
            return {
                ...state, countries: continentFiltered
            }
        case ORDER_BY_NAME:
            let sortArr = action.payload === 'asc' ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                })
            return {
                ...state,
                countries: sortArr
            }
        case ORDER_BY_POPULATION:
            const population = action.payload === 'Mayor' ?
                state.countries.sort(function (a, b) {
                    return b.population - a.population;
                }) :
                state.countries.sort(function (a, b) {
                    return a.population - b.population;
                })
            return {
                ...state,
                countries: population,
            }
        default:
            return { ...state };
    }
}

export default rootReducer;