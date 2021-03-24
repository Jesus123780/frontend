import React from 'react'
import PropTypes from 'prop-types'
import { Container, Head, Main, Footer, MenuHeader, Menu, OptionBox, Text, ChildrenBox, MenuButton } from './Styled'

const Back = ({ children }) => {
    return (
        <Container>
            <Main>
                <Head>
                    <MenuHeader>
                        <MenuButton>
                        </MenuButton>
                        <Menu>
                            <OptionBox>
                                <Text>Hsssome</Text>
                            </OptionBox>
                            <OptionBox margin='20px 0'>
                                <Text>esta es la dossssssssssssss</Text>
                            </OptionBox>
                        </Menu>
                    </MenuHeader>
                </Head>
                <ChildrenBox>
                    {children}
                    <Footer>
                        <OptionBox>
                            <Text>Hsssome</Text>
                        </OptionBox>
                        <OptionBox>
                            <Text>Hsssome</Text>
                        </OptionBox>
                        <OptionBox>
                            <Text>Hsssome</Text>
                        </OptionBox>
                    </Footer>
                </ChildrenBox>
            </Main>
        </Container>
    )
}

Back.propTypes = {
    onClick: PropTypes.func
}

export default Back