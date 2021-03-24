import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Front from './components/layout'
import Back from './components/layout/back'
import { LayoutMain } from './components/aside'
import { Dashboard } from './components/dashboard'
import { Books } from './components/books/index'
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout><Component {...props} /></Layout>
    )}></Route>
)
function App() {
    return (
        <Router>
            {/* LayoutPrincipal */}
            <AppRoute path='/' exact layout={LayoutMain} component={Books} />
            {/* Layout Secundario */}
            <AppRoute path='/dashboatd' exact layout={Back} component={Dashboard} />
        </Router>
    );
}

export default App;