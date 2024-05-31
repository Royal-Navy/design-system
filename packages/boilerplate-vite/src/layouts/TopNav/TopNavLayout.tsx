import {
  Masthead,
  MastheadNav,
  MastheadNavItem,
} from '@royalnavy/react-component-library'
import { ApplicationConstants, Links } from '../../constants.ts'
import { Link, Outlet } from 'react-router-dom'
import { Paths } from '../../paths.ts'

export const TopNavLayout = () => {
  const nav = (
    <MastheadNav>
      {Links.map((link) => (
        <MastheadNavItem link={<Link to={link.route}>{link.title}</Link>} />
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
