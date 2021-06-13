import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import LogoImage from '../../assets/'
import { PColor } from '../../assets/colors'
import InputHooksSearcher from '../InputHooksSearcher/InputHooks'
import { IconEnterLocation, IconLogo } from '../../assets/icons/icons'
import { CartShop } from '../CartShop'
import { Header, Content, Text, ContentInput } from './styled'

export const HeaderC = () => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const handleChange = (e, error) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: error })
    }
    return (
        <Header>
            <Content>
                <div>
                    <Link to='/'>
                        <IconLogo size='80px' color={PColor} />
                    </Link>
                </div>
                <div>
                    <ContentInput>
                        <InputHooksSearcher title='Busca tus productos' name='cliNam' value={values?.cliNam} onChange={handleChange} type='text' range={{ min: 0, max: 20 }} />
                    </ContentInput>
                </div>
                <div>
                    <Text>Entregar en...
                        <IconEnterLocation size='10px' color={PColor} />
                    </Text>
                </div>
                <CartShop />
            </Content>
        </Header>
    )
}