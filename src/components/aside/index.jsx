import React from 'react'
import { HeaderC } from '../header'
import { Body } from './styled'

export const LayoutMain = ({ children }) => {
    return (
        <Body>
            <HeaderC />
            {children}
        </Body>
    )
}