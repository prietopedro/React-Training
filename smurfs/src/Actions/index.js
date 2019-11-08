import axios from "axios"


export const SMURF_GET_START = "SMURF_GET_START"
export const SMURF_GET_SUCCESS = "SMURF_GET_SUCCESS"
export const SMURF_GET_FAIL = "SMURF_GET_FAIL"

export const SMURF_POST_START = "SMURF_POST_START"
export const SMURF_POST_SUCCESS = "SMURF_POST_SUCCESS"
export const SMURF_POST_FAIL = "SMURF_POST_FAIL"

export const SMURF_DELETE_START = "SMURF_DELETE_START"
export const SMURF_DELETE_SUCCESS = "SMURF_DELETE_SUCCESS"
export const SMURF_DELETE_FAIL = "SMURF_DELETE_FAIL"

export const SMURF_PUT_START = "SMURF_PUT_START"
export const SMURF_PUT_SUCCESS = "SMURF_PUT_SUCCESS"
export const SMURF_PUT_FAIL = "SMURF_PUT_FAIL"

export const smurfsGet = () => dispatch => {
    dispatch({type:SMURF_GET_START})
    axios
    .get("http://localhost:3333/smurfs")
    .then(res=>dispatch({type:SMURF_GET_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:SMURF_GET_FAIL, payload: err.message}))
}

export const smurfPost = smurf => dispatch => {
    dispatch({type:SMURF_POST_START})
    axios
    .post("http://localhost:3333/smurfs",smurf)
    .then(res=>dispatch({type:SMURF_POST_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:SMURF_POST_FAIL, payload: err.message}))
}

export const smurfDelete = (id) => dispatch => {
    dispatch({type:SMURF_DELETE_START})
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=>dispatch({type:SMURF_DELETE_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:SMURF_DELETE_FAIL, payload:err.message}))
}