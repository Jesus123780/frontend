import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import ReactDOM from 'react-dom'
import { BGColor, PColor } from '../../../assets/colors'
import { RippleButton } from '../../Ripple'

export const Alert = props => {
    const { modal, setModal, errorSub } = props
    useEffect(() => {
        const body = document.body
        body.addEventListener('keyup', e => e.code === 'Escape' && setModal(!modal))
        return () => body.removeEventListener('keyup', () => setModal)
    }, [modal])
    return (
        <div>
            {ReactDOM.createPortal(<>
                <ContainerModal modal={modal} onClick={() => setModal(!modal)}>
                    <AwesomeModal onClick={e => e.stopPropagation()} modal={modal}>
                        <Card padding='0px'>
                            <Title>{errorSub ? 'Error' : '¡Éxito!'}</Title>
                            {errorSub ?
                                <Text>¡ Error al cambiar los datos!</Text>
                                :
                                <>
                                    <Text>¡ Operación exitosa !</Text>
                                </>
                            }
                            <RippleButton label='Ok' onClick={()=> setModal(!modal)} />
                        </Card>
                    </AwesomeModal>
                </ContainerModal>
            </>, document.getElementById('root')
            )}
        </div>
    )
}

const ContainerModal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: opacity 150ms ease-in-out;
${ ({ modal }) => modal
        ? css`  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100%;
    z-index: 10000;
    background-color:rgba(0, 0, 0, 0.322);

          `
        : css`
            
        visibility: hidden;
        opacity: 0;
          ` }
`
const AwesomeModal = styled.div`
width: min-content;
border-radius: 10px;
z-index: 99999;
display: flex;
flex-direction: column;
opacity: 0;
top: 50%;
position: absolute;
transition: 500ms ease;
overflow-y: auto;
${ ({ modal }) => modal
        ? css`  
        top: 80px;
        transform: translateY(350px);
        border-radius: 4px;
        opacity: 1;
          `
        : css`
            
        margin: 0;
        opacity: 0;
        z-index: -99999;
          ` }
&::-webkit-scrollbar {
    width: 3px;
    background-color: #dcdcdc;
    border-radius: 5px;
}
`
const Card = styled.div`
background-color: ${ BGColor };
margin: auto;
padding: ${ ({ padding }) => padding ? padding : '30px' };
overflow-y: auto;
width: 500px;
padding: 20px 50px;
display: flex;
flex-direction: column;
&::-webkit-scrollbar {
    width: 3px;
    background-color: #dcdcdc;
    border-radius: 5px;
}
    min-height: min-content;
width: 400px;

`
const Text = styled.div`
    font-weight: 300;
    line-height: 29px;
    text-align: justify;
    list-style: initial;
    color: #717171;
    font-family: PFont-Light;
    margin: 7px 0px;
    font-size: 14px;
`
const Title = styled.div`
    align-self: flex-start;
    font-size: 1.5625rem;
    font-weight: 500;
    margin: 40px 0;
    color: ${ PColor };
`
// const CardLocationItem = styled.div`
//     width: 100%;
//     min-height: 40px;
//     position: relative;
//     border: 0;
//     color: #717171;
//     background: transparent;
//     overflow: hidden;
//     text-decoration: none;
//     transition: all 200ms ease-in-out;
//     height: auto;
//     opacity: 1;
//     visibility: visible;
//     cursor: pointer;
//     border-radius: 8px;
//     margin: 5px 0px;
//     ${ props => props.active ? css`
//     border-color: #ea1d2c;
//     color: #3e3e3e;
//     ` : css`
//     border: 1px solid #f2f2f2;
//     ` }
//     `