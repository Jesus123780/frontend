import styled from 'styled-components'

export const Body = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f3f6fd;
    display: grid;
    grid-gap: 19px 12px;
    grid-template-columns: 0.4fr 2fr;
    grid-template-rows: 1fr;
    justify-items: center;
    padding: 30px;
    @media( max-width: 1200px ){
        display: flex;
        padding: 0px;
        flex-direction: column;
    } 
`
export const Container = styled.div`
    margin: auto;
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: #fff;
    @media( max-width: 1200px ){
        display: flex;
        padding: 0px;
        flex-direction: column;
    } 
`
export const ContainerForm = styled.div`
    width: 50%;
    overflow: hidden;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 10px 0 auto;  
    flex-direction: column;
    @media( max-width: 1200px ){
        display: flex;
        padding: 0px;
        flex-direction: column;
    } 
`
export const BtnFacebook = styled.button`
    background-color: blue;
    @media( max-width: 1200px ){
        display: flex;
        padding: 0px;
        flex-direction: column;
    } 
`
export const Register = styled.div`
    width: 100%;
    justify-items: center;
    padding: 30px;
    width: 100%;
    max-width: 100%;
    height: 90vh;
    top: 8px;
    bottom: 0;
    left: 0;
    transform: ${ props => props.active ? 'translateX(0px)' : 'translateX(1000px)' };
    margin-top: 83px;
    transition: all 0.9s ease;
    @media( max-width: 1200px ){
        display: flex;
        padding: 0px;
        flex-direction: column;
    } 
`