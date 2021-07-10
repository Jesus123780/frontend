import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components';
import { BGColor, PColor } from '../../assets/colors';
import { IconEdit, IconDost, IconDelete } from '../../assets/icons/icons';
import { RippleButton } from '../Ripple';
import { LocationForm } from './formLocation';
import { IconEnterLocation, IconArrowBottom } from '../../assets/icons/icons'
import { DeliveryInputWrapper, Text, Button, ContainerTask, OptionsFunction, ListTask, Title } from './styled';

export const EnterLocation = () => {
    const [modal, setModal] = useState(false)
    const [showCard, setShowCard] = useState(0)
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
    const [show, setShow] = useState(false)
    useEffect(() => {
        const body = document.body
        body.addEventListener('keyup', e => e.code === 'Escape' && setShow(false))
        return () => body.removeEventListener('keyup', () => setShow)
    }, [setShow])
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    const submitUpdate = () => {
        setEdit({
            id: null,
            value: ''
        });
    };
    if (edit.id) {
        return <EditForm edit={edit} onSubmit={submitUpdate} />;
    }
    const handleClick = index => {
        setShowCard(index === showCard ? false : index)
    }
    return (<>
        <DeliveryInputWrapper onClick={() => setModal(!modal)}>
            <Button standard2>
                <Text>Entregar en <IconEnterLocation size='10px' color={PColor} /></Text>
                <Text bold>kr 15# 12-44 <IconArrowBottom size='10px' color={PColor} /></Text>
            </Button>
        </DeliveryInputWrapper>
        {ReactDOM.createPortal(<>
            <ContainerModal modal={modal} onClick={() => setModal(!modal)}>
                <AwesomeModal onClick={e => e.stopPropagation()} modal={modal}>
                    {showCard === 1 ?
                        <Card padding='0px'>
                            <ContentForm>
                                <LocationForm setShowCard={setShowCard} showCard={showCard} handleClick={handleClick} />
                            </ContentForm>
                        </Card>
                        : <Card padding='30px'>
                            <div style={{ padding: '30px' }}>
                                <Title>¿Donde quieres recibir tu pedido?</Title>
                            </div>
                            <ContainerBottom>
                                <RippleButton onClick={() => handleClick(1)} width='100%' label='Buscar direction'>
                                </RippleButton>
                            </ContainerBottom>
                            {[1, 2, 3 ].map(index => (
                                <div>
                                    {/* eslint-disable-next-line */}
                                    <ContainerTask show={show === index} key={index?.c_id}>
                                        <OptionsFunction show={show === index}>
                                            <Button><IconDelete size={30} /></Button>
                                            <Button onClick={() => setEdit({ id: index.c_id, value: index.c_name })} ><IconEdit size={30} /></Button>
                                        </OptionsFunction>
                                        <ListTask show={show === index}>
                                            {index.c_name} Carrera 49c #12 54   Prado
                                        </ListTask>
                                        <div style={{ display: 'contents' }}><Button onClick={() => setShow(index === show ? false : index)}><IconDost size={30} color={show === index ? PColor : '#CCC'} /></Button></div>
                                    </ContainerTask>
                                </div>
                            ))}
                        </Card>}
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
    margin: auto;
    padding: ${ ({ padding }) => padding ? padding : '30px' };
    overflow-y: auto;
    max-height: 500px;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: #dcdcdc;
        border-radius: 5px;
    }
    height: calc(100vh - 100px);
    max-height: 584px;
    width: 694px;

`
const ContainerBottom = styled.div`
    background-color: transparent;
    width: 100%;
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
// use useLazyQuery se ejecuta cuando espera una acción
const ContentForm = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`