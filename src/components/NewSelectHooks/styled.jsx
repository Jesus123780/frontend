import { BGColor, PColor, PVColor, SFColor, SFVColor } from '../../assets/colors'

import styled, { css } from 'styled-components'

export const BoxSelect = styled.div`
    flex-direction: column;
    min-width: ${ ({ minWidth }) => minWidth || 'auto' };
    width: ${ ({ width }) => width || '100%' };
    padding: 15px 5px;
    border-radius: ${ ({ radius }) => radius || '8px' };
    position: relative;
`
// Caja para ocultar al hacer click fuera del foco del select
export const FixedBox = styled.div`
    display: ${ props => props.active ? 'block' : 'none' };
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    z-index: ${ ({ active }) => active ? '9' : '-1' };
    background-color: transparent;
`
/** mensaje de alerta */
export const Tooltip = styled.div`
    position: absolute;
    display: block;
    right: 5px;
    bottom: 100%;
    background-color: ${ PColor };
    padding: 0 10px;
    border-radius: 2px;
    z-index: 10;
    font-size: 11px;
    color: #ffffff;
    &::after, &::before {
        top: 100%;
        left: 90%;
        border: solid transparent;
        content: "";
        position: absolute;
        pointer-events: none;
    }
    &::after {
        border-top-color: ${ PColor };
        border-width: 4px;
    }
    &::before {
        border-top-color: ${ PColor };
        border-width: 5px;
        margin-left: -1px;
    }
`
export const LabelInput = styled.label`
    position: absolute;
    text-align: left;
    font-size: ${ ({ value }) => value ? '15px' : '16px' };
    top: ${ ({ value }) => value ? '5px' : '27px' };
    left: 15px;
    color: ${ ({ value, error }) => value ? SFColor : (error ? BGColor : SFVColor) };
    pointer-events: none;
    white-space: nowrap;
    transition: .1s;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: PFont-Light;
    background-color: ${ ({ value }) => value ? BGColor : 'transparent' };
    padding: ${ ({ value }) => value ? '0px 10px' : '0px' };

`
// Select
export const CustomButtonS = styled.button`
    position: relative;
    background-color: ${ ({ bgColor, disabled, error }) => disabled ? 'rgba(239, 239, 239, 0.3)' : (error ? '#FBCACA' : (bgColor || '#fff')) };
    outline: 0;
    border: ${ ({ option }) => option ? 'none' : `1px solid ${ SFVColor }` };
    padding: 5px;
    padding-left: 30px;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100%;
    font-family: PFont-Light;
    font-size: ${ ({ size }) => size || '13px' };
    color: ${ ({ color }) => color || SFColor };
    width: ${ ({ width }) => width || '100%' };
    ${ ({ height }) => !!height && css`height: ${ height };` }
    &:hover {
        cursor: ${ ({ disabled }) => disabled ? 'no-drop' : 'pointer' };
        ${ ({ hover }) => hover && css`background-color: ${ PVColor };` }
        ${ ({ hover }) => hover && css`color: ${ BGColor };` }
    }
    &:hover ~ ${ Tooltip } { display: block; }
    &:focus { border: 1px solid ${ PColor }; }
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    padding: 13px 20px;
height: 48px;
`
export const Options = styled.button`
    outline: 0;
    padding: 5px;
    padding-left: 20px;
    text-align: left;
    font-family: PFont-Light;
    font-size: 13px;
    width: 100%;
    display: block;
    background-color: ${ BGColor };
    height: 28px;
    &:hover {
        background-color: ${ PVColor };
        color: ${ BGColor };
    }
`
export const Icon = styled.div`
    position: absolute;
    right: 5px;
    pointer-events: none;
`
export const BoxOptions = styled.div`
    position: absolute;
    bottom: ${ ({ bottom }) => bottom ? '100%' : 'none' };
    background-color: ${ BGColor };
    border: 1px solid ${ SFVColor };
    z-index: 100;
    width: 98%;
    overflow-y: auto;
    max-height: 300px;
`
export const SpanText = styled.label`
    font-size: 12px;
    color: ${ SFColor };
`
export const TextNotResult = styled.span`
    font-size: 10px;
    color: ${ SFVColor };
    padding: 0 10px; 
`
// Input Text (buscador)
export const InputText = styled.input`
    width: 100%;
    margin: 0;
    padding: 10px 8px;
    border: none;
    border-bottom: 1px solid #cccccc42;
    outline: none;
    padding-left: 20px;
`