import React from "react";
import {CardContainer, CardName, CardInfo} from "./StyledElements"

function CharacterCard(props){

    return(
        <CardContainer>
            <CardName>{props.character.name}</CardName>
            <CardInfo>Height:{props.character.height}</CardInfo>
        </CardContainer>
    )
}

export default CharacterCard;