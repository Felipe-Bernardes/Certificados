import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    background-color: #413e40;
    gap: 4em;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1.5em;
`

export const CardSize = styled.div`
    background-color: gray;
    position: relative;
    z-index: 1;
    @media (min-width: 1500px) and (max-width: 1920px){
        width: 23vw;
        height 30vh;
    }
    @media (min-width: 1200px) and (max-width: 1500px){
        width: 25vw;
        height 30vh;
    }
    @media (min-width: 1020px) and (max-width: 1200px){
        width: 28vw;
        height 30vh;
    }


    @media (min-width: 860px) and (max-width: 1020px){
        width: 32vw;
        height 27vh;
    }
    @media (min-width: 660px) and (max-width: 860px){
        width: 40vw;
        height 26vh;
    }
    @media (min-width: 310px) and (max-width: 660px){
        width: 50vw;
        height 24vh;
    }
`

export const CardSizeImg = styled.img`
    position: absolute;
    z-index: 3;
    @media (min-width: 1500px) and (max-width: 1920px){
        width: 23vw;
        height 30vh;
    }
    @media (min-width: 1200px) and (max-width: 1500px){
        width: 25vw;
        height 30vh;
    }
    @media (min-width: 1020px) and (max-width: 1200px){
        width: 28vw;
        height 30vh;
    }


    @media (min-width: 860px) and (max-width: 1020px){
        width: 32vw;
        height 27vh;
    }
    @media (min-width: 660px) and (max-width: 860px){
        width: 40vw;
        height 26vh;
    }
    @media (min-width: 310px) and (max-width: 660px){
        width: 50vw;
        height 24vh;
    }
`

export const CardShadow = styled.div`
    position: absolute;     
    width: 23vw;
    height: 8vh;
    bottom: 0%;
    background: gray;
    z-index: 4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 70px;
    @media (min-width: 1500px) and (max-width: 1920px){
        width: 23vw;
    }
    @media (min-width: 1200px) and (max-width: 1500px){
        width: 25vw;
    }
    @media (min-width: 1020px) and (max-width: 1200px){
        width: 28vw;
    }


    @media (min-width: 860px) and (max-width: 1020px){
        width: 32vw;
        gap: 100px;
    }
    @media (min-width: 660px) and (max-width: 860px){
        width: 40vw;
        gap: 130px;
    }
    @media (min-width: 310px) and (max-width: 660px){
        width: 50vw;
        gap: 140px;
    }
`

export const Images = styled.img`
    width: 5vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    @media (min-width: 1500px) and (max-width: 1920px){
        width: 23vw;
    }
    @media (min-width: 1200px) and (max-width: 1500px){
        width: 25vw;
    }
    @media (min-width: 1020px) and (max-width: 1200px){
        width: 28vw;
    }


    @media (min-width: 860px) and (max-width: 1020px){
        width: 32vw;
    }
    @media (min-width: 660px) and (max-width: 860px){
        width: 40vw;
    }
    @media (min-width: 310px) and (max-width: 660px){
        width: 50vw;
    }

`
