import React from 'react'

import { PropsWithClassName } from './PropsWithClassName'

export interface Nav<T> extends PropsWithClassName {
  children: React.ReactElement<T> | React.ReactElement<T>[]
}

export interface NavItem {
  isActive?: boolean
  link: React.ReactElement<LinkTypes>
}
