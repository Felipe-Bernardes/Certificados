import React from 'react';
import Card from '../Cards/Card';
import Description from './SectionDescription';

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
            CardSizeImg: {Cert1},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 2,
            name: "Introdução a Programação",
            CardSizeImg: {Cert2},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 3,
            name: "Introdução a criação de website",
            CardSizeImg: {Cert3},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 4,
            name: "Introdoção ao JavaScript",
            CardSizeImg: {Cert4},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 5,
            name: "Manipulando D.O.M",
            CardSizeImg: {Cert5},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 6,
            name: "Dominando Funções",
            CardSizeImg: {Cert6},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 7,
            name: "Debugging e Error Handling",
            CardSizeImg: {Cert7},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 8,
            name: "Introdução ao TypeScript",
            CardSizeImg: {Cert8},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 9,
            name: "Introdução ao ReactJS",
            CardSizeImg: {Cert9},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 10,
            name: "Trabalhando com States e Effects",
            CardSizeImg: {Cert10},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 11,
            name: "Database Experience",
            CardSizeImg: {Cert11},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 12,
            name: "Arquitetura de Banco de Dados",
            CardSizeImg: {Cert12},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 13,
            name: "Introdução ao Banco de Dados",
            CardSizeImg: {Cert13},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 14,
            name: "Primeiros Passos com SQL",
            CardSizeImg: {Cert14},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 15,
            name: "Criando Queries",
            CardSizeImg: {Cert15},
            DownloadLink: "",
            ShowLink: ","
        },
        {
            id: 16,
            name: "Introdução a Banco NoSQL",
            CardSizeImg: {Cert16},
            DownloadLink: "",
            ShowLink: ","
        },
    ] 

    return (
        <>
            <Description></Description>
            <Card Dados={Certificados}></Card>
        
        </>
    )
}

export default GlobalSection;