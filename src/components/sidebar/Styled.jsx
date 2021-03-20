import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SEGColor, PColor, BGColor } from '../../assets/colors'
export const Span = styled.span`
    color: ${ props => props.active ? '#131313' : `${ SEGColor }` };
    font-weight: 500;
    display: block;
    margin-right: 1em;
    font-size: 14px;
    font-family: Poppins;
`
export const LinkOption = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: 12px;
    padding: 5px 10px;
    padding-left: 10px;
    text-align: left;
    white-space: nowrap;
    margin: 0 30px;
`
export const SideBarLeft = styled.div`
    justify-self: center;
    transition: .3s;
    width: 100%;
    position: relative;

`
export const ContainerUserImg = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Content = styled.div`
    height: 100%;
    width: 90%;
`
export const BoxSideBar = styled.aside`
    top: 0;
    height: 100%;
    background: #fff;
    transition: all 0.6s ease-in-out;
    box-shadow: 0 0px 40px rgb(0 0 0 / 5%);
    background: ${ SEGColor };
    width: 100%;
    border-radius: 10px;
`
export const MenuLeft = styled.button`
    width: 100%;
    white-space: nowrap;
    height: ${ ({ height }) => height ? height : 'auto' }px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: none;
    outline: 0;
    position: relative;
    font-family: Poppins;
    background: ${ SEGColor };
    align-self: ${ ({ alignSelf }) => alignSelf || 'auto' };
    & > div:first-child { pointer-events: none; }
    transition: .4s;
    overflow: hidden;
    background-color:${ BGColor };
    border-radius: 15px;
    margin: 5px; 
    border-bottom: 1px solid ${ SEGColor }32;
    & a {
        color: ${ props => props.active ? '#a6b0cf' : '#a6b0cf' };
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 30px;
    width: 10%;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    margin: auto;
    padding: 15px 0px;
    & svg{
        transform: ${ props => props.active ?  ''  : 'rotate(-90deg)' };
    }
`
export const OptionMenu = styled.div`
    width: 100%;
    display: block;
    width: 100%;
    transform: translateY(${ ({ height }) => height }px);
    overflow: hidden;
    padding: 8px 0;
`
export const Box = styled.div`
`
export const SpanItem = styled.span`
margin: 1px 0;
    &:hover{
        background-color: #f8f9fa; 
    }
`
export const BoxTitleNavBar = styled.div`
    padding: 5px 0 50px;
    text-align: center;
    width: 100%;
    border-radius: 10px; 
    /* background-image: linear-gradient(95deg, ${ SEGColor }, ${ PColor }); */
    background: ${ SEGColor };
`
export const Name = styled.h1`
    color: #FFFFFF;
    font-size: 1.25em;
    text-align: center;
`
export const ContainerBoxUser = styled.button`
    width: 100%;
    position: relative;
    white-space: nowrap;
    height: 53px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: none;
    outline: 0;
    font-family: Poppins;
    background: #2a3042;
    align-self: auto;
    border-radius: 15px;
    margin: 5px;
    border-radius: 10px;
    background-color: ${ BGColor };
    outline: none;
    border: none;
    align-items: center;
    padding: 15px;
`