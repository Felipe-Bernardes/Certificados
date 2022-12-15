import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export const CardSize = styled.div`
    background-color: gray;
    width: 20vw;
    height 30vh;
    position: relative;
    z-index: 1;
`

export const CardShadow = styled.div`
    position: absolute;     
    width: 20vw;
    height: 8vh;
    bottom: 0%;
    background: white;
    opacity: 0.4;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 70px;
`

export const Images = styled.img`
    width: 5vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`


