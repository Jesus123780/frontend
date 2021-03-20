// import { Auth } from 'aws-amplify'
// import React, { createContext, useCallback, useEffect, useState } from 'react'
// export const Context = createContext()

// const Provider = ({ children }) => {
//     const [isAuth, setIsAuth] = useState(false)
//     const [error, setError] = useState({})
//     const [localUserData, setLocalUserData] = useState(() => {
//         try { return JSON.parse(localStorage.getItem('userdata')) }
//         catch { return false }
//     })
//     // Datos del usuario activo
//     const [userData, setUserData] = useState(async () => {
//         try { return await Auth.currentAuthenticatedUser() }
//         catch { return false }
//     })
//     // Datos de la sesión activa
//     const [sessionData, setSessionData] = useState(async () => {
//         try {
//             await Auth.currentSession()
//         } catch { false }
//         return localUserData ? setIsAuth(true) : false
//     })

//     useEffect(() => {
//         !!error?.message && setTimeout(() => setError(''), error.duration || 7000)
//     }, [error])

//     /**
//      * @description función que desencadena la petición de los datos de sesión del usuario activo
//      * y actualiza el estado con la información de la sesión
//      */
//     const handleSessionData = useCallback(async () => {
//         try {
//             const res = await Auth.currentSession()
//             setSessionData(res)
//         } catch { setSessionData(false) }
//     })

//     const setLocalData = userResponse => {
//         setLocalUserData(userResponse)
//         localStorage.setItem('userdata', JSON.stringify(userResponse))
//     }

//     const value = {
//         isAuth,
//         sessionData,
//         userData,
//         error,
//         localUserData,
//         setLocalData: userResponse => setLocalData(userResponse),
//         setIsAuth: auth => setIsAuth(auth),
//         setAlertBox: err => setError(err),
//         activateAuth: uData => {
//             setUserData(uData)
//             handleSessionData()
//             setIsAuth(true)
//         }
//     }

//     return (
//         <Context.Provider value={value}>
//             {children}
//         </Context.Provider>
//     )
// }

// export default {
//     Provider,
//     Consumer: Context.Consumer
// }