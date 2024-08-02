import { Nav, NavItem } from '../../../../common/Nav'

export interface SidebarNavItemProps extends NavItem, Nav<SidebarNavItemProps> {
  /**
   * Optional icon to display to the left of the navigation item.
   */
  icon?: React.ReactNode
  /**
   * Optional handler invoked when an item is clicked on.
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export interface SidebarSubNavProps extends Nav<SidebarNavItemProps> {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}
