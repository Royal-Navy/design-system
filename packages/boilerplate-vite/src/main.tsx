import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyleProvider } from '@royalnavy/react-component-library'
import { router } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyleProvider />
    <RouterProvider router={router} />
  </React.StrictMode>
)
