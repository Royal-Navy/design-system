import { Nav, NavItem } from '../../../../common/Nav'

export interface SidebarNavProps extends Nav<NavItem> {
  /**
   * Optional handler invoked when `onBlur` event is emitted.
   */
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void
  /**
   * Optional handler invoked when `onFocus` event is emitted.
   */
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void
  /**
   * Optional handler invoked when an item is clicked.
   */
  onItemClick?: (e: React.MouseEvent<HTMLElement>) => void
  /**
   * Optional handler invoked when the `onMouseOut` event is emitted.
   */
  onMouseOut?: (e: React.MouseEvent<HTMLElement>) => void
  /**
   * Optional handler invoked when the `onMouseOver` event is emitted.
   */
  onMouseOver?: (e: React.MouseEvent<HTMLElement>) => void
}
