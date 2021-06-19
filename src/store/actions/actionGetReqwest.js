import axios from 'axios'
import * as actionTypes from '../actions/actionTypes';

export const getImageCat = (limit, sort) => {
    return (dispatch) => {

        axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_${sort}`)
            .then(res =>
                dispatch({
                    type: actionTypes.CONTACT_GET_SUCCESS,
                    payload: res
                })
            )
            .catch(error => {
                dispatch({
                    type: actionTypes.CONTACT_GET_FAILURE,
                    error: error.toString(),
                })
            })

    }

}

export const getCategoryas = () => {
    return (dispatch) => {

        axios.get(`https://api.thecatapi.com/v1/categories `)
            .then(res =>
                dispatch({
                    type: actionTypes.CATEGORYAS_GET_SUCCESS,
                    payload: res
                })
            )
            .catch(error => {
                dispatch({
                    type: actionTypes.CATEGORYAS_GET_FAILURE,
                    error: error.toString(),
                })
            })

    }

}


