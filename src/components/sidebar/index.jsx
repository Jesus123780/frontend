import React, { useState } from 'react'
import Options from './Options'
import { SideBarLeft, BoxSideBar, LinkOption, BoxTitleNavBar, Name, Content, ContainerBoxUser, ContainerUserImg, SpanItem } from './Styled'
import { IconArrowBottom, IconUser } from '../../assets/icons';
import { PLColor } from '../../assets/colors';
import { SubMenu } from '../showSubMenu';
export const SideBar = () => {
    const [active, setActive] = useState(false)
    const [modal, setModal] = useState(false)

    const handleClick = index => setActive(index === active ? false : index)
    return (
        <SideBarLeft>
            <BoxSideBar>
                <Content>
                    {/* SubMenu */}

                    <LinkOption to='/'>
                        <BoxTitleNavBar>
                            <Name>NotePlus</Name>
                        </BoxTitleNavBar>
                    </LinkOption>
                    <ContainerBoxUser onClick={setModal}>
                        <ContainerUserImg>
                            <IconUser size='20px' />
                            <span>Bienvenido</span>
                            <IconArrowBottom size='10px' color={PLColor} />
                        </ContainerUserImg>
                        <SubMenu title='Registrar nueva tarea' show={modal} onHidde={() => setModal(false)} height='auto' hiddeOnConfirm={false} timeOut={280} footer={false} header={true}>
                            <SpanItem>Perfil</SpanItem>
                            <SpanItem>Editar Perfil</SpanItem>
                            <SpanItem>Configurar Cuenta</SpanItem>
                            <SpanItem>Cerrar sesión </SpanItem>
                        </SubMenu>
                    </ContainerBoxUser>
                    <Options label='notas' active={active === 1} handleClick={() => handleClick(1)} icon={<IconArrowBottom size='10px' color={PLColor} />}>
                        <LinkOption to='/asdas'>
                            <span>Mis notas</span>
                        </LinkOption>
                        <LinkOption to='/login'>
                            <span> Planes</span>
                        </LinkOption>
                    </Options>
                    <Options label='Home' active={active === 2} handleClick={() => handleClick(2)} icon={<IconArrowBottom size='10px' color={PLColor} />}>
                        <LinkOption to='/'>
                            <span>Home</span>
                        </LinkOption>
                    </Options>
                    <Options label='Home' active={active === 3} handleClick={() => handleClick(3)} icon={<IconArrowBottom size='10px' color={PLColor} />}>
                        <LinkOption to='/'>
                            <span>Mis Libros</span>
                        </LinkOption>
                    </Options>
                </Content>
            </BoxSideBar>
        </SideBarLeft>
    )
}