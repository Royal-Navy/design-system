import React from 'react'

import { NavItem } from '../../common/Nav'
import { StyledTabItem } from '../TabBase/partials/StyledTabItem'
import { StyledTabNavTab } from './partials/StyledTabNavTab'
import { LinkProps } from '../../common/Link'
import { TabVariantType } from '../TabBase/types'
import { TAB_VARIANT } from '../TabBase/constants'

export interface TabNavItemProps extends NavItem {
  /**
   * Visual style of the tab. Set by the parent `TabNav`.
   * @private
   */
  variant?: TabVariantType
}

export const TabNavItem = ({
  isActive,
  link,
  variant,
  ...rest
}: TabNavItemProps) => (
  <StyledTabItem {...rest}>
    {React.cloneElement(link as React.ReactElement<LinkProps>, {
      ...link.props,
      style: {
        display: 'block',
        width: '100%',
        height: '100%',
        ...(variant === TAB_VARIANT.UNDERLINE && { textDecoration: 'none' }),
      },
      children: (
        <StyledTabNavTab as="span" $isActive={isActive} $variant={variant}>
          {link.props.children}
        </StyledTabNavTab>
      ),
    })}
  </StyledTabItem>
)
