import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BGColor, PColor, SEGColor } from '../../assets/colors'
import { useApolloClient } from '@apollo/client'
import { IconLogout, IconShopping, IconArrowRight, IconPromo } from '../../assets/icons/icons'
import { Setting } from './setting/index'
import { RippleButton } from '../Ripple'
import useAuth from '../hooks/useAuth'
import { Content, FloatingBox, Button, FloatingBoxTwo, Overline } from './styled'
import { NavLink } from 'react-router-dom'
import './styles.css'

export const CartShop = () => {
    const { auth, logout } = useAuth()
    const { client } = useApolloClient()
    const [show, setShow] = useState(false)

    const onClickLogout = () => {
        client?.clearStore()
        logout()
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
    const [activeLogin, setActive] = useState(false)
    // activa el menu de configuraciones del perfil
    const activeSettings = () => {
        setActive(!activeLogin)
    }
    return (
        <div style={{ display: 'block' }}>
            <Overline onClick={() => setShow(!true)} show={show} />
            {auth && <><Content >
                <Button onClick={() => handleClick(1)}>
                    <IconPromo size='25px' />
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
                        <Products>
                            {'9+'}
                        </Products>
                    </Button>
                    <FloatingBoxTwo show={show === 2}>
                        <Option>
                            <Enlace to={''}>
                                <Avatar>
                                    <Text>
                                        {auth?.Uname.slice(0, 2).toUpperCase()}
                                    </Text>
                                </Avatar>
                                <BoxUser>
                                    <span>Hola, {auth?.Uname}</span>
                                    <span>Ver tu perfil</span>
                                </BoxUser>
                            </Enlace>
                        </Option>
                        <Setting activeLogin={activeLogin} setActive={setActive} />
                        <RippleButton standard onClick={activeSettings} label={'Configuración y privacidad'} >
                            <IconArrowRight size='20px' color={PColor} />
                        </RippleButton>
                        <RippleButton standard onClick={onClickLogout} label={'Seguridad'}>
                        </RippleButton>
                        <RippleButton standard onClick={onClickLogout} label={'Ayuda'}>
                        </RippleButton>
                        <NavLink activeClassName='active' to={'/mi-cuenta/datos-de-registro'}>
                            <RippleButton standard label={'Editar datos'}>
                            </RippleButton>
                        </NavLink>
                        <RippleButton standard onClick={onClickLogout} label={'cerrar'}>
                            <IconLogout size='20px' color={PColor} />
                        </RippleButton>
                    </FloatingBoxTwo>
                </ContainerOption>
            </Content>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Enlace to='/historial'>Mis compras</Enlace>
                <Enlace to='/historial'>Promociones</Enlace>
                <Enlace to='/historial'>Historial</Enlace>
            </div>
            </>
            }
            {!auth && <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <Advertising>
                    50%to en todos los productos
                </Advertising>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Enlace to='/registration'>Crear una cuenta</Enlace>
                    <Enlace to='/login'>Ingresar</Enlace>
                    <Enlace to='/historial'>Historial</Enlace>
                </div>
            </div>
            }
        </div>
    )
}
const ContainerOption = styled.div`
    position: relative;
`
const Advertising = styled.div`
    position: relative;
    padding: 7px;
`
const Enlace = styled(Link)`
    position: relative;
    display: flex;
    color: ${ SEGColor };
    user-select: none;
    border: none;
    left: 12px;
    padding: 0;
    font-size: 14px;
    align-items: center;
`
const Option = styled.div`
    padding: 15px 0px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    &:hover{
        background-color: #ffffff1a;
    }
`
const Avatar = styled.div`
    width: 60px;
    min-width: 60px;
    height: 60px;
    justify-content: center;
    background-color: #ffff;
    border-radius: 100%;
    border: 2px solid red;
    padding: 1px;
    display: flex;
    align-items: center;
`
const Text = styled.span`
    font-size: 17px;
    font-family:  PFont-Regular;
`
const BoxUser = styled.div`
    width: 65px;
    height: 25px;
    border-radius: 30px;
    position: relative;
    transition: .3s ease;
    align-items: center;
    & > span {
        font-family:  PFont-Regular;
        font-size: 12px;
        white-space: nowrap;
        display: block;
        margin-left: 25px;
    }
    & > span:first-child {
        font-family:  PFont-Bold;
    }
    `
const Products = styled.div`
    position: absolute;
    height: 22px;
    width: 22px;
    top: -10px;
    left: 25px;
    font-size: 11px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ PColor };
    color: ${ BGColor };
    border-radius: 100%;
    font-family: PFont-Regular;
`