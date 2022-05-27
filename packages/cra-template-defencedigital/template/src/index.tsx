import React from 'react'
import ReactDOM from 'react-dom/client'
import '@defencedigital/fonts'
import { GlobalStyleProvider } from '@defencedigital/react-component-library'
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client/react'

import { Home } from './pages'
import { client } from './graphql/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <GlobalStyleProvider>
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
      </Router>
    </ApolloProvider>
  </GlobalStyleProvider>
)
