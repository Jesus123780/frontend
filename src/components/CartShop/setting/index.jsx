import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { PColor, PLColor } from '../../../assets/colors'
import { Content } from './styled'
import { IconLogout, IconArrowLeft, IconArrowRight } from '../../../assets/icons/icons'
// import useAuth from '../../hooks/useAuth'
import { RippleButton } from '../../Ripple'

import { useApolloClient } from '@apollo/client'
import { AwesomeModal } from '../../AwesomeModal'
// 1
import { Password } from '../setting/Password'
// 2
import { Email } from '../setting/Email'
// 3
import { Number } from '../setting/Number'
// 3
import { Direction } from '../setting/direction'

export const Setting = props => {
    const { activeLogin, setActive } = props
    // activa el menu de configuraciones del perfil
    const onclickLoginForm = e => {
        e.stopPropagation()
        setActive(!activeLogin)
    }
    // const { logout } = useAuth()
    const { client } = useApolloClient()
    const onClickLogout = () => {
        client?.clearStore()
        // logout()
    }
    // Accion del modal
    const [modal, setModal] = useState(false)

    const handleClick = index => {
        setModal(index === modal ? false : index)
    }
    return (
        <>
            <Content activeLogin={activeLogin}>
                <GoBack onClick={onclickLoginForm}>
                    <IconArrowLeft color={`${ PLColor }`} size='25px' />
                    <span>Configuración y privacidad</span>
                </GoBack>
                <RippleButton standard onClick={() => handleClick(1)} label={'Cambiar contraseña'} >
                    <IconArrowRight size='20px' color={PColor} />
                </RippleButton>
                <Hr />
                <RippleButton standard onClick={() => handleClick(2)} label={'Cambiar Email'} >
                    <IconArrowRight size='20px' color={PColor} />
                </RippleButton>
                <Hr />
                <RippleButton standard onClick={() => handleClick(3)} label={'Cambiar Numero'} >
                    <IconArrowRight size='20px' color={PColor} />
                </RippleButton>
                <Hr />
                <RippleButton standard onClick={() => handleClick(4)} label={'Cambiar dirección'} >
                    <IconArrowRight size='20px' color={PColor} />
                </RippleButton>
                <Hr />
                <RippleButton standard onClick={() => onClickLogout()} label={'Cerrar sesión'} >
                    <IconLogout size='20px' color={PColor} />
                </RippleButton>
            </Content>
            {ReactDOM.createPortal(<>
                <AwesomeModal
                    show={modal} height='auto' hiddenOnConfirm={false} timeOut={1080} footer={false} header={true}
                    show={modal}
                    backdrop
                    onCancel={() => setModal(false)}
                    onHide={() => setModal(false)}
                    btnConfirm={false}
                    header={false}
                    footer={false}
                    padding='0px'
                    size='small'>
                    {modal === 1 ? <Password /> : (modal === 2) ? <Email /> : (modal === 3) ? <Number /> : (modal === 4) ? <Direction/> : <Number /> }
                </AwesomeModal>
            </>, document.getElementById('root')
            )}
        </>
    )
}
const Hr = styled.hr`
    background: #dadde1;
    border-width: 0;
    color: #dadde1;
    height: 1px;
    ${ props => props.Theme === 'light' && css`
        background-color: ${ ({ theme }) => `${ theme.BGAColor }32` } ;
    ` };

`
const GoBack = styled.div`
    display: flex;
    margin-bottom: 40px;
    & > span {
            font-family: PFont-Light;
            font-size: 14px;
            text-align: center;
            width: 100%;
            color: ${ ({ theme }) => `${ theme.PColor }` };
        }
`
export const Button = styled.button`
    margin: 0 0 0 30px;
    position: relative;
    cursor: pointer;
    z-index: 999;
    background-color:  transparent;
    ${ props => props.space &&css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0;
        & > span {
            font-family: PFont-Light;
            font-size: 14px;
            color: ${ ({ theme }) => `${ theme.PColor }` };
        }
    ` }
    @media only screen and (min-width: 960px){
    }
`