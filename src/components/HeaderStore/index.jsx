import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PColor } from '../../assets/colors'
import InputHooksSearcher from '../InputHooksSearcher/InputHooks'
import { IconLogo } from '../../assets/icons/icons'
import { CartShop } from '../CartShop'
import { EnterLocation } from '../LocationUser'
import { Header, Content, ContentInput } from './styled'

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
                    <EnterLocation />
                </div>
                <CartShop />
            </Content>
        </Header>
    )
}