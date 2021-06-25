import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useMutation } from '@apollo/client';
import { setToken } from '../../utils';
import { LOGIN } from '../../gql/LoginAut';
import { PColor } from '../../assets/colors';
import InputHooks from '../InputHooks/InputHooks';
import { LoadEllipsis } from '../LoadingButton';
import { ContainerSliderForm, TextRegister, Text, Alert, Container, Overline, ButtonSubmit } from './styled'

export const Login = () => {
    // Contexto
    // const { setUser } = useAuth()
    const [login, { loading, error }] = useMutation(LOGIN)
    const [values, setValues] = useState({})
    // const { setAlertBox } = useContext(Context)
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
            // setUser(decodeToken(token))
        } catch (erro) {
            setValues({})
            // setAlertBox({
            //     message: erro.message,
            //     duration: 10000,
            // })
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
                        <Text>Inicia sesión
                        </Text>
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
                        <TextRegister> Registrate</TextRegister>
                    </ContainerSliderForm>
                </Container>
            </>, document.querySelector('#portal')
            )}

        </>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción