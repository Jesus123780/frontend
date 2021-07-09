import styled, { css } from 'styled-components'
import { PColor, BGColor, BColor } from '../../assets/colors'
export const BoxInput = styled.div`
    position: relative;
    padding: ${ ({ padding }) => padding ? padding : '10px 5px' };
    width: ${ ({ width }) => width ? width : '100%' };
`
export const Tooltip = styled.div`
    display: block;
    background-color: ${ ({ theme }) => theme.BGColor };
    padding: 0px 5px;
    border-radius: 2px;
    z-index: 10;
    font-size: 13px !important;
    color: ${ PColor };
`
export const LabelInput = styled.span`
    position: absolute;
    text-align: left;
    font-size: ${ ({ value }) => value ? '16px' : '16px' };
    top: ${ ({ value }) => value ? '5px' : '27px' };
    left: 15px;;
    left: ${ ({ left }) => left ? left : '17px' };
    color: ${ ({ value, labelColor, error }) => value ? (labelColor ? labelColor : '#CCC;') : (error ? '#ccc' : `${ BColor }`) };
    transition: .2s;
    background-color: ${ BGColor };
    pointer-events: none;
    font-family: PFont-Light;
`
export const InputV = styled.input`
    color: ${ props => (props.type === 'date' && !props.value) ? '#CCC' : '#272323' };
    padding: ${ props => props.padding ? props.padding : '20px 10px' };
    outline: 0;
    background-color: ${ ({ theme }) => theme.TColor };
    border: 1px solid #eee;
    font-weight: 600;
    font-size: ${ ({ size }) => size ? size : '13px' };
    width: ${ ({ width }) => width ? width : '100%' };
    border-radius: ${ ({ radius }) => radius ? radius : '5px' };
    ${ ({ margin }) => !!margin && css`margin: ${ margin };` }
    ${ ({ minWidth }) => minWidth && css`min-width: ${ minWidth };` }
    &:focus ~ ${ LabelInput } {
        top: 0px;
        font-size: 20px;
        color: #CCC;
        padding: 0px 5px ;
    }
    &:focus { border: 1px solid '#35a8df'; }
    &:disabled { cursor: no-drop; }
    &:hover ~ ${ Tooltip } { display: block; }
    ${ ({ error }) => error && css`border: 1px solid ${ PColor };` }
`