import { Outlet } from 'react-router-dom'
import { StyledApp } from './partials'

// const Nav = (
//   <MastheadNav>
//     <MastheadNavItem isActive link={<Link to={'/'}>Top Level</Link>} />
//     <MastheadNavItem link={<Link to={'/'}>Navigation</Link>} />
//     <MastheadNavItem link={<Link to={'/'}>Links</Link>} />
//   </MastheadNav>
// )

export const RootLayout = () => {
  return (
    <StyledApp>
      <Outlet />
    </StyledApp>
  )
}
