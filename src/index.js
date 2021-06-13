import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { URL_BASE_GRAPHQL } from './api';
import Context from './Context'
import { Maintenance } from './components/Maintenance'
// Apollo config
const client = new ApolloClient({
    uri: URL_BASE_GRAPHQL,
    cache: new InMemoryCache()
})
const production = true

ReactDOM.render(
    <Context.Provider>
        <React.StrictMode>
            <ApolloProvider client={client}>
                {!production ? ReactDOM.createPortal(<Maintenance />,
                    document.querySelector('#portal')
                ): <App /> }
            </ApolloProvider>
        </React.StrictMode>
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();