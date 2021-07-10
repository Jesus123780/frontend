import React from 'react';
import { Container, Title, Paragraph, Form, Input, LabelInput, BoxInput } from './styled';
import { RippleButton } from '../Ripple';

export const EditDatesUser = ({ auth, input, inputNum, handleChangeNum, handleChange }) => {

    return (
        <Container>
            <Title>Editar datos</Title>
            <Paragraph>Hola {`${ auth?.Uname }`} </Paragraph>
            <Form>
                <BoxInput>
                    <Input name="Uname"
                        value={input}
                        onChange={handleChange}
                    />
                    <LabelInput >{'Nombre de usuario'}</LabelInput>
                </BoxInput>
                <BoxInput>
                    <Input name="uNewPassConfirm"
                        value={inputNum}
                        onChange={handleChangeNum}
                    />
                    <LabelInput >{'Teléfono'}</LabelInput>
                </BoxInput>
                <Input noSelect name="uNewPassConfirm"
                    value={auth?.uEmail}
                    title="Correo"
                    disabled
                />
                <RippleButton width='100%' label='Confirmar'></RippleButton>
            </Form>
        </Container>
    )
}