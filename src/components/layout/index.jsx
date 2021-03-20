import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLazyQuery } from '@apollo/client'
import { GET_MODULES } from '../../graphql/modules'
import { Container, Head, Main, MenuHeader, Menu, OptionBox, Text, ChildrenBox, MenuButton } from './Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBar from '../sidebar'
import { AlertBox } from '../AlertBox'
import { Context } from '../../Context'
import Loading from '../../common/Loading'
import { faBars, faCog, faHome, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { ESFColor, SEGColor } from '../../../assets/colors'
import { useHistory } from 'react-router'
import { Auth } from 'aws-amplify'

const Layout = ({ children, isAuth, error }) => {
    const [permits, setPermits] = useState(false)
    const { localUserData } = useContext(Context)
    const [getUserPermits, { data: dataUP, error: errorUP, loading }] = useLazyQuery(GET_MODULES, { fetchPolicy: 'cache-first' })

    useEffect(() => {
        const id = localUserData?.uId || ''
        try {
            const lsPermits = JSON.parse(localStorage.getItem('permits'))
            return !lsPermits.length ? new Error('Error local') : setPermits(lsPermits)
        } catch (err) {
            getUserPermits({ variables: { data: { uId: id, upState: '1' } } })
        }
    }, [localUserData])

    useEffect(() => {
        (!errorUP && dataUP?.modules?.length) && localStorage.setItem('permits', JSON.stringify(dataUP.modules))
    }, [dataUP])

    const router = useHistory()
    const { setIsAuth, setAlertBox } = useContext(Context)

    const signOut = async e => {
        e.preventDefault()

        try {
            await Auth.signOut()
        } catch (err) {
            setAlertBox({ message: 'Ha ocurrido un error', duration: 5000, color: ESFColor })
        }
        localStorage.removeItem('userdata')
        localStorage.removeItem('permits')
        setIsAuth(false)
        router.push('/login')
    }

    return (
        <Container isAuth={isAuth}>
            {(loading && !error) && <Loading />}
            <AlertBox err={error} />
            {isAuth && <>
                <SideBar dataUPermits={permits || (dataUP?.modules || [])} />
            </>}
            <Main>
                {isAuth && <>
                    <Head>
                        <MenuHeader>
                            <MenuButton>
                                <FontAwesomeIcon icon={faBars} size='lg' color={SEGColor} />
                            </MenuButton>
                            <Menu>
                                <OptionBox>
                                    <FontAwesomeIcon icon={faHome} size='lg' color={SEGColor} />
                                    <Text>Home</Text>
                                </OptionBox>
                                <OptionBox margin='20px 0'>
                                    <FontAwesomeIcon icon={faCog} size='lg' color={SEGColor} />
                                    <Text></Text>
                                </OptionBox>
                                <OptionBox margin='20px 0' onClick={signOut}>
                                    <FontAwesomeIcon icon={faPowerOff} size='lg' color={SEGColor} />
                                </OptionBox>
                            </Menu>
                        </MenuHeader>
                    </Head>
                </>
                }
                <ChildrenBox>
                    {children}
                </ChildrenBox>
            </Main>
        </Container>
    )
}

Layout.propTypes = {
    onClick: PropTypes.func
}

export default Layout