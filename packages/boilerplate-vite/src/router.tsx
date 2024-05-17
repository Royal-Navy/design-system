import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home'
import { RootLayout } from './layouts/Home/root.tsx'
import { Paths } from './paths.ts'
import { SideNavLayout } from './layouts/SideNav'
import { SideNavHome } from './pages/sidenav-home'

const childRoutes = [
  {
    path: '',
    Component: HomePage,
  },
]

export const router = createBrowserRouter([
  {
    path: Paths.home,
    Component: RootLayout,
    children: childRoutes,
  },
  { path: Paths.topNav, element: <div>Top nav</div> },
  {
    path: Paths.sideNav,
    Component: SideNavLayout,
    children: [
      {
        path: '',
        Component: SideNavHome,
      },
    ],
  },
])
