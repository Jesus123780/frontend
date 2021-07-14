// import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState }/* , { useState } */ from 'react'
import { DropdownMenu } from '../dropdown-menu';
import { Container/* , Card  */, Title, Paragraph, ContainerSliderForm, TextRegister, Text, Alert, Overline, ButtonSubmit, InputCheckbox } from './styled'

import useFullscreenMode from '../hooks/useFullScreenMode';
// import { InputTags } from '../InputTagsOne';
import { Rate } from '../Rate';
import { Link } from 'react-router-dom';
import InputHooks from '../InputHooks/InputHooks';
import { LoadEllipsis } from '../LoadingButton';
import { numberFormatM, validationSubmitHooks } from '../../utils';
import { Context } from '../../Context'
import { useMutation } from '@apollo/client';
import { REGISTER } from '../../gql/Register';
import { BGColor } from '../../assets/colors';

export const Registration = () => {
    const [visibleMenu, setVisibleMenu] = useState(false) // Visibilidad del menú
    const [positionMenu, setPositionMenu] = useState({})
    const handleMenu = (e, param) => {
        setPositionMenu({ x: e.pageX - (param || 0), y: e.pageY })
        setVisibleMenu(true)
    }
    const [elementRef, FullscreenIcon] = useFullscreenMode();
    const [rating, setRating] = useState(0);
    const { setAlertBox } = useContext(Context)
    const [register, { loading, error: err }] = useMutation(REGISTER)
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const handleChange = (e, error) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: error })
    }
    console.log(err)
    const handleRegister = async e => {
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
        if (errorSubmit) {
            return setAlertBox({ message: 'Por favor, verifique que los Campos estén correctos.', duration: 5000, color: 'red' })
        }
        const { username, name, email, password, ConfirmPassword, lastName, uPhoNum } = values
        if (ConfirmPassword !== password) {
            setAlertBox({ message: 'Las contraseñas no coinciden', duration: 5000, color: 'red' })
        }
        try {
            if (!errorSubmit) {
                const results = await register({
                    variables: {
                        input: {
                            username,
                            email,
                            password,
                            name,
                            lastName,
                            uPhoNum,
                        }
                    }

                })
                setValues({})
                setErrors({})
                // eslint-disable-next-line
                console.log(results)
            }
        } catch (error) {
            setValues({})
            setErrors({})
            alert(error.message)
        }
    }
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [loading])
    useEffect(() => {
        const TitleDocument = '¡Hola! Ingresa tu e-mail o usuario para poder ingresar '
        document.title = `${ TitleDocument }`
    }, [])
    return (
        <Container ref={elementRef}>
            <DropdownMenu show={visibleMenu} position={positionMenu} onClickOutside={() => setVisibleMenu(false)} options={[
                { optionName: 'Trasladar' },
                { optionName: 'cortar' },
            ]} />
            <button onClick={() => handleMenu(!positionMenu)}>
                onClick</button>
            {/* <InputTags onChange={() => setVisibleMenu(false)} /> */}
            <div ref={elementRef} >
                <div>
                    {FullscreenIcon}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Rate rating={rating} onRating={rate => setRating(rate)} />
            </div>
            <p>{numberFormatM(11000000)}</p>
            <Container>
                <Title>Preguntas Frecuentes </Title>
                <Paragraph>Preguntas Frecuentes</Paragraph>
            </Container>
            <Container>
                <Overline />
                <ContainerSliderForm onSubmit={handleRegister}>
                    <Text>Crear cuenta</Text>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <InputHooks
                            width='50%'
                            title='Nombre'
                            required
                            type="text"
                            errors={values?.name}
                            value={values?.name}
                            onChange={handleChange}
                            name='name'
                        />
                        <InputHooks
                            width='50%'
                            title='Apellido - Opcional'
                            required
                            errors={values?.lastName}
                            value={values?.lastName}
                            onChange={handleChange}
                            name='lastName'
                        />
                        <InputHooks
                            width='50%'
                            title='Usuario'
                            required
                            type="text"
                            errors={values?.username}
                            value={values?.username}
                            onChange={handleChange}
                            name='username'
                        />

                        <InputHooks
                            width='50%'
                            name="email"
                            value={values?.email}
                            errors={values?.email}
                            email
                            onChange={handleChange}
                            type="text"
                            title="Correo Electrónico"
                            required
                            range={{ min: 0, max: 180 }}
                        />
                        <InputHooks
                            width='50%'
                            name="uPhoNum"
                            value={values?.uPhoNum}
                            errors={values?.uPhoNum}
                            onChange={handleChange}
                            title="Numero"
                            required
                            range={{ min: 0, max: 180 }}
                        />
                        <InputHooks
                            width='50%'
                            name="password"
                            value={values?.password}
                            errors={values?.password}
                            pass
                            onChange={handleChange}
                            title="Contraseña"
                            required
                            type="password"
                            range={{ min: 0, max: 180 }}
                        />
                        <InputHooks
                            width='50%'
                            name="ConfirmPassword"
                            value={values?.ConfirmPassword}
                            errors={values?.ConfirmPassword}
                            onChange={handleChange}
                            type="password"
                            pass
                            title="Confirmar contraseña"
                            required
                            range={{ min: 0, max: 180 }}
                            passConfirm={{ validate: true, passValue: values?.password }}
                        />
                    </div>
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                        <InputCheckbox type="checkbox" name={values.terCon} value={values.terCon} />
                        <label>Acepto los<Link to='/terminos-y-condiciones'>Términos y Condiciones </Link>y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.</label>
                    </div>
                    {err && <Alert>An error occurred</Alert>}
                    <ButtonSubmit colorFont={BGColor} color='1' loading={loading} content='center' type='submit'>{loading ? <LoadEllipsis color='#fff' /> : 'Registrate'} </ButtonSubmit>
                    <Link to='/login'>
                        <TextRegister> Login</TextRegister>
                    </Link>
                </ContainerSliderForm>
            </Container>
        </Container>
    )
}