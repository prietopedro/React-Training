import React,{useState,useEffect} from 'react'
import {
    RadialChart
  } from 'react-vis';


export default function Chart(props) {
    let [countriesData,setCountriesData] = useState([])
    let [data , setData] = useState([])
    
    let countries = props.users.map(user=>user.country)
    let filteredCountries = countries.filter((country,index)=>countries.indexOf(country) === index)


    useEffect(()=>{
        let obj = filteredCountries.map(currentCo=>{
            let totalCo = props.users.filter(user=>user.country === currentCo)
            let obj = {
                country: currentCo,
                total: totalCo.length
            }
            return obj
        })
        setCountriesData(obj)
    },[])


    useEffect(()=>{
        let hey = countriesData.map((current)=>{
            let obj = {
                angle: current.total,
                label: current.country
            }
            return obj
        })
        setData(hey)
    },[countriesData])


    return (
        <>
        <RadialChart width={1000} height={1000} data={data} />
        </>
    )
}
