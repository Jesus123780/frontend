import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Front from './components/layout'
import Back from './components/layout/back'
import { LayoutMain } from './components/aside'
import { Dashboard } from './components/dashboard'
import { Books } from './components/books/index'
import { SectionInfo } from './components/Doctor/sectionInfo';
import ContextLayout from './Context';
import { Auth } from './pages/Auth';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout><Component {...props} /></Layout>
    )}></Route>
)
function App() {
    return (
        <Router>
            <ContextLayout.Consumer>
                { ({ error }) => <>
                    <AppRoute error={error} path='/' exact layout={LayoutMain} component={Books} />
                    <AppRoute error={error} path='/dashboard' exact layout={Back} component={Dashboard} />
                    <AppRoute error={error} path='/info' exact layout={Back} component={SectionInfo} />
                    <AppRoute error={error} path='/auth' exact layout={Back} component={Auth} />
                </>
                }
            </ContextLayout.Consumer>
        </Router>
    );
}

export default App;