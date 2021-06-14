import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import { PColor } from '../../assets/colors'
import { IconLogout, IconShopping } from '../../assets/icons/icons'
import { Content, FloatingBox, Button, FloatingBoxTwo, Overline } from './styled'

export const CartShop = () => {
    const history = useHistory()
    const [show, setShow] = useState(false)
    const onClickLogout = () => {
        history.push('/login')
    }
    useEffect(() => {
        const body = document.body
        body.addEventListener('keyup', e => e.code === 'Escape' && setShow(false))
        return () => body.removeEventListener('keyup', () => setShow)

    }, [setShow])
    const handleClick = index => {
        setShow(index === show ? false : index)
    }
    const location = useLocation()

    useEffect(() => {
        setShow(false)
    }, [location]);

    return (
        <>
            <Overline onClick={() => setShow(!true)} show={show} />
            <Content>
                <Button onClick={() => handleClick(1)}>
                    <IconShopping size='25px' color={PColor} />
                </Button>
                <FloatingBox show={show === 1}>
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                    lorem ipsum dolor sit am
                </FloatingBox>
                <Button onClick={onClickLogout}>
                    <IconLogout size='20px' color={PColor} />
                </Button>
                <ContainerOption>
                    <Button onClick={() => handleClick(2)}>
                        <IconShopping size='25px' color={PColor} />
                    </Button>
                    <FloatingBoxTwo show={show === 2}>
                        LOLOO
                    </FloatingBoxTwo>
                </ContainerOption>
            </Content>
        </>
    )
}
const ContainerOption = styled.div`
    position: relative;
`