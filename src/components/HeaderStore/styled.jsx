import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SEGColor } from '../../assets/colors';

export const Header = styled.div`
    flex-direction: column;
    width: 100%;
    height: 90px;
    background-color: #f7f7f7;
    box-shadow: inset 0 -1px 0 #dcdcdc;
    top: 0;
    z-index: 9997;
    padding: 0;
    @media only screen and (min-width: 960px){
        display: flex;
    }
`

export const Content = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px !important;
    margin: auto;
    padding: 0 30px;
    @media only screen and (min-width: 960px){
        && > div:nth-child(1) {
            flex: 10%;
        }
        && > div:nth-child(2) {
            flex: 30%;
        }
        && > div:nth-child(3) {
            flex: 10%;
        }
        && > div:nth-child(4) {
            flex: 10%;
        }
        && > div:nth-child(5) {
            flex: 10%;
        }
    }

`
export const ContentInput = styled.div`
  
`
export const ListLink = styled.div`
    display: flex;
    margin-bottom: 0px;
    align-items: left;
    justify-content: start;
`
export const Enlace = styled(Link)`
    position: relative;
    display: flex;
    color: ${ SEGColor };
    user-select: none;
    margin: 0px 7px;
    border: none;
    left: 12px;
    padding: 0;
    font-size: 14px;
    align-items: center;
`