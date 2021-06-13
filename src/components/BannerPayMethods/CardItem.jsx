import React from 'react'
import { CardItemContainer, ContainerTitle, ItemText } from './styles'
export const CardItem = ({ title, onClick }) => {
    return (
        <CardItemContainer>
            <ContainerTitle>
                <ItemText >{title}</ItemText>
                <ItemText color='#068CF3' onClick={onClick}>Ver más</ItemText>
            </ContainerTitle>
        </CardItemContainer>
    )
}