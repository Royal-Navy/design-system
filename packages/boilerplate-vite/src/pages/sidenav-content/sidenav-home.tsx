import {
  Masthead,
  PhaseBanner,
  SidebarNav,
  SidebarNavItem,
} from '@royalnavy/react-component-library'
import { Link, useOutletContext } from 'react-router-dom'
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

const SideNav = () => (
  <SidebarNav>
    {/*<SidebarNavItem*/}
    {/*  icon={<IconHome />}*/}
    {/*  link={<Link to={Paths.home}>Home</Link>}*/}
    {/*/>*/}
    {/*<SidebarNavItem icon={<IconMap />} link={<Link to={'/'}>Maps</Link>} />*/}
    {/*<SidebarNavItem icon={<IconMap />} link={<Link to={'/'}>Maps</Link>} />*/}
    {Links.map((link) => (
      <SidebarNavItem
        icon={<IconSettings />}
        link={<Link to={link.route}>{link.title}</Link>}
      />
    ))}
  </SidebarNav>
)

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
