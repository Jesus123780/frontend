import React, { useState } from 'react'
import { Container, Register, Form } from './styled.jsx'
export const RegisterUser = (props) => {
    const [setActive] = useState(props)

    const handleActiveClick = e => {
        e.stopPropagation()
        setActive(!active)
    }
    return (
        <Container>
            <Form>
                <bottom onClick={handleActiveClick}>OnClick</bottom>
                <Register active={active}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima harum corporis suscipit commodi magnam. Quas, consectetur voluptatem qui, repudiandae minus nesciunt architecto dolores aliquam tenetur laudantium cum provident assumenda quasi!
                </Register>
            </Form>
        </Container>
    )
}