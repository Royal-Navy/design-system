import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { NotificationsProps } from '../../NotificationPanel'
import { ClassificationProps } from '../../../ClassificationBar'
import { SidebarUserProps } from './SidebarUserProps'

export interface SidebarProps extends ComponentWithClass {
  /**
   * Optional icon to display at the top of the component (JSX).
   */
  icon?: React.ReactNode
  /**
   * Optional text title to display at the top of the component.
   */
  title?: string
  /**
   * Optional JSX to render a user menu.
   */
  user?: React.ReactElement<SidebarUserProps>
  /**
   * Toggle whether there are unread notifications.
   */
  hasUnreadNotification?: boolean
  /**
   * Optional JSX to render a collection of notifications.
   */
  notifications?: React.ReactElement<NotificationsProps>
  /**
   * Whether the notifications list is initially open.
   * @private
   */
  initialIsNotificationsOpen?: boolean
  /**
   * Optional jsx to render the classification bar above the masthead.
   */
  classificationBar?: React.ReactElement<ClassificationProps>
}
