import React,{useState,useEffect} from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries,
    RadialChart
  } from 'react-vis';
import { array } from 'prop-types';

export default function Chart(props) {
    let [countriesData,setCountriesData] = useState([])
    
    let countries = props.users.map(user=>user.country)
    let filteredCountries = countries.filter((country,index)=>countries.indexOf(country) === index)


    useEffect(()=>{
        console.log(filteredCountries)
        let obj = filteredCountries.map(currentCo=>{
            let totalCo = props.users.filter(user=>user.country === currentCo)
            let obj = {[currentCo]: totalCo.length}
            return obj
        })
        setCountriesData([...countriesData,obj])
      
    },[])
    console.log(countriesData)
    const data = countriesData.map(country=>{
        return {
            angle: country
        }
    })
    const myData = [{angle: 2}, {angle: 10}, {angle: 4}]
    return (
        <RadialChart width={300} height={300} data={myData}/>
    )
}
