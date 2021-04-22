import React from 'react'

import { ComponentWithClass } from './ComponentWithClass'
import { LinkTypes } from './Link'

export interface Nav<T> extends ComponentWithClass {
  children?: React.ReactElement<T> | React.ReactElement<T>[]
}

export interface NavItem {
  /**
   * Denotes whether the navigation item is active or not.
   */
  isActive?: boolean
  /**
   * Link component (custom implementation welcome).
   */
  link: React.ReactElement<LinkTypes>
}
