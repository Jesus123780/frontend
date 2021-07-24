import './App.css';
import { useState, useEffect, useMemo } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Books } from './components/books/index'
import ContextLayout from './Context';
import { Suspense } from 'react';
import { Loading } from './components/Loading';
import { Login } from './pages/Login';
import withClearCache from './ClearCache';
import { NotFound } from './components/NotFound';
import AutoContext from './AutoContext'
import { decodeToken, getToken, removeToken } from './utils'
import { LayoutMain } from './components/layout'
// import { Layout } from './components/layout';
import { NoticeOfPrivacy } from './components/Legal/NoticeOfPrivacy';
import { TermsAndConditions } from './components/Legal/TermsAndConditions';
import { Safety } from './components/Legal/safety';
import { AboutUs } from './components/AboutUs';
import { Help } from './components/Help';
import { Trends } from './components/Tendencias';
import { Historial } from './components/Historial';
import { Checkout } from './components/Checkout';
import { Registration } from './components/Registration';
import { HowToBuy } from './components/ToBuy';
// import { Contact } from './components/Contact';
import { RecoverAccount } from './components/RecoverAccount';
import { Store } from './pages/Store';
import { Contact } from './components/Contact';
import { EditData } from './pages/EditData';
import { PQRC } from './container/Pqr';

function App() {
    const [auth, setAuth] = useState(undefined)

    useEffect(() => {
        const token = getToken()
        if (!token) {
            setAuth(null)
        } else {
            setAuth(decodeToken(token))
        }
    }, [])
    const logout = () => {
        // eslint-disable-next-line
        removeToken()
        setAuth(null)
    }
    const setUser = user => {
        setAuth(user)
    }
    const authData = useMemo(
        () => ({
            auth,
            logout,
            setUser
        }),
        [auth]
    )
    if (auth === undefined) return null
    return (
        <BrowserRouter>
            <AutoContext.Provider value={authData}>
                <Switch>
                    <Route>
                        <ContextLayout.Consumer>
                            {
                                ({ error }) => <LayoutMain error={error}>
                                    <Suspense fallback={<Loading />} >
                                        <Switch>
                                            <Route exact path='/' component={Store} />
                                            <Route exact path='/Ex' component={auth ? Books : Login} />
                                            <Route exact path='/contactanos' component={auth ? Contact : Login} />
                                            {/* Panel de usuarios */}
                                            <Route exact path='/historial' component={auth ? Historial : Login} />
                                            {/* <Route exact path='/contactanos' component={Contact} /> */}
                                            {/* Proceso de compras */}
                                            <Route exact path='/checkouts' component={auth ? Checkout : Login} />
                                            {/* <Route exact path='/checkout/payment' component={auth ? Index : Login} />
                                                    <Route exact path='/checkout/success' component={Index} /> */}

                                            {/* TÉRMINOS Y CONDICIONES Y LEGALES */}
                                            <Route exact path='/terminos-y-condiciones' component={TermsAndConditions} />
                                            <Route exact path='/aviso-de-privacidad' component={NoticeOfPrivacy} />
                                            <Route exact path='/seguridad' component={Safety} />
                                            {/* Quienes somos */}
                                            <Route exact path='/quienes-somos' component={AboutUs} />
                                            {/* Ayuda Pagina */}
                                            <Route exact path='/help' component={Help} />

                                            {/* Adicional */}
                                            <Route exact path='/tendencias' component={Trends} />
                                            <Route exact path='/descubrir/las-mejores-promociones/:id' component={Trends} />
                                            {/* Not Found - No encontrada */}
                                            {/* Preguntas frecuentes */}
                                            <Route exact path='/ayuda' component={PQRC} />
                                            <Route exact path='/ayuda/item/:x.typepqr?.thpName/:x.typepqr?.thpId' component={PQRC} />
                                            {/* Como comprar */}
                                            <Route exact path='/como-comprar' component={HowToBuy} />
                                            {/* Login y registro */}
                                            <Route exact path='/login' component={Login} />
                                            <Route exact path='/registration' component={Registration} />
                                            <Route exact path='/recover-account' component={RecoverAccount} />
                                            {/* USUARIO CONFIGURATION */}
                                            <Route exact path='/mi-cuenta/datos-de-registro' component={auth ? EditData : Login} />
                                            <Route component={NotFound} />
                                        </Switch>
                                    </Suspense>
                                </LayoutMain>
                            }
                        </ContextLayout.Consumer>
                    </Route>
                </Switch>
            </AutoContext.Provider >
        </BrowserRouter>
    )

}

const ClearCacheComponent = withClearCache(App)

export default () => <ClearCacheComponent />