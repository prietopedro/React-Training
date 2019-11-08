import {SMURF_GET_START,SMURF_GET_FAIL,SMURF_GET_SUCCESS,SMURF_POST_START,SMURF_POST_SUCCESS,SMURF_POST_FAIL} from "../Actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
}

export const reducer = (state = initialState, {type , payload}) => {
    switch(type){
        case SMURF_GET_START:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: null
            };
        case SMURF_GET_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                error: null,
                isFetching: false
            };
        case SMURF_GET_FAIL:
            return {
                ...state,
                smurfs: [],
                error: payload,
                isFetching: false
            }
        case SMURF_POST_START:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: null
            };
        case SMURF_POST_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                error: null,
                isFetching: false
            };
        case SMURF_POST_FAIL:
            return {
                ...state,
                smurfs: [],
                error: payload,
                isFetching: false
            }
        default:
            return state
    }
}