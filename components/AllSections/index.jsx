import React from 'react';
import Card from '../Cards/Card';
import Description from './SectionDescription';
import { Container } from './Css';

import Cert1 from './../../src/Cert-Print/Cert1.png'
import Cert2 from './../../src/Cert-Print/Cert2.png'
import Cert3 from './../../src/Cert-Print/Cert3.png'
import Cert4 from './../../src/Cert-Print/Cert4.png'
import Cert5 from './../../src/Cert-Print/Cert5.png'
import Cert6 from './../../src/Cert-Print/Cert6.png'
import Cert7 from './../../src/Cert-Print/Cert7.png'
import Cert8 from './../../src/Cert-Print/Cert8.png'
import Cert9 from './../../src/Cert-Print/Cert9.png'
import Cert10 from './../../src/Cert-Print/Cert10.png'
import Cert11 from './../../src/Cert-Print/Cert11.png'
import Cert12 from './../../src/Cert-Print/Cert12.png'
import Cert13 from './../../src/Cert-Print/Cert13.png'
import Cert14 from './../../src/Cert-Print/Cert14.png'
import Cert15 from './../../src/Cert-Print/Cert15.png'
import Cert16 from './../../src/Cert-Print/Cert16.png'

const GlobalSection = () => {
    const Certificados = [
        {
            id: 1,
            name: "Introdução ao Git",
            CardSizeImg: Cert1,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/84D5F297.pdf"
        },
        {
            id: 2,
            name: "Introdução a Programação",
            CardSizeImg: Cert2,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/109A4476.pdf"
        },
        {
            id: 3,
            name: "Introdução a criação de website",
            CardSizeImg: Cert3,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/8D0022BA.pdf"
        },
        {
            id: 4,
            name: "Introdoção ao JavaScript",
            CardSizeImg: Cert4,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/B3E8CB2B.pdf"
        },
        {
            id: 5,
            name: "Manipulando D.O.M",
            CardSizeImg: Cert5,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/24F2EA7A.pdf"
        },
        {
            id: 6,
            name: "Dominando Funções",
            CardSizeImg: Cert6,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/6A0391AF.pdf"
        },
        {
            id: 7,
            name: "Debugging e Error Handling",
            CardSizeImg: Cert7,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/E23AD6CD.pdf"
        },
        {
            id: 8,
            name: "Introdução ao TypeScript",
            CardSizeImg: Cert8,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/7F3575D6.pdf"
        },
        {
            id: 9,
            name: "Introdução ao ReactJS",
            CardSizeImg: Cert9,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/7E946C5B.pdf"
        },
        {
            id: 10,
            name: "Trabalhando com States e Effects",
            CardSizeImg: Cert10,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/D9A90F68.pdf"
        },
        {
            id: 11,
            name: "Database Experience",
            CardSizeImg: Cert11,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/C4C2986E.pdf"
        },
        {
            id: 12,
            name: "Arquitetura de Banco de Dados",
            CardSizeImg: Cert12,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/26E34424.pdf"
        },
        {
            id: 13,
            name: "Introdução ao Banco de Dados",
            CardSizeImg: Cert13,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/D91C01DE.pdf"
        },
        {
            id: 14,
            name: "Primeiros Passos com SQL",
            CardSizeImg: Cert14,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/00F989DA.pdf"
        },
        {
            id: 15,
            name: "Criando Queries",
            CardSizeImg: Cert15,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/29547574.pdf"
        },
        {
            id: 16,
            name: "Introdução a Banco NoSQL",
            CardSizeImg: Cert16,
            ShowLink: "https://hermes.digitalinnovation.one/certificates/2F0F73D1.pdf"
        }
    ] 

    return (
        <>
            <Description></Description>
            <Container>
                <Card Dados={Certificados} />
            </Container>
        </>
    )
}

export default GlobalSection;