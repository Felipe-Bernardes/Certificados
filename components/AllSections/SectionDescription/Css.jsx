import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 55vh;
    background-color: #242528;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 200px) and (max-width: 310px){
        height 73vh;
    }
`

export const EndLine = styled.div`
    background-color: white;
    width: 13%;
    height: 1.5vh;
    border-radius: 13px;
    position: absolute;
    bottom: 5%;
    left: 43.5%;
    @media (max-width: 768px){
        width: 25%;
        left: 37.5%;
    }
    
`

export const Paragraph = styled.h1`
    font-family: 'Arial', sans-serif;
    color: #93a7fa;
    @media (max-width: 768px){
        text-align: center;
    }
`

export const DescriptionP = styled.h4`
    font-family: 'Arial', sans-serif;
    color: #93a7fa;
    margin-top: 40px;
    @media (max-width: 768px){
        text-align: center;
        padding: 0 35px;
    }
`

export const Negrito = styled.span`
    font-family: 'Arial', sans-serif;
    color: #3497ed;
    font-weight: bold;
`