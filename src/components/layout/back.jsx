import React from 'react'
import PropTypes from 'prop-types'
const Back = ({ children }) => {
    return (<>

        <div>
            <main>
                {children}

            </main>
        </div></>
    )
}

Back.propTypes = {
    onClick: PropTypes.func
}

export default Back