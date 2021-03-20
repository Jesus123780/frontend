import React, { useState, useEffect, useCallback } from 'react'

import { Container, Wrapper, Modal, ModalHeader, ModalTitle, BtnClose, ModalBody, ModalFooter, BtnCancel, BtnConfirm } from './styled'

import { MODAL_SIZES, BUTTONS_TEXT } from './constanst'

export const AwesomeModal = ({
    title,
    size = MODAL_SIZES.medium,
    show,
    backdrop = true,
    keyboard = true,
    footer = true,
    btnCancel = true,
    btnConfirm = true,
    children,
    hiddeOnConfirm = true,
    timeOut = 200,
    height,
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
        return () => keyboard && window.removeEventListener('keydown', () => {})
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
            <Wrapper onMouseDown={onBackdropHide}>
                <Modal show={show} state={state} size={size} onMouseDown={e => e.stopPropagation()} >
                    {header && <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>
                        <BtnClose onClick={hidde}>X</BtnClose>
                    </ModalHeader>}
                    <ModalBody height={height}>
                        {children}
                    </ModalBody>
                    {footer && <ModalFooter>
                        {btnCancel && <BtnCancel type='buttom' onClick={clickCancel}>{BUTTONS_TEXT.cancel}</BtnCancel>}
                        {btnConfirm && <BtnConfirm type='button' onClick={clickConfirm}>{BUTTONS_TEXT.confirm}</BtnConfirm>}
                    </ModalFooter>}
                </Modal>
            </Wrapper>
        </Container>
    )
}