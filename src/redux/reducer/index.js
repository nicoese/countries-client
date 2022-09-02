import {
    CLEAR_DETAIL,
    CLEAR_ERROR_AND_SUCCESS,
    CREATE_ACTIVITY,
    CREATE_COUNTRY,
    FILTER, GET_COUNTRY_DETAIL,
    GET_STATE, SEARCH_COUNTRIES,
    SET_ERROR, SET_FILTERS, SET_PAGE_NUMBER, SET_STATE, SORT
} from "../actions";

const initialState = {
    countries: [],
    countriesBeforeFilter: [],
    currentPage: 1,
    countriesPerPage: 10,
    currentCountries: [],
    countryDetail: {},
    countriesLength: 0,
    filters: [],
    error: '',
    success: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEARCH_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                currentCountries: action.payload.length === 250 ? action.payload.slice(0,10) : action.payload,
                countriesLength: action.payload.length,
                currentPage: 1
            }

        case SET_STATE:
            return {
                ...state,
                countries: action.payload,
                countriesLength: action.payload.length,
                currentPage: 1
            }

        case SORT:
            const {prop, order} = action.payload
            return {
                ...state,
                countries: state.countries.sort((a, b) => {
                    if (Number.isNaN(Number(a[prop])), Number.isNaN(Number(b[prop]))){
                        if (order === 'asc') return a[prop] < b[prop] ? -1 : 1
                        if (order === 'desc') return a[prop] > b[prop] ? -1 : 1
                    }else {
                        a = Number(a[prop])
                        b = Number(b[prop])
                        if (order === 'asc') return a < b ? -1 : 1
                        if (order === 'desc') return a > b ? -1 : 1
                    }
                }).map(e => e)
            }

        case GET_STATE:
            return {
                ...state,
                countries: action.payload,
                countriesBeforeFilter: action.payload,
                countriesLength: action.payload.length,
                currentCountries: action.payload.slice(
                    state.currentPage * state.countriesPerPage - state.countriesPerPage,
                    state.currentPage * state.countriesPerPage
                    )
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                currentPage: action.payload,
                currentCountries: state.countries.slice(
                    action.payload * state.countriesPerPage - state.countriesPerPage,
                    action.payload * state.countriesPerPage
                )
            }
        case CREATE_ACTIVITY:
            return {
                ...state,
                success: action.payload
            }

        case CLEAR_ERROR_AND_SUCCESS:
            return {
                ...state,
                error: '',
                success: ''
            }

        case CLEAR_DETAIL:
            return {
                ...state,
                countryDetail: {}
            }

        default:
            return state
    }


}

export default rootReducer;