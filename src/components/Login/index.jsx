import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useMutation } from '@apollo/client';
import { decodeToken, setToken } from '../../utils';
import { LOGIN } from '../../gql/LoginAut';
import { PColor } from '../../assets/colors';
import InputHooks from '../InputHooks/InputHooks';
import { LoadEllipsis } from '../LoadingButton';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router'
import { ContainerSliderForm, TextRegister, Text, Alert, Container, Overline, ButtonSubmit } from './styled'
import { Link } from 'react-router-dom';

export const Login = () => {
    // Contexto
    const { setUser } = useAuth()
    const [login, { loading, error }] = useMutation(LOGIN)
    const [values, setValues] = useState({})
    // const { setAlertBox } = useContext(Context)
    const router = useHistory()

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleRegister = async e => {
        e.preventDefault()
        const { email, password } = values
        try {
            const { data } = await login({
                variables: {
                    input: {
                        email,
                        password,
                    }
                }
            })
            const { token } = data.login
            setToken(token)
            setUser(decodeToken(token))
            router.push('/')

        } catch (erro) {
            setValues({})
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
        <>
            {ReactDOM.createPortal(<>
                <Container>
                    <Overline />
                    <ContainerSliderForm onSubmit={handleRegister}>
                        <Text>Inicia sesión</Text>
                        <InputHooks name="email"
                            value={values?.email}
                            errors={values?.email}
                            email
                            onChange={handleChange}
                            type="text"
                            title="Correo Electrónico"
                            required
                            range={{ min: 0, max: 180 }}
                        />
                        <InputHooks name="password"
                            value={values?.password}
                            errors={values?.password}
                            pass
                            onChange={handleChange}
                            title="Contraseña"
                            required
                            type="password"
                            range={{ min: 0, max: 180 }}
                        />
                        {error && <Alert>An error occurred</Alert>}
                        <ButtonSubmit colorFont={PColor} color='2' loading={loading} hoverColor content='center' type='submit'>{loading ? <LoadEllipsis color='#fff' /> : 'Login'} </ButtonSubmit>
                        <Link to='/registration'>
                            <TextRegister> Crear cuenta</TextRegister>
                        </Link>
                    </ContainerSliderForm>
                </Container>
            </>, document.querySelector('#portal')
            )}

        </>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción