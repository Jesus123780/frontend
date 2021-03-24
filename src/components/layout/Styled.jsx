import styled, { css } from 'styled-components'
import { BGAColor, BGColor, PColor, PLAColor, PSColor, SEGColor } from '../../assets/colors'
// import { BColor, PColor } from '../../../assets/colors'

// requeriments
export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #fff;
    ${ props => props.isAuth && css`
        display: grid;
        grid-template-columns: .2fr 2fr;
        grid-template-rows: 1fr;
        justify-items: center;
    ` }
`
export const Head = styled.header`
    width: 100%;
    z-index: 999;
    background-image: linear-gradient(95deg, #FFF, #FFF);
    padding: 0;
    grid-column: 1 / 4;
    border-bottom: 1px solid ${ PLAColor };
`
export const Name = styled.h1`
    color: #FFFFFF;
    font-size: 1.25em;
    text-align: center;
`
export const BoxContainer = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    padding-bottom: 5%;
`
export const Main = styled.main`
    width: 100%;
    background-color: ${ BGAColor };
    overflow: hidden;
    height: 100%;
`
export const Footer = styled.footer`
    width: 100%;
    background-color: ${ BGColor };
    overflow: hidden;
    height: 100vh;
    display: flex;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`
export const Title = styled.h5`
    letter-spacing: -1px;
    vertical-align: bottom;
    outline: none;
    font-weight: 670;
    ${ ({ marginTop }) => !!marginTop && css`marginTop: ${ marginTop };` }
    cursor: pointer;
    font-size: ${ ({ fontSize }) => fontSize ? fontSize : '1em' };
    color: ${ SEGColor };
    ${ ({ color }) => !!color && css`color: ${ color };` }
    ${ ({ padding }) => !!padding && css`padding: ${ padding };` }
    ${ ({ margin }) => !!margin && css`margin: ${ margin };` }
    ${ ({ TexAling }) => !!TexAling && css`text-align: ${ TexAling };` }
    ${ ({ res }) => res && css`
        {
           @media ( max-width: 480px){
            display: none;
        }
        }
    ` }
`
export const FlexBox = styled.div`
    width: ${ ({ width }) => width ? width : '100%' };
    align-items: ${ ({ align }) => align ? align : 'center' };
    text-align: ${ ({ textAlign }) => textAlign ? textAlign : 'start' };
    display: ${ ({ display }) => display ? display : 'flex' };
    ${ ({ margin }) => !!margin && css`margin: ${ margin };` };
    ${ ({ shadow }) => !!shadow && css`box-shadow: ${ shadow };` };
    ${ ({ padding }) => !!padding && css`padding: ${ padding };` };
    ${ ({ justify }) => !!justify && css`justify-content: ${ justify };` };
    ${ ({ justifyIten }) => !!justifyIten && css`justify-items: ${ justifyIten };` };
    ${ ({ borderBotton }) => !!borderBotton && css`border-bottom: ${ borderBotton };` };
    ${ ({ gridTemplate }) => !!gridTemplate && css`grid-template-columns: ${ gridTemplate };` };
    ${ ({ gridGrap }) => !!gridGrap && css`grid-gap: ${ gridGrap };` };
     ${ ({ res }) => res && css`
        {
           @media ( max-width: 480px){
            padding: 10px;
            grid-template-columns:1fr;
            }
        }
    ` }
`
export const ContenLogo = styled.img`
    justify-content: center;
    margin-right: 5px;
    width: 150px;
`
export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: ${ PSColor }
`
export const Menu = styled.div`
    justify-content: right;
    display: flex;
    margin-right: 40px;
`
export const BoxTitleNavBar = styled.div`
    padding: 19px 0;
    text-align: center;
    width: ${ ({ width }) => width ? width : '20%' };
    /* background-image: linear-gradient(95deg, ${ SEGColor }, ${ PColor }); */
    background: ${ SEGColor };
`
export const OptionBox = styled.div`
    margin: ${ ({ margin }) => margin || '20px' };
    cursor: pointer;
`
export const Text = styled.span`
    margin: 0 10px;
`
export const ChildrenBox = styled.div`
    width: 100%;
    height: calc(100% - 61px);
`
export const MenuButton = styled.div`
    margin: 0 20px;
    cursor: pointer;

`