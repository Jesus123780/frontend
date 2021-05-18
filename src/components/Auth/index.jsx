import React, { useState } from 'react'
import { ButtonHook } from '../ButtonHooks'
import InputHooks from '../InputHooks/InputHooks'
import { Container, Register, ContainerForm } from './styled.jsx'
export const About = (onChange, dataForm) => {
    const [active, setActive] = useState(false)

    const handleActiveClick = e => {
        e.stopPropagation()
        setActive(!active)
    }
    return (
        <Container>

            <ContainerForm>
                <bottom onClick={handleActiveClick}>OnClick</bottom>
                <ButtonHook Ripple bgColor='purple'  padding=' 30px'onClick={handleActiveClick}>Registrate con Facebook</ButtonHook>
                <Register active={active}>
                    <InputHooks onChange={onChange} name={'uPassword'} value={dataForm.uPassword || ''} title="Titulo" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima harum corporis suscipit commodi magnam. Quas, consectetur voluptatem qui, repudiandae minus nesciunt architecto dolores aliquam tenetur laudantium cum provident assumenda quasi!
                </Register>
            </ContainerForm>
        </Container>
    )
}