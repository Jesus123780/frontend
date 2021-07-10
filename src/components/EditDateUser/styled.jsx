import styled from 'styled-components';
import { BGColor, PColor } from '../../assets/colors';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 0 20px;
    height: 70vh;
`
export const Title = styled.h1`
font-size: 1.625rem;
    color: ${ PColor };
    margin: 20px 0;
    text-align: center;
    font-weight: 500; 
    font-family:  PFont-Medium;
`
export const Paragraph = styled.p`
    font-weight: 300;
    line-height: 29px;
    text-align: justify;
    list-style: initial;
    color: #717171;
    font-family:  PFont-Light;
    margin: 7px 0px;
    font-size: 14px;

`
export const Form = styled.form`

`
export const LabelInput = styled.span`
    position: absolute;
    text-align: left;
    font-size: ${ ({ value }) => value ? '16px' : '16px' };
    top: ${ ({ value }) => value ? '5px' : '10px' };
    left: 15px;;
    left: ${ ({ left }) => left ? left : '17px' };
    transition: .2s;
    background-color: ${ BGColor };
    color:  #CCC;
    pointer-events: none;
    font-family: PFont-Light;
    user-select: none;
`
export const Input = styled.input`
    padding: 20px 10px;
    margin: 10px 0;
    outline: 0;
    border: 1px solid #eee;
    font-weight: 500;
    font-size: 15px;
    width: 100%;
    border-radius: 5px;
    font-family: PFont-Light;  
    &:focus ~ ${ LabelInput } {
        font-size: 16px;
        color: #CCC;
        padding: 0px 5px ;
    }  
    &::selection{
        background-color: red;
        color: ${ BGColor }
    }
    &:disabled{
        color: #808080;
    }
`
export const BoxInput = styled.div`
    position: relative;
    padding: ${ ({ padding }) => padding ? padding : '10px 5px' };
    width: ${ ({ width }) => width ? width : '100%' };
`