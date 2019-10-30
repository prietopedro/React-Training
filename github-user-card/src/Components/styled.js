import styled from "styled-components"
import {Link} from "react-router-dom"

//Nav
export const NavContainer = styled.nav `
    height: 3.5rem;
    background: linear-gradient(135deg, #3C8CE7 10%, #00EAFF 100%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.h3 `
    margin: 0
    font-weight: 700;
    font-size: 1.5rem;
`

// CARDS
export const Card = styled.div `
    border: 1px #333 solid;
    background: #3C8CE7;
    color: white
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
`

export const Img = styled.img `
    height: 200px;
    width: 200px;
    border-radius: 50%;
`

export const Username = styled.h2 `
    text-transform: uppercase;
    font-size: 1.8rem;
`

export const Btn = styled(Link)`
    background: white;
    text-decoration: none;
    padding: 1rem 4rem;
    margin: 2rem 0;
    font-size: 1.4rem;
    color: black;
    font-weight: 700;
`

export const CardContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`