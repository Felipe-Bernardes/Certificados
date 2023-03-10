import React from 'react';
import { CardSize, CardShadow, Images, CardSizeImg, Link} from './CardCss';

import Baixar from './../../src/assets/Icons/Download.svg';
import Ver from './../../src/assets/Icons/View.svg';

const Card = ({Dados}) => {
    const HandleLocationClick = (id) => {
        Dados.map((dado) => {
            if(id == dado.id){
                window.location.href = dado.ShowLink;
            }
        })
    }

    return (
        Dados.map((dado) => (
                <CardSize key={dado.id}>
                    <CardSizeImg src={dado.CardSizeImg} title={dado.name} alt={dado.name}></CardSizeImg>
                    
                    <CardShadow>
                            <Link href={dado.CardSizeImg} download={dado.name}><Images src={Baixar} alt="Baixar Certificado" /></Link>
                            <Images onClick={() => HandleLocationClick(dado.id)} src={Ver} alt="Ver Certificado" />
                    </CardShadow>
                </CardSize>
    ))
    )
}

export default Card;