import React from 'react'

import { NavItem } from '../../common/Nav'
import { StyledTabItem } from '../TabBase/partials/StyledTabItem'
import { StyledTabNavTab } from './partials/StyledTabNavTab'
import { LinkProps } from '../../common/Link'

export const TabNavItem = ({ isActive, link, ...rest }: NavItem) => (
  <StyledTabItem {...rest}>
    {React.cloneElement(link as React.ReactElement<LinkProps>, {
      ...link.props,
      style: { display: 'block', width: '100%', height: '100%' },
      children: (
        <StyledTabNavTab as="span" $isActive={isActive}>
          {link.props.children}
        </StyledTabNavTab>
      ),
    })}
  </StyledTabItem>
)
