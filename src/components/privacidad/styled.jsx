import styled from 'styled-components';
import { PColor } from '../../assets/colors';

export const Card = styled.div`
@media (min-width: 992px){
}
@media (min-width: 768px) {
}
`
export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(200px, 347px) minmax(5%, 10%) auto auto;
    grid-template-areas:
        "banner banner banner banner"
        "sidebar . top ."
        "sidebar access access access"
        "sidebar . bottom back-to-top";
`
export const Title = styled.h1`
    font-size: 1.625rem !important;
    color: ${ PColor };
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
    border-bottom: 1px solid red;
`
export const Header = styled.div`
    padding: 24px 52px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    grid-area: banner / banner / banner / banner;
    background-color: white;
    position: sticky;
    top: 0px;
    z-index: 1;
`
export const SideBar = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    grid-area: banner / banner / banner / banner;
    background-color: white;
    position: sticky;
    top: 80px;
`
export const Content = styled.div`
    grid-area: top / top / top / top;
    max-width: 695px;
    margin-left: 5%;
`