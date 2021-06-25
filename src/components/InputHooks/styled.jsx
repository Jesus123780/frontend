import styled, { css } from 'styled-components'

export const BoxInput = styled.div`
    position: relative;
    padding: ${ ({ padding }) => padding ? padding : '10px 5px' };
    width: ${ ({ width }) => width ? width : '100%' };
`
export const Tooltip = styled.div`
    display: block;
    z-index: 10;
    font-size: 13px;
    color: #121319;
`
export const LabelInput = styled.span`
    position: absolute;
    font-size: ${ ({ value, type }) => (value || type === 'date') ? '16px' : '20px' };
    top: ${ ({ value, type }) => (value || type === 'date') ? '20px' : '22px' };
    left: ${ ({ left }) => left ? left : '17px' };
    color: ${ ({ value, labelColor, error }) => value ? (labelColor ? labelColor : '#272323') : (error ? '#fff' : '#CCC') };
    transition: .3s;
    background-color: white;

    pointer-events: none;
    font-weight: ${ ({ value }) => value ? 600 : 400 };
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
    ${ ({ bgColor }) => bgColor && css`background-color: ${ bgColor };` }
    &:focus ~ ${ LabelInput } {
        top: -10px;
        font-size: 20px;
        color: #CCC;
        padding: 0px 5px ;
    }
    &:disabled { cursor: no-drop; }
    ${ ({ error }) => error && css`background-color: #FBCACA;` }
`