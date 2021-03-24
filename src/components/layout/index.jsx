import React from 'react'
import PropTypes from 'prop-types'
import { Container, Head, Main, MenuHeader, Menu, OptionBox, Text, ChildrenBox, MenuButton } from './Styled'

const Front = ({ children }) => {
    return (
        <Container>
            <Main>
                <Head>
                    <MenuHeader>
                        <MenuButton>
                        </MenuButton>
                        <Menu>
                            <OptionBox>
                                <Text>Home</Text>
                            </OptionBox>
                            <OptionBox margin='20px 0'>
                                <Text>sdasasda</Text>
                            </OptionBox>
                        </Menu>
                    </MenuHeader>
                </Head>
                <ChildrenBox>
                    {children}
                </ChildrenBox>
            </Main>
        </Container>
    )
}

Front.propTypes = {
    onClick: PropTypes.func
}

export default Front