import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextLayout from './Context';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { Loading } from './components/Loading';
import { Index } from './components/Store';
import { NotFound } from './components/NotFoundNew';
import { Checkout } from './components/Checkout';
import { Layout } from './components/layout';
import { NoticeOfPrivacy } from './components/Legal/NoticeOfPrivacy';
import { TermsAndConditions } from './components/Legal/TermsAndConditions';
import { Safety } from './components/Legal/safety';
import { AboutUs } from './components/AboutUs';
import { Help } from './components/Help';
import { Trends } from './components/Tendencias';
import { History } from './components/History';
import { Pqr } from './components/PQR';
import { HowToBuy } from './components/HowToBuy';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { Contact } from './components/Contact';
import { RecoverAccount } from './components/RecoverAccount';
import { decodeToken, getToken, removeToken } from './utils';
import AutoContext from './AutoContext'
import { EditDatesUser } from './pages/EditDateUser';

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
                    <ContextLayout.Consumer>
                        {
                            ({ error }) => <Layout error={error}>
                                <Suspense fallback={<Loading />} >
                                    <Switch>
                                        {/** Vistas públicas - Public Views */}
                                        <Route exact path='/' component={Index} />
                                        <Route exact path='/historial' component={ auth ? History : Login } />
                                        <Route exact path='/contactanos' component={Contact} />

                                        {/* Proceso de compras */}
                                        <Route exact path='/checkout' component={ auth ? Checkout : Login } />
                                        <Route exact path='/checkout/information' component={Checkout} />
                                        <Route exact path='/checkout/payment' component={ auth ? Index: Login} />
                                        <Route exact path='/checkout/success' component={Index} />

                                        {/* TÉRMINOS Y CONDICIONES Y LEGALES */}
                                        <Route exact path='/terminos-y-condiciones' component={TermsAndConditions} />
                                        <Route exact path='/aviso-de-privacidad' component={NoticeOfPrivacy} />
                                        <Route exact path='/seguridad' component={Safety} />
                                        {/* Quienes somos */}
                                        <Route exact path='/quienes-somos' component={AboutUs} />
                                        {/* Ayuda Pagina */}
                                        <Route exact path='/ayuda' component={Help} />

                                        {/* Adicional */}
                                        <Route exact path='/tendencias' component={Trends} />
                                        <Route exact path='/descubrir/las-mejores-promociones/:id' component={Trends} />
                                        {/* Not Found - No encontrada */}
                                        {/* Preguntas frecuentes */}
                                        <Route exact path='/preguntas-frecuentes' component={Pqr} />
                                        {/* Como comprar */}
                                        <Route exact path='/como-comprar' component={HowToBuy} />
                                        {/* Login y registro */}
                                        <Route exact path='/registration' component={Registration} />
                                        <Route exact path='/login' component={Login} />
                                        <Route exact path='/recover-account' component={RecoverAccount} />
                                        {/* USUARIO CONFIGURATION */}
                                        <Route exact path='/mi-cuenta/datos-de-registro' component={auth ? EditDatesUser : Login} />

                                        <Route component={NotFound} />
                                    </Switch>
                                </Suspense>
                            </Layout>
                        }

                    </ContextLayout.Consumer>
                </Switch>
            </AutoContext.Provider>
        </BrowserRouter>

    );
}
export default App;