import React, { useState, useEffect } from 'react'
import Options from './Options'
import { SideBarLeft, BoxSideBar, LinkOption, BoxTitleNavBar, Name, ButtonMenu, Content, ContainerBoxUser, ContainerUserImg, SpanItem, ContainerOptions } from './Styled'
import { IconArrowBottom, IconMenuBurger, IconUser, IconTask, IconBasura, IconGraphic, IconCloseSesion } from '../../assets/icons';
import { BGColor, PLColor } from '../../assets/colors';
import { SubMenu } from '../showSubMenu';
export const SideBar = () => {
    const [active, setActive] = useState(false)
    const [modal, setModal] = useState(false)
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    const handleClick = index => setActive(index === active ? false : index)
    useEffect(() => {
        const body = document.body
        body.addEventListener('keyup', e => e.code === 'Escape' && setCollapsed(false))
        return () => body.removeEventListener('keyup', () => setCollapsed)
    }, [setCollapsed])
    return (
        <SideBarLeft toggle={collapsed} width={collapsed ? '40%' : '100%'} >
            <BoxSideBar>
                <Content>
                    <BoxTitleNavBar title='Esc para abrir menu' toggle={collapsed} display={collapsed ? 'block' : 'flex'}>
                        <Name>NotePlus</Name>
                        <ButtonMenu onClick={toggle}> <IconMenuBurger color={BGColor} size='30px' /></ButtonMenu>
                    </BoxTitleNavBar>
                    <ContainerBoxUser width={collapsed ? '10%' : '100%'} onClick={setModal}>
                        <ContainerUserImg display={collapsed ? 'none' : 'flex'}>
                            <IconUser size='20px' />
                            <span>Bienvenido</span>
                            <IconArrowBottom size='10px' color={PLColor} />
                        </ContainerUserImg>
                        <SubMenu title='Registrar nueva tarea' show={modal} onHidde={() => setModal(false)} height='auto' hiddeOnConfirm={false} timeOut={0} footer={false} header={true}>
                            <SpanItem>Perfil</SpanItem>
                            <SpanItem>Editar Perfil</SpanItem>
                            <SpanItem>Configurar Cuenta</SpanItem>
                            <SpanItem>Cerrar sesión </SpanItem>
                        </SubMenu>
                    </ContainerBoxUser>
                    <ContainerOptions>
                        <Options label='Mis notas' active={active === 1} handleClick={() => handleClick(1)} icon={<IconArrowBottom size='10px' color={PLColor} />} iconTwo={<IconTask size='25px' color={PLColor} />}>
                            <LinkOption to='/'>
                                <span>Mis notas</span>
                            </LinkOption>
                            <LinkOption to='/login'>
                                <span> Planes</span>
                            </LinkOption>
                        </Options>
                        <Options label='notas' active={active === 2} handleClick={() => handleClick(2)} icon={<IconArrowBottom size='10px' color={PLColor} />} iconTwo={<IconTask size='25px' color={PLColor} />}>
                            <LinkOption to='/'>
                                <span>Home</span>
                            </LinkOption>
                        </Options>
                        <Options label='Juegos' active={active === 2} handleClick={() => handleClick(2)} icon={<IconArrowBottom size='10px' color={PLColor} />} iconTwo={<IconTask size='25px' color={PLColor} />}>
                            <LinkOption to='/'>
                                <span>Home</span>
                            </LinkOption>
                        </Options>
                        <Options label='Progreso' active={active === 3} handleClick={() => handleClick(3)} icon={<IconArrowBottom size='10px' color={PLColor} />} iconTwo={<IconGraphic size='25px' color={PLColor} />}>
                            <LinkOption to='/'>
                                <span>Home</span>
                            </LinkOption>
                        </Options>
                        <Options label='Basura' active={active === 4} handleClick={() => handleClick(4)} icon={<IconArrowBottom size='10px' color={PLColor} />} iconTwo={<IconBasura size='25px' color={PLColor} />}>
                            <LinkOption to='/'>
                                <span>Mis Libros</span>
                            </LinkOption>
                        </Options>
                        <Options label='Cerrar sesión' active={active === 4} handleClick={() => handleClick(4)} icon={<IconArrowBottom size='10px' color={PLColor} />} iconTwo={<IconCloseSesion size='25px' color={PLColor} />}>
                            <LinkOption to='/'>
                                <span>Mis Libros</span>
                            </LinkOption>
                        </Options>
                    </ContainerOptions>
                </Content>
            </BoxSideBar>
        </SideBarLeft>
    )
}