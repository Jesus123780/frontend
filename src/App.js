import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Front from './components/layout'
// import Back from './components/layout/back'
// import { LayoutMain } from './components/aside'
// import { Dashboard } from './components/dashboard'
// import { Books } from './components/books/index'
// import { SectionInfo } from './components/Doctor/sectionInfo';
import ContextLayout from './Context';
import { Suspense } from 'react';
import { Loading } from './components/Loading';
import { Index } from './components/Store';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <ContextLayout.Consumer>
                    {
                        ({ error }) => <Index error={error}>
                            <Suspense fallback={<Loading />} >
                                <Switch>
                                    {/** Vistas públicas - Public Views */}
                                    {/* <Route exact path='/' component={Books} /> */}
                                    <Route exact path='/' component={Index} />
                                    {/* Not Found - No encontrada */}
                                </Switch>
                            </Suspense>
                        </Index>
                    }

                </ContextLayout.Consumer>
            </Switch>
        </BrowserRouter>
    );
}

export default App;