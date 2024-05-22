import {
  Masthead,
  SidebarNav,
  SidebarNavItem,
} from '@royalnavy/react-component-library'
import { Link, useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import { ApplicationConstants } from '../../constants.ts'
import { StyledContents } from './partials/StyledContents.ts'
import { IconHome, IconMap } from '@royalnavy/icon-library'
import { Paths } from '../../paths.ts'

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
    <SidebarNavItem
      icon={<IconHome />}
      link={<Link to={Paths.home}>Home</Link>}
    />
    <SidebarNavItem icon={<IconMap />} link={<Link to={'/'}>Maps</Link>} />
    <SidebarNavItem icon={<IconMap />} link={<Link to={'/'}>Maps</Link>} />
  </SidebarNav>
)

export const SideNavHome = () => {
  // @ts-ignore
  const { setMasthead, setNav } = useOutletContext()

  useEffect(() => {
    setMasthead(mastHead)
    setNav(SideNav)
  }, [])

  return <StyledContents>Hello world</StyledContents>
}
