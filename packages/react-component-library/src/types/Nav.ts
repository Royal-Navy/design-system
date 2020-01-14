import React from 'react'

export interface Nav extends ComponentWithClass {
  children: React.ReactElement<NavItem> | React.ReactElement<NavItem>[]
}

export interface NavItem {
  isActive?: boolean
  link: React.ReactElement<LinkTypes>
}
