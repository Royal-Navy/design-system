import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { NotificationsProps } from '../../NotificationPanel'

export interface SidebarNotificationsProps extends ComponentWithClass {
  /**
   * Toggle whether there are unread notifications.
   */
  hasUnreadNotification?: boolean
  /**
   * Whether the sheet is initially open.
   */
  initialIsOpen?: boolean
  /**
   * Collection of Notification item components.
   */
  notifications?: React.ReactElement<NotificationsProps>
}
