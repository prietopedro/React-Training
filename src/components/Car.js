import React, { useEffect } from 'react'
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';

function Car(props) {
    return (
    <>
    <Link to="/">HOME</Link>
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures id={props.id} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures id={props.id} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
    </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const numberr = ownProps.match.params.carname
    return {
        car: state[numberr].car,
        additionalFeatures: state[numberr].additionalFeatures,
        additionalPrice: state[numberr].additionalPrice,
        id: numberr
    }
}
export default connect(mapStateToProps,{})(Car)