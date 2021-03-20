import React from 'react'
import { HeaderC } from '../header'
import { Body } from './styled'

export const Layout = ({ children }) => {
    return (
        <Body>
            <HeaderC />
            {children}
        </Body>
    )
}