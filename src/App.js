import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { index } from './components/index';
import { NotFound } from './components/NotFound';
import { Layout } from './components/aside';
import { Dashboard } from './components/dashboard';
// import ContextLayout from './Context'
function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <ContextLayout.Consumer> */}
                {
                    /* ({ isAuth, error }) => */ <Layout /* isAuth={isAuth} */ /* error={error} */>
                        <Switch>
                            {/* rutas inexistentes */}
                            <Route exact path='/' component={index} />
                            <Route exact path='/dashboard' component={Dashboard} />
                        </Switch>
                    </Layout>
                }
                {/* </ContextLayout.Consumer> */}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;