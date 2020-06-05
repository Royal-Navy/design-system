import { ApolloProvider } from '@apollo/react-hooks'
import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom'

import '@royalnavy/fonts'
import './index.scss'

import { Home } from './pages'
import { client } from './graphql/client'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={Home} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
