import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components';
import { BGColor, PColor } from '../../assets/colors';
import { RippleButton } from '../Ripple';
import { IconEnterLocation, IconArrowBottom, IconSearch } from '../../assets/icons/icons'
import { DeliveryInputWrapper, Text, Button } from './styled';

export const EnterLocation = () => {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden'
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [modal])

    useEffect(() => {
        if (modal) window.addEventListener('keydown', e => e.code === 'Escape' && setModal())
        return () => modal && window.removeEventListener('keydown', () => { })
    }, [modal])
    return (<>
        <DeliveryInputWrapper onClick={() => setModal(!modal)}>
            <Button standard2>
                <Text>Entregar en <IconEnterLocation size='10px' color={PColor} /></Text><br />
                <Text bold>kr 15# 12-44 <IconArrowBottom size='10px' color={PColor} /></Text>
            </Button>
        </DeliveryInputWrapper>
        {ReactDOM.createPortal(<>
            <ContainerModal modal={modal} onClick={() => setModal(!modal)}>
                <AwesomeModal onClick={e => e.stopPropagation()} modal={modal}>
                    <Card>
                        <RippleButton label="Buscar dirección">
                            <IconSearch size='20px' color={'#fff'} />
                        </RippleButton>
                        {[1, 1, 2, 4, 5, 6, 2, 4, 5, 6].map(x =>(<CardLocationItem key={x}>
                            <span>Direction</span>
                            <span>Direction</span>
                        </CardLocationItem>

                        ))}
                    </Card>
                </AwesomeModal>
            </ContainerModal>
        </>, document.getElementById('root')
        )}
    </>
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
        background-color: rgba(0, 0, 0, 0.4);
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
            transform: translateY(95px);
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
    width: 700px;
    margin: auto;
    padding: 30px;
    overflow-y: auto;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: #dcdcdc;
        border-radius: 5px;
    }

`
const CardLocationItem = styled.div`
    width: 100%;
    min-height: 40px;
    position: relative;
    border: 0;
    color: #717171;
    background: transparent;
    overflow: hidden;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    height: auto;
    opacity: 1;
    visibility: visible;
    cursor: pointer;
    border-radius: 8px;
    margin: 5px 0px;
    ${ props=> props.active ? css`
        border-color: #ea1d2c;
        color: #3e3e3e;
    ` : css`
        border: 1px solid #f2f2f2;
    ` }
`
// use useLazyQuery se ejecuta cuando espera una acción