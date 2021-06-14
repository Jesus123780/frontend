import React from 'react'
import { HeaderC } from '../HeaderStore'
import { Footer } from '../Footer'

export const Layout = props => {
    return (<>
        <HeaderC />
        <main style={{ backgroundColor: '#ffffff', height: '100%' }}>
            {props?.children}
        </main>
        <Footer />

    </>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción