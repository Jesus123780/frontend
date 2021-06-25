import styled, { css } from 'styled-components';

export const DeliveryInputWrapper = styled.div`
     box-sizing: border-box;
     display: flex;
     flex-direction: column;
    cursor: pointer;
`
export const Text = styled.i`
    font-size: 0.75rem;
    height: 12px;
    color: #a6a5a5;
    text-transform: uppercase;
    text-align: center;
    ${ props=> props.bold &&css`  
    text-overflow: ellipsis;
    font-size:  0.75rem;
    color: #3e3e3e;
    display: flex;
    align-items: center;
    font-weight: 300;
    text-align: left;
    line-break: anywhere;
    justify-content: center;
    align-items: center;
    ;` }
`
export const Button = styled.button`
  display: flex;
    justify-content: center;
    background-color: transparent;
    flex-direction: column;
    color: #000;
    width: 50%;
    font-size: 11px !important;
    text-align: center;
    font-family: PFont-Light !important;
    align-items: center;
    margin: auto;
`