import {SMURF_FETCH_START,SMURF_FETCH_FAIL,SMURF_FETCH_SUCCESS,SET_EDITING} from "../Actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: null,
    isEditing: false,
    editingSmurf: {}
}

export const reducer = (state = initialState, {type , payload}) => {
    switch(type){
        case SMURF_FETCH_START:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: null,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_FETCH_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                error: null,
                isFetching: false,
                isEditing: false,
                editingSmurf: {}
            };
        case SMURF_FETCH_FAIL:
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
        default:
            return state
    }
}