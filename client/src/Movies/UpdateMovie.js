import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function UpdateMovie(props) {

    const [formValues,setFormValues] = useState({
        title: "",
        director: "",
        metascore:""
    })

    useEffect(()=>{
        axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setFormValues(res.data))
      .catch(err => console.log(err.response));
    },[])

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${formValues.id}`,formValues)
        .then(()=>props.history.push(`/movies/${formValues.id}`)).catch(err=>console.log(err))
    }



    return (
        <div>
            <form style={{display:"flex",flexDirection:"column"}}>
                <input type="text" name="title" placeholder="Title" value={formValues.title} onChange={handleChange} />
                <input type="text" name="director" placeholder="Director" value={formValues.director} onChange={handleChange}/>
                <input type="number" name="metascore" placeholder="Metascore" value={formValues.metascore} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
