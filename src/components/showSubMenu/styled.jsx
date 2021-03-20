import styled, { css, keyframes } from 'styled-components'
import { BGColor } from '../../assets/colors'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const fadeout = keyframes`
    from {
        from: 1;
    }

    to {
        opacity: 0;
    }
`

const fadeInTop = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

`

const fadeOutTop = keyframes`
    from {
        opacity: 1;
        top: 15%;
        left: 50%;
        transform: translateY(-15%);
    }
    to {
      opacity: 0;
      top: 10%;
      left: 50%;
      transform: translateY(-100%);
    }
`
export const Container = styled.div`
    display: ${ ({ show, state }) => {
        if (show && state) return 'block'
        else if (show && !state) return 'block'
        else if (!show && !state) return 'none';
    } };
    position: absolute;
    z-index: 9999;
    opacity: 1;
    top: 50px;
    ${ ({ show, state }) => {
        if (show && state) return css`animation: ${ fadeIn } .4s linear;`
        else if (show && !state) return css`animation: ${ fadeout } .4s linear;`
    } }
`
export const Modal = styled.div`
    background: ${ BGColor };
    margin: auto;
    height: auto;
    border-radius: .3rem;
    border: 1px solid rgba(0,0,0,.2);
    z-index: 999;
    ${ ({ state }) => state ? css`animation: ${ fadeInTop } .4s ease-in;` : css`animation: ${ fadeOutTop } .4s ease-out;` }
`

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem .5rem;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
`

export const ModalTitle = styled.span`
    margin: 0;
`

export const BtnClose = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #898989;
    text-shadow: 0 1px 0 #fff;
    outline: none;
    cursor: pointer;
`

export const ModalBody = styled.div`
    flex: 1 1 auto;
    padding: 1rem 0;
    flex-direction: column;
    height: auto;
    display: flex;
`

export const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
`

export const BtnConfirm = styled.button`
    outline: 0;
    position: relative;
    overflow: hidden;
    border: none;
    padding: 10px;
    width: 150px;
    font-size: 12px;
    margin: 0 20px;
    background-color: #3460ac;
    color: #FFFFFF;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
`

export const BtnCancel = styled.button`
    outline: 0;
    position: relative;
    overflow: hidden;
    border: 1px solid #CCCCCC;
    padding: 10px;
    width: 150px;
    font-size: 12px;
    margin: 0 20px;
    background-color: #F7F7F7;
    color: #393939;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
`