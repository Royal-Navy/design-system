import React from 'react'
import ReactDOM from 'react-dom/client'
import '@defencedigital/fonts'
import { GlobalStyleProvider } from '@defencedigital/react-component-library'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client/react'

import { Home } from './pages'
import { client } from './graphql/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <GlobalStyleProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </GlobalStyleProvider>
)
