import React, { useState, useEffect, useCallback } from 'react'

import { Container, Modal, ModalHeader, ModalTitle, BtnClose, ModalBody, ModalFooter, BtnCancel, BtnConfirm } from './styled'

import { BUTTONS_TEXT } from './constanst'
import { IconClose } from '../../assets/icons'

export const SubMenu = ({
    title,
    show,
    backdrop = true,
    keyboard = true,
    footer = true,
    btnCancel = true,
    btnConfirm = true,
    children,
    hiddeOnConfirm = true,
    timeOut = 200,
    header = true,
    onHidde = () => undefined,
    onCancel = () => undefined,
    onConfirm = () => undefined
}) => {
    const [state, setState] = useState(show)

    const hidde = useCallback(() => {
        setState(false)
        onCancel()
        setTimeout(onHidde, timeOut)
    }, [onCancel, onHidde, timeOut])

    useEffect(() => {
        if (keyboard && show) window.addEventListener('keydown', e => e.code === 'Escape' && hidde())
        return () => keyboard && window.removeEventListener('keydown', () => { })
    }, [keyboard, hidde])

    useEffect(() => {
        setState(show)
    }, [show])

    const onBackdropHide = e => {
        e.preventDefault()
        if (backdrop === 'static') return 0
        hidde()
    }

    const clickCancel = () => {
        hidde()
        onCancel()
    }

    const clickConfirm = () => {
        if (hiddeOnConfirm) hidde()
        onConfirm()
    }
    return (
        <Container show={show} state={state} onMouseDown={onBackdropHide}>
            <Modal show={show} state={state} onMouseDown={e => e.stopPropagation()} >
                {header && <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <BtnClose onClick={hidde}><IconClose size='10px'/></BtnClose>
                </ModalHeader>}
                <ModalBody >
                    {children}
                </ModalBody>
                {footer && <ModalFooter>
                    {btnCancel && <BtnCancel type='buttom' onClick={clickCancel}>{BUTTONS_TEXT.cancel}</BtnCancel>}
                    {btnConfirm && <BtnConfirm type='button' onClick={clickConfirm}>{BUTTONS_TEXT.confirm}</BtnConfirm>}
                </ModalFooter>}
            </Modal>
        </Container>
    )
}