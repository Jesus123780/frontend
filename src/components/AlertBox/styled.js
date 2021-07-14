import styled, { keyframes } from 'styled-components'
import { BGColor, PColor } from '../../assets/colors'

const Aparece = keyframes`
    from {
    opacity: 0;
    top: -50%;
  }

  to {
    opacity: 1;
    top: 0%;
  }
`
const DesAparece = keyframes`
     from {
    top: 0%;
  }

  to {
    top: -50%;
  }
`
export const ContainerToast = styled.div`
    animation: ${ ({ error, closed }) => error && (closed ? DesAparece : Aparece) } 1s forwards;
    height: ${ props => props.error ? '89px' : 0 };
    padding: ${ props => props.error ? '15px' : 0 };
    background-color: ${ ({ theme })=> theme.BGAColor };
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    width: 100%;
    margin: auto;
    z-index: 10021;
    transition: 400ms;
    box-shadow: 0px 0px 6px #00000052;
    color: ${ BGColor };
    background-color: ${ ({ color }) => color === 'success' ? '#50a773' : color === 'error' ? `${ PColor };` : color === 'warning' ? '#ebbc26' : 'rgba(0, 0, 0, 0.9)' };
`
export const ContentToast = styled.div`
 
`
export const ContainerText = styled.span`
`