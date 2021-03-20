import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Nav, Li } from './styled'
export const HeaderC = () => {
    return (
        <>
            <Header>
                <Nav>
                    <ul>
                        <Li>
                            <Link to='login'>login</Link>
                        </Li>
                    </ul>

                </Nav>
            </Header>
        </>
    )
}