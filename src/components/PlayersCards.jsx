import React from "react";

function PlayersCards(props){

    return(
        <div className="bigContainer">
            {props.teamMembers.map((player)=>{
                return (
                <div className="cardContainer">
                <h2>{player.name}</h2>
                <h3>{player.role}</h3>
                <p>{player.email}</p>
                </div>
                )
            })}
        </div>
    )
}

export default PlayersCards;