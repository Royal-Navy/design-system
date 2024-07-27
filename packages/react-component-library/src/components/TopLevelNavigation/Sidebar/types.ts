import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { NotificationsProps } from '../NotificationPanel'
import { ClassificationProps } from '../../ClassificationBar'
import { LinkTypes } from '../../../common/Link'

export interface SidebarUserProps extends ComponentWithClass {
  children?: never
  /**
   * Initials of the end user (e.g. Joe Bloggs => JB).
   */
  initials: string
  /**
   * Whether the user options sheet is initially open.
   * @private
   */
  initialIsOpen?: boolean
  /**
   * Link component to apply to the user avatar.
   */
  userLink?: React.ReactElement<LinkTypes>
  /**
   * Link component to apply to the exit icon.
   */
  exitLink?: React.ReactElement<LinkTypes>
  /**
   * Full name of the end user (e.g. Joe Bloggs).
   */
  name?: string
}

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
   * Initial `isOpen` state on first render.
   */
  initialIsOpen?: boolean
  /**
   * Optional jsx to render the classification bar above the masthead.
   */
  classificationBar?: React.ReactElement<ClassificationProps>
}

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
