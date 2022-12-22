import React from 'react';
import { Container, DescriptionP, EndLine, Paragraph, Negrito } from './Css';

const Description = () => {
    return (
        <>
            <Container>
                <EndLine />
                <Paragraph>Esses são alguns dos meus Certificados!</Paragraph>
                <DescriptionP>Certificados originais e cursos feitos principalmente na plataforma da DIO.</DescriptionP>
                <DescriptionP>Tenho o total de <Negrito>52</Negrito> Certificados, mas para o site não ficar cheio fiz com apenas <Negrito>16</Negrito>.</DescriptionP>
            </Container>
        </>
    )
}

export default Description;