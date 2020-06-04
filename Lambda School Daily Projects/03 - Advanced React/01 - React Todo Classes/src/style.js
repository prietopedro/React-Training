import styled from "styled-components"

export const Title = styled.h1 `
    text-align: center;
    color: #e3b04b;
    margin: 3rem;
    font-size: 3rem;
    text-transform: uppercase;
` 

export const BigContainer = styled.div `
    height: 100vh;
    width: 100vw;
`

export const TodoContainer = styled.div `
    width: 50%;
    display: flex;
    border: 5px #e3b04b solid;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 2rem;
`

export const FormContainer = styled.form `
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 2rem;
`

export const Input = styled.input `
    border: none;
    width: 70%;
    border-bottom: #f1d6ab 2px solid;
    padding-left: 5px;
`

export const Btn = styled.button `
    border: 2px #f1d6ab solid;
    background: white;
    padding: 0.5rem;
    width: 13%;
    cursor: pointer;
    text-transform: uppercase;
`

export const TodoContainers = styled.div `
    width: 100%;
    border: 2px #f1d6ab solid;
    margin: 0.2rem 0;
    padding: 1rem 1rem;
`