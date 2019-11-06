import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

function Cars(props) {
    console.log(props.cars)
    return (
        <div>
            {props.cars.map((car)=>{
                return (
                    <div>
                        <Link to={`/${car}`}><img style={{width: "200px"}} src={props.carsObj[car].car.image} alt=""/></Link>
                     </div>
                )
            })}
        </div>
    )
}


const mapStateToProps = state => {
    let arrayOfCars = Object.keys(state)
    return {
        cars: arrayOfCars,
        carsObj: state
    }
}
export default connect(mapStateToProps,{})(Cars)
