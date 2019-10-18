import styled from 'styled-components';

export const InputField = styled.input`
    width: 100%;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    border: none;
    border-bottom: 3px #333 solid;
    text-align: center;
    &:focus{
        outline-width: 0; 
    }
    &:active{
        outline-width: 0;
    }
`

export const Container =  styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const IMG = styled.img `
    border-radius: 50%;
`

export const CardContainer = styled.div`
    border: 3px #333 solid;
    margin: 2rem;
    padding: 2rem;
    text-align: center;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;

`

export const Name = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const Info = styled.p `
    font-size: 1.5rem;
    font-style: italic;
    color: #333;
    font-weight: 600;
`