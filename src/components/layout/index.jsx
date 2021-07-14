import React, { useContext } from 'react'
import { AlertBox } from '../AlertBox'
import { Context } from '../../Context'
import { useTheme } from '../hooks/useTheme'
import styled, { ThemeProvider } from 'styled-components'
import { HeaderC as Header } from '../../container/Header'
import { Container } from './Styled'
import { Footer } from '../Footer'
import { Context as contextLayout } from '../../Context'
export const LayoutMain = ({ children, error }) => {
    const [theme, handleTheme, mountedComponent, { keyTheme }] = useTheme()
    const { setAlertBox } = useContext(Context)
    if (!mountedComponent) setAlertBox({ message: '', duration: 5000, color: 'red' })
    const { collapsed } = useContext(contextLayout);
    return (
        <ThemeProvider theme={theme}>
            <AlertBox err={error} />
            <Header keyTheme={keyTheme} handleTheme={handleTheme} />
            <Container collapsed={collapsed}>
                <Main>
                    {children}
                </Main>
                <Footer />
            </Container>
        </ThemeProvider>
    )
}
const Main = styled.div`
    overflow-y: auto;
    background-color: ${ ({ theme }) => theme.InvColor };

`