import { IconHome, IconMap } from '@royalnavy/icon-library'
import { SidebarNav, SidebarNavItem } from '@royalnavy/react-component-library'
import { Link } from 'react-router-dom'

import { Paths } from '../../paths.ts'

export const SideNav = () => (
  <SidebarNav>
    <SidebarNavItem
      icon={<IconHome />}
      link={<Link to={Paths.home}>Home</Link>}
    />
    <SidebarNavItem icon={<IconMap />} link={<Link to={'/'}>Maps</Link>} />
  </SidebarNav>
)
