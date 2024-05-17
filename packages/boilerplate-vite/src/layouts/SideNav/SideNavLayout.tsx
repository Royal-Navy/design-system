import { Link, Outlet } from 'react-router-dom'
import {
  Masthead,
  Sidebar,
  SidebarWrapper,
} from '@royalnavy/react-component-library'
import { ApplicationConstants } from '../../constants.ts'
import { SideNav } from './nav.tsx'

export const SideNavLayout = () => {
  return (
    <>
      <SidebarWrapper>
        <Sidebar>
          <SideNav />
        </Sidebar>
        <div>
          <Masthead
            onSearch={() => {
              console.log('search')
            }}
            title={ApplicationConstants.title}
            homeLink={<Link to="/" />}
          />
          <Outlet />
        </div>
      </SidebarWrapper>
    </>
  )
}
