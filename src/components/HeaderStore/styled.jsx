import styled from 'styled-components';

export const Header = styled.div`
    flex-direction: column;
    width: 100%;
    height: 80px;
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
    }
`
export const ContentInput = styled.div`
    @media only screen and (min-width: 1248px){
        max-width: 420px;
    }
    @media only screen and (min-width: 960px) {
    max-width: 320px;
    position: relative;
}
`