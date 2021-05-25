import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyleProvider } from '@royalnavy/react-component-library'
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import { Home } from './pages'
import { client } from './graphql/client'

ReactDOM.render(
  <GlobalStyleProvider>
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
      </Router>
    </ApolloProvider>
  </GlobalStyleProvider>,
  document.getElementById('root')
)
