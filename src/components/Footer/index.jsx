import React, { useEffect, useState } from 'react'
import { Container } from './styled'
export const Footer = () => {
    const [year, setYear] = useState(false)

    useEffect(() => {
        const fecha = new Date()
        setYear(fecha.getFullYear())
    }, [])

    const onClickTop = e => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <Container>
            <div>
                <li>Social</li>
            </div>
            <div>
                <li>Social</li>
            </div>
            <div>
                <li>Social</li>
            </div>
            <div>
                <li>Año: {year}</li>
            </div>
            <button onClick={onClickTop}>TOP</button>
        </Container>
    )
}