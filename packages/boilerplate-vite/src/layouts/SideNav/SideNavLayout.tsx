import { Link, Outlet } from 'react-router-dom'
import {
  Masthead,
  Sidebar,
  SidebarWrapper,
} from '@royalnavy/react-component-library'
import { ApplicationConstants } from '../../constants.ts'
import { SideNav } from './nav.tsx'
import styled from 'styled-components'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const SideNavLayout = () => {
  return (
    <SidebarWrapper>
      <Sidebar>
        <SideNav />
      </Sidebar>
      <StyledMain>
        <Masthead
          title={ApplicationConstants.title}
          homeLink={<Link to="/" />}
        />
        <Outlet />
      </StyledMain>
    </SidebarWrapper>
  )
}
