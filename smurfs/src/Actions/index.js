import axios from "axios"


export const SMURF_GET_START = "SMURF_GET_START"
export const SMURF_GET_SUCCESS = "SMURF_GET_SUCCESS"
export const SMURF_GET_FAIL = "SMURF_GET_FAIL"

export const SMURF_POST_START = "SMURF_POST_START"
export const SMURF_POST_SUCCESS = "SMURF_POST_SUCCESS"
export const SMURF_POST_FAIL = "SMURF_POST_FAIL"

export const smurfsGet = () => dispatch => {
    dispatch({type:SMURF_GET_START})
    axios
    .get("http://localhost:3333/smurfs")
    .then(res=>dispatch({type:SMURF_GET_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:SMURF_GET_FAIL, payload: err.message}))
}