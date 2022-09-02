import axios from 'axios'

export const GET_STATE = 'GET_STATE'
export const SET_ERROR = 'SET_ERROR'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
export const SORT = 'SORT'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_STATE = 'SET_STATE'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'
export const CLEAR_ERROR_AND_SUCCESS = 'CLEAR_ERROR_AND_SUCCESS'
export const CLEAR_DETAIL = 'CLEAR_DETAIL';


export const API_URL = process.env.REACT_APP_API_URL


export const clearDetail = () => {
    return (dispatch) => {
        return dispatch({
            type: CLEAR_DETAIL
        })
    }
}

export const clearErrorAndSuccess = () => {
    return (dispatch) => {
        return dispatch({
            type: CLEAR_ERROR_AND_SUCCESS
        })
    }
}

export const setError = (error) => {
    return (dispatch) => {
        return dispatch({
            type: SET_ERROR,
            payload: error
        })
    }
}

export const createActivity = (activity) => {
    return async (dispatch) => {
        return axios.post(`${API_URL}/countries/activities`, activity)
            .then(json => {
                dispatch({
                    type: CREATE_ACTIVITY,
                    payload: json.status === 201 ? "Actividad creada con exito!" : ''
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_ERROR,
                    payload: err.response.data.error
                })
            })
    }
}

export const searchCountries = (name) => {
    return async (dispatch) => {
        return axios.get(`${API_URL}/countries?name=${name}`)
            .then(json => {
                dispatch({
                    type: SEARCH_COUNTRIES,
                    payload: json.data.countries
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_ERROR,
                    payload: err
                })
            })
    }
}

export const setState = (countries) => {
    return (dispatch) => {
        return dispatch({
            type: SET_STATE,
            payload: countries
        })
    }
}

export const sort = (prop, order) => {
    return (dispatch) => {
        return dispatch({
            type: SORT,
            payload: {
                prop: prop,
                order: order
            }
        })
    }
}

export const setPageNumber = (pageNumber) => {
    return (dispatch) => {
        return dispatch({
            type: SET_PAGE_NUMBER,
            payload: pageNumber
        })
    }
}

export const getState = () => {
    return async (dispatch) => {
        return axios.get(`${API_URL}/countries`)
            .then(json => {
                dispatch({
                    type: GET_STATE,
                    payload: json.data.countries
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_ERROR,
                    payload: err
                })
            })
    }
}
export const getCountryDetail = (id) => {
    return async (dispatch) => {
        return axios.get(`${API_URL}/countries/${id}`)
            .then(json => {
                dispatch({
                    type: GET_COUNTRY_DETAIL,
                    payload: json.data.country
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_ERROR,
                    payload: err
                })
            })
    }
}