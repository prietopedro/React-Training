import {SMURF_GET_START,SMURF_GET_FAIL,SMURF_GET_SUCCESS,SMURF_POST_START,SMURF_POST_SUCCESS,SMURF_POST_FAIL, SMURF_DELETE_FAIL,SMURF_DELETE_START,SMURF_DELETE_SUCCESS, SET_EDITING,SMURF_PUT_SUCCESS,SMURF_PUT_FAIL,SMURF_PUT_START} from "../Actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: null,
    isEditing: false,
    editingSmurf: {}
}

export const reducer = (state = initialState, {type , payload}) => {
    switch(type){
        case SMURF_GET_START:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: null,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_GET_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                error: null,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_GET_FAIL:
            return {
                ...state,
                smurfs: [],
                error: payload,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            }
        case SMURF_POST_START:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: null,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_POST_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                error: null,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_POST_FAIL:
            return {
                ...state,
                smurfs: [],
                error: payload,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            }
        case SMURF_DELETE_START:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: null,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_DELETE_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                error: null,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_DELETE_FAIL:
            return {
                ...state,
                smurfs: [],
                error: payload,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            }
        case SET_EDITING:
            return {
                ...state,
                isEditing: true,
                editingSmurf: payload
            }
        case SMURF_PUT_START:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: null,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_PUT_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                error: null,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_PUT_FAIL:
            return {
                ...state,
                smurfs: [],
                error: payload,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            }
        default:
            return state
    }
}