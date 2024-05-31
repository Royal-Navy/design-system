import { Outlet } from 'react-router-dom'
import {
  Masthead,
  Sidebar,
  SidebarWrapper,
} from '@royalnavy/react-component-library'
import { ApplicationConstants } from '../../constants.ts'
import { SideNav } from './nav.tsx'
import styled from 'styled-components'
import { useState } from 'react'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const SideNavLayout = () => {
  const [nav, setNav] = useState<React.ReactNode>(<SideNav />)
  const [masthead, setMasthead] = useState(
    <Masthead title={ApplicationConstants.title} />
  )
  return (
    <SidebarWrapper>
      <Sidebar>{nav}</Sidebar>
      <StyledMain>
        {masthead}
        <Outlet context={{ setNav, setMasthead }} />
      </StyledMain>
    </SidebarWrapper>
  )
}
