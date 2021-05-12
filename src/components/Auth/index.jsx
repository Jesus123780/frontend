import React, { useState } from 'react'

export const About = () => {
    const [showLogin, setShowLogin] = useState(true)
    // const onClickLogin = () => {
    //     setShowLogin(!showLogin)
    // }
    // console.log
    return (
        <div>
            {
                showLogin ?
                    <>
                        <p>No tiedfsdfnes cuenta?</p>
                        <button onclick={() => setShowLogin(!showLogin)}>Rsdfsdfsegister</button>
                    </>
                    :
                    <p>Ya tienessdfsdf cuenta?
                        <button onclick={() => setShowLogin(!showLogin)}>Infsdficiar sesión</button>
                    </p>
            }

        </div>
    )
}