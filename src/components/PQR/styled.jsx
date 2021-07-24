import styled, { css } from 'styled-components';
import { PColor, PVColor } from '../../assets/colors';

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    margin: auto;
    padding: 0 30px;
    max-width: 900px;  
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
export const ContentPqr = styled.div`
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;   
`
export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    border-left: solid transparent;
    cursor: pointer;
    padding: 0 1.1428571429em;
    min-height: 56px;
    padding: 20px 32px;
    border-top: .0625em solid #e6e6e6;
    &:hover{
        border-left: solid ${ PVColor };
    }
`
export const CatPqrName = styled.h1`
    font-size: 16px;
    font-family: PFont-Light;
    color: rgba(0,0,0,.8);
    word-break: break-all;
`
export const Icon = styled.div`
    ${ props => props.left &&css` 
    display: flex;
    justify-content: flex-end;` }
`