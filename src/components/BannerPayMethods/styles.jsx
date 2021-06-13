import styled, { css } from 'styled-components'
import { PLColor } from '../../assets/colors'

// tarjetas
export const CardItemContainer = styled.div`
    border-right: 0 solid #eee;
    font-size: 18px;
    padding: 20px;
    white-space: nowrap;
    border-right-width: 1px;
    height: 90px;
    /* &:last-child { border-right: none; }; */

`
export const ContainerTitle = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
// Texto de items
export const ItemText = styled.span`

`
export const ListCard = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    max-width: 1180px;
    overflow: hidden;
`
export const Box = styled.div`
    ${ ({ display }) => display && css`display: ${ display };` }
    ${ ({ color }) => color && css`color: ${ color };` }
    width: 100%;
    border-bottom: 1px solid ${ PLColor };
    text-align: ${ ({ align }) => align ? align : 'center' };
    padding: 10px;
`
export const Column = styled.div`
    padding: ${ ({ padding }) => padding ? padding : '0 10px' };
    ${ ({ width }) => width && css`width: ${ width };` }
    ${ ({ display }) => display && css`display: ${ display };` }
    ${ ({ justify }) => justify && css`justify-content: ${ justify };` }
`
export const SpanText = styled.span`
    width: 60%;
    font-weight: bold;
    text-align: justify;
    padding: ${ ({ padding }) => padding ? padding : '20px' };
`