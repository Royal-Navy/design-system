import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { LinkTypes } from '../../../../common/Link'

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
