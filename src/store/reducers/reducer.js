import * as actionTypes from '../actions/actionTypes';

const inishelstate = {
    title: '',
    isLoader: false,
    arr: [],
    category: [],

}

const reducer = (state = inishelstate, action) => {
    const actionReducer = {
        [actionTypes.CONTACT_GET_SUCCESS]: () => ({
            ...state,
            isLoader: false,
            arr: action.payload
        }),
        [actionTypes.CATEGORYAS_GET_SUCCESS]: () => ({
            ...state,
            isLoader: false,
            category: action.payload
        }),


    }
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    } else {
        return state
    }


}
export default reducer