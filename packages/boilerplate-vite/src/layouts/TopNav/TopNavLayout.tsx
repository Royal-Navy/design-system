import {
  Masthead,
  MastheadNav,
  MastheadNavItem,
} from '@royalnavy/react-component-library'
import { ApplicationConstants, Links } from '../../constants.ts'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Paths } from '../../paths.ts'

export const TopNavLayout = () => {
  const isActive = (currentPath: string, linkPath: string) => {
    console.log(currentPath, linkPath)
    return currentPath === linkPath
  }

  const location = useLocation()

  const nav = (
    <MastheadNav>
      {Links.map((link) => (
        <MastheadNavItem
          isActive={isActive(location.pathname, link.route)}
          link={<Link to={link.route}>{link.title}</Link>}
        />
      ))}
    </MastheadNav>
  )
  return (
    <>
      <Masthead
        title={ApplicationConstants.title}
        homeLink={<Link to={Paths.home} />}
        nav={nav}
        hasInlineNav
      />
      <Outlet context={{ setNav: () => {}, setMasthead: () => {} }} />
    </>
  )
}
