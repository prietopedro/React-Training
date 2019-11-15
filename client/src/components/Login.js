import React,{useState , useEffect} from "react";
import axios from "axios"

const Login = (props) => {
  const [formValues,setFormValues] = useState({username:"",password: ""})
  const [token,setToken] = useState(localStorage.getItem("token"))
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  useEffect(()=>{
    console.log("it's running",token)
    if(token){
      props.history.push('/BubblePage')
    }
  },[token])

  const handleChange = (e) => {
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login",formValues)
    .then(res=>{
      localStorage.setItem("token",res.data.payload);
      window.location.reload()
      })
    .then(()=>setToken(localStorage.getItem("token")))
    .catch(err=>console.log(err.message))
  }
  return (
    <>
      <form>Log In
        <input type="text" name="username" value={formValues.username} onChange={handleChange} />
        <input type="password" name="password" value={formValues.password} onChange={handleChange} />
        <button onClick={onSubmit}>Log In</button>
      </form>
    </>
  );
};

export default Login;
