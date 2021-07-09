import styled from 'styled-components'

export const Card = styled.div`
    background-color: ${ ({ theme }) => theme.BGAColor };
    width: 100%;
    padding: 5px;
    margin: 0;
`
export const Between = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Span = styled.span`
    font-size: 17px;
    font-family: PFont-Regular;
    text-align: center;
    width: 100%;
    display: block;
`
export const Text = styled.span`
    font-size: 13px;
    font-family: PFont-Regular;
    color: ${ ({ theme }) => theme.SFSColor };
`
export const Div = styled.div`
    width: 100%;
`
// Icono  de Ubicación
export const IMG = 'https://es.gravatar.com/userimage/169146149/5079bfd6776cc41660ec57edbe0a6a8e.png'