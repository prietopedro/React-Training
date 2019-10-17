import React from "react";

function PlayersCards(props){

    return(
        <div className="bigContainer">
            {props.teamMembers.map((player,i)=>{
                return (
                <div className="cardContainer">
                <h2>{player.name}</h2>
                <h3>{player.role}</h3>
                <p>{player.email}</p>
                <button className="btn" onClick={(e)=>{
                    e.preventDefault();
                    props.setEditMember(player);
                    props.setEditMemberIndex(i);
                    }}>Edit</button>
        </div>
                )
            })}
        </div>
    )
}

export default PlayersCards;