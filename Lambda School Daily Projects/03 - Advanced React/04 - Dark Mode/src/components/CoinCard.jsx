import React from 'react'

export default function CoinCard(props) {
    return (
        <div>
            <h1 style={{fontSize: "5rem", textTransform: "uppercase"}}>{`The ${props.coinData.name}`}</h1>
            <img style={{height: "100px", width:"100px", margin:"2rem"}} src={props.coinData.image.small} alt=""/>
        </div>
    )
}
