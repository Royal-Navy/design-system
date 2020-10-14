import React from 'react'

import { ComponentWithClass } from './ComponentWithClass'
import { LinkTypes } from './Link'

export interface Nav<T> extends ComponentWithClass {
  children?: React.ReactElement<T> | React.ReactElement<T>[]
}

export interface NavItem {
  isActive?: boolean
  link: React.ReactElement<LinkTypes>
}
