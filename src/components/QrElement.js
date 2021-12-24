
import React from 'react';
import styled from 'styled-components'


const QRImage = styled.img`
opacity: 1;
`

const QRContainer = styled.div`
margin-top: 2rem;
`


export const QrElement = ({href: newRoute, imageSrc: qrURL}) => (<QRContainer>
    <a href={newRoute}>
        <figure>
            <QRImage src={qrURL} width="250" height="250" alt="QRCode" />
        </figure>
    </a>
</QRContainer>)