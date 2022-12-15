import React from 'react';
import { Container, CardSize, CardShadow, Images} from './CardCss';



const Card = () => {
    return (
        <Container>
            <CardSize>
                <CardShadow>
                        <Images src='../../src/assets/Icons/Download.svg' alt="Baixar Certificado"></Images>
                        <Images src='../../src/assets/Icons/View.svg' alt="Ver Certificado"></Images>
                </CardShadow>
            </CardSize>
        </Container>
    )
}

export default Card;