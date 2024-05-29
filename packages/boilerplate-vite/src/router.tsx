import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home'
import { Paths } from './paths.ts'
import { SideNavLayout } from './layouts/SideNav'
import { SideNavHome } from './pages/sidenav-content'
import { SideNavOutsideLayout } from './layouts/SideNavOutside/SideNavOutsideLayout.tsx'
import { TopNavLayout } from './layouts/TopNav'

export const router = createBrowserRouter([
  {
    path: Paths.home,
    Component: HomePage,
  },
  { path: Paths.topNav, Component: TopNavLayout },
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
  {
    path: Paths.sideNavOutside,
    Component: SideNavOutsideLayout,
    children: [
      {
        path: '',
        Component: SideNavHome,
      },
    ],
  },
])
