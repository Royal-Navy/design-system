import {
  Masthead,
  PhaseBanner,
  SidebarNav,
  SidebarNavItem,
} from '@royalnavy/react-component-library'
import { Link, useLocation, useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import { ApplicationConstants, Links } from '../../constants.ts'
import { StyledContents } from './partials/StyledContents.ts'
import { IconSettings } from '@royalnavy/icon-library'
import { Paths } from '../../paths.ts'
import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

const mastHead = () => {
  return (
    <Masthead
      homeLink={<Link to={Paths.home} />}
      title={ApplicationConstants.title}
      onSearch={(searchText) => {
        console.log(searchText)
      }}
    />
  )
}

const isActive = (currentPath: string, linkPath: string) => {
  console.log(currentPath, linkPath)
  return currentPath === linkPath
}

const SideNav = () => {
  const location = useLocation()
  return (
    <SidebarNav>
      {Links.map((link) => (
        <SidebarNavItem
          isActive={isActive(location.pathname, link.route)}
          icon={<IconSettings />}
          link={<Link to={link.route}>{link.title}</Link>}
        />
      ))}
    </SidebarNav>
  )
}

const StyledPhaseBanner = styled(PhaseBanner)`
  padding-left: ${spacing('11')};
  padding-right: ${spacing('8')};
`

export const SideNavHome = () => {
  // @ts-ignore
  const { setMasthead, setNav } = useOutletContext()

  useEffect(() => {
    setMasthead(mastHead)
    setNav(SideNav)
  }, [])

  return (
    <StyledContents>
      <StyledPhaseBanner phase="alpha" isFullWidth />
    </StyledContents>
  )
}
