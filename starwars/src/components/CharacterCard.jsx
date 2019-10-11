import React from "react";
import {CardContainer, CardName, CardInfo} from "./StyledElements"

function CharacterCard(props){

    return(
        <CardContainer>
            <CardName>{props.character.name}</CardName>
            <CardInfo>Height:{props.character.height}</CardInfo>
            <CardInfo>Hair Color:{props.character.hair_color}</CardInfo>
            <CardInfo>Skin Color:{props.character.skin_color}</CardInfo>
        </CardContainer>
    )
}

export default CharacterCard;