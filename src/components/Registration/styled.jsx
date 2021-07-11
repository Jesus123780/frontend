import styled, { css } from 'styled-components';
import { BGColor, PColor } from '../../assets/colors';

export const Container = styled.div`
   position: absolute;
    top: 0;
    left: 0;
    z-index: 9999999;
    height: 100vh;
    width: 100%;
    background-color: ${ BGColor };
    height: 100vh;
    max-width: 100vw !important;
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const Overline = styled.div`
    width: 100%;
    height: 11.375rem;
    background-color: red;
`
export const Form = styled.form`
box-shadow: 0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%);
    border-radius: 8px;
    padding: 36px 50px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    align-self: center;
`
export const ContainerSliderForm = styled.form`
    @media (min-width: 768px) {
        width: 100%;
        top: 0;
        padding: 20px 30px;
        margin: auto;
        background-color: ${ BGColor };
        left: 0;
        box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 15%);
        margin: -6.875rem auto 0;
        max-width: 45.5rem;
        min-height: 25.5625rem;
}
`
export const Iconos = styled.div`
    color: ${ ({ color, theme }) => (color ? color : theme.PLColor) };
    margin: ${ ({ margin }) => (margin ? margin : '0px 7px') };
    ${ ({ size }) => size &&
        css`
            font-size: ${ size };
        ` }
`
export const Alert = styled.p`
    color: ${ ({ color, theme }) => (color ? color : theme.PLColor) };
    text-align: center;
`
export const ButtonSubmit = styled.button`
    background-color: ${ ({ color, theme }) => color === '1'
        ? ' #ff0000'
        : color === '2'
            ? `${ BGColor }`
            : theme.SFAColor };
    outline: none;
    border: none;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%);
    font-family:  PFont-Regular;
    cursor: pointer;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: ${ ({ content }) => content ? content : 'space-between' };
    font-size: ${ ({ size }) => (size ? size : '1rem') };
    color: ${ ({ colorFont }) => (colorFont ? colorFont : `${ BGColor }`) };
    line-height: 1.5;
    border-radius: 0.3rem;
    text-align: center;
    width: 100%;
    margin: 10px 7px;
    ${ props => props.hoverColor &&
        css`
            &:hover {
                color: ${ BGColor };
                background-color:${ PColor };
            }
        ` };
    ${ props => props.colorPrimary &&
        css`
            {
                color: ${ BGColor };
                background-color:${ PColor };
            }
        ` };
        &:disabled {
            background-color: #fd000020;
        }
`
export const Text = styled.h2`
@media only screen and (min-width: 960px){
    font-size: 1.5rem;
    margin: 0 0 42px;
    text-align: center;
}
    font-size: 1rem;
    font-weight: initial;
    color: #717171;
    margin: 0 0 22px;
`
export const TextRegister = styled.p`
    font-weight: 300;
    line-height: 29px;
    text-align: center;
    list-style: initial;
    color: #717171;
    font-family:  PFont-Light;
    margin: 7px 0px;
    font-size: 16px;

`
export const InputCheckbox = styled.input`
    width: auto;
    border-radius: 6px;
    border: 3px solid #3483fa;
    & ~ label {
        font-size: 12px;
        padding: 0px 5px;
    & > a {
        font-size: 12px;
        color:#3483fa;
        padding: 0px 5px;
    }
    }
`