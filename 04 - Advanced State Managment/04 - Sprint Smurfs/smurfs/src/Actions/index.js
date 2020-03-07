import axios from "axios"


export const SMURF_FETCH_START = "SMURF_GET_START"
export const SMURF_FETCH_SUCCESS = "SMURF_GET_SUCCESS"
export const SMURF_FETCH_FAIL = "SMURF_GET_FAIL"

export const SET_EDITING = "SET_EDITING"

// GET 
export const smurfsGet = () => dispatch => {
    dispatch({type:SMURF_FETCH_START})
    axios
    .get("http://localhost:3333/smurfs")
    .then(res=>dispatch({type:SMURF_FETCH_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:SMURF_FETCH_FAIL, payload: err.message}))
}
// POST
export const smurfPost = smurf => dispatch => {
    dispatch({type:SMURF_FETCH_START})
    axios
    .post("http://localhost:3333/smurfs",smurf)
    .then(res=>dispatch({type:SMURF_FETCH_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:SMURF_FETCH_FAIL, payload: err.message}))
}
// DELETE
export const smurfDelete = (id) => dispatch => {
    dispatch({type:SMURF_FETCH_START})
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=>dispatch({type:SMURF_FETCH_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:SMURF_FETCH_FAIL, payload:err.message}))
}
// PUT
export const smurfEdit = smurf => dispatch => {
    dispatch({type:SMURF_FETCH_START})
    axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`,smurf)
    .then(res=>dispatch({type:SMURF_FETCH_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:SMURF_FETCH_FAIL, payload:err.message}))
}

export const setEdit = smurf => {
    return ({type: SET_EDITING , payload: smurf})
}


