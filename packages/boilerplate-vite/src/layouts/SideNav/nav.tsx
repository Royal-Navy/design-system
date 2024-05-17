import { IconMap, IconSavedSearch } from '@royalnavy/icon-library'
import { SidebarNav, SidebarNavItem } from '@royalnavy/react-component-library'
import { Link } from 'react-router-dom'

export const SideNav = () => (
  <SidebarNav>
    <SidebarNavItem
      icon={<IconSavedSearch />}
      link={<Link to={'/'}>Dashboards</Link>}
    />
    <SidebarNavItem icon={<IconMap />} link={<Link to={'/'}>Maps</Link>} />
  </SidebarNav>
)
