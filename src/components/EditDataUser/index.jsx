// import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client'
import React, { useContext, useState }/* , { useState } */ from 'react'
// import { InputTags } from '../InputTagsOne';
import { Context } from '../../Context'
import { Container, Title, Paragraph, Form, Input, LabelInput, BoxInput } from './styled';
import { CHANGE_DATA_USER } from '../../gql/EditDataUser'
import { validationSubmitHooks } from '../../utils'
import { RippleButton } from '../Ripple'
import { LoadEllipsis } from '../LoadingButton'
import InputHooks from '../InputHooks/InputHooks'
import { Loading } from '../Loading'
import styled, { css, keyframes } from 'styled-components';

export const EditData = ({ auth, input, inputNum, handleChangeNum, handleChange, handleSave, loading }) => {

    const { setAlertBox } = useContext(Context)
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [UpdateUser, { loading: loadingC }] = useMutation(CHANGE_DATA_USER)
    const [active, setActive] = useState(1)

    const handleClick = index => {
        setActive(index === active ? true : index)
    }
    const handleChangePass = (e, error) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: error })
    }
    const { currentPassword, newPassword } = values
    const handleSavePass = async e => {
        e.preventDefault()
        // Declarando variables
        let errorSubmit = false
        for (const x in errors) {
            if (errors[x]) errorSubmit = true
        }
        // Validando todos los campos que no sean nulos
        const errorForm = validationSubmitHooks(e.target.elements)
        for (const x in errorForm) {
            if (errorForm[x]) errorSubmit = true
        }
        setErrors({ ...errorForm })
        try {
            if (!errorSubmit) {
                const response = await UpdateUser({
                    variables: {
                        input: {
                            currentPassword,
                            newPassword
                        }
                    }
                })
                setAlertBox({ message: `${ response?.data?.UpdateUser }`, duration: 2000, color: 'red' })
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <Container>
                {loading || loadingC && <Loading />}
                <Title>Editar datos</Title>
                <Paragraph>Hola {`${ auth?.Uname ? auth?.Uname : 'Bienvenido' }`} </Paragraph>
                <button onClick={() => active !== 1 && handleClick(1)}>1</button>
                <button onClick={() => active !== 2 && handleClick(2)}>2</button>
                <button onClick={() => active !== 3 && handleClick(3)}>3</button>
                <Form onSubmit={ active !== 1 ? handleSavePass : handleSave } >
                    <React.Fragment> {active === 1 ?
                        <ContainerAnimation>
                            <BoxInput>
                                <Input name="Uname"
                                    value={input}
                                    onChange={handleChange}
                                />
                                <LabelInput >{'Nombre de usuario'}</LabelInput>
                            </BoxInput>
                            {inputNum && <BoxInput>
                                <Input name="uNewPassConfirm"
                                    value={inputNum}
                                    onChange={handleChangeNum}
                                />
                                <LabelInput >{'Teléfono'}</LabelInput>
                            </BoxInput>
                            }
                            <Input noSelect name="uNewPassConfirm"
                                value={auth?.uEmail}
                                title="Correo"
                                disabled
                            />
                        </ContainerAnimation>
                        : <ContainerAnimationTow>
                            <InputHooks name="currentPassword"
                                value={values.currentPassword}
                                errors={errors.currentPassword}
                                onChange={handleChangePass}
                                title="Contraseña"
                                required
                                autoComplete='none'
                                type="password"
                                range={{ min: 0, max: 180 }}
                            />
                            <InputHooks name="newPassword"
                                value={values.newPassword}
                                errors={errors.newPassword}
                                pass
                                onChange={handleChangePass}
                                title="Contraseña"
                                required
                                type="password"
                                range={{ min: 0, max: 180 }}
                            />
                        </ContainerAnimationTow> }</React.Fragment>
                    <RippleButton width='100%'>
                        {loading ? <LoadEllipsis color='#fff' /> : 'Confirmar'}
                    </RippleButton>
                </Form>
            </Container>
        </div>
    )
}
export const AnimationRight = keyframes`
0% {
    transform: translateX(50vw);
    opacity: 0;
}
100% {
    transform: translateY(0);
    opacity: 1;
}
`
export const AnimationLeft = keyframes`
0% {
    transform: translateX(-50vw);
    opacity: 0;
}

100% {
    transform: translateY(0);
    opacity: 1;
}
`
const ContainerAnimation = styled.div`
${ props=> props.active === 1 ? css`animation: ${ AnimationRight } 200ms;` : css`animation: ${ AnimationRight } 200ms;` }

`
const ContainerAnimationTow = styled.div`
${ props=> props.active === 2 ? css`animation: ${ AnimationLeft } 200ms;` : css`animation: ${ AnimationLeft } 200ms;` }

`