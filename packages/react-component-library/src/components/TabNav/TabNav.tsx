import React, { Children, cloneElement, isValidElement } from 'react'

import { Nav } from '../../common/Nav'
import { StyledTabNav } from './partials/StyledTabNav'
import { StyledTabs } from '../TabBase/partials/StyledTabs'
import { TAB_VARIANT } from '../TabBase/constants'
import { TabVariantType } from '../TabBase/types'
import { TabNavItemProps } from './TabNavItem'

export interface TabNavProps extends Nav<TabNavItemProps> {
  /**
   * Visual style of the tabs. Defaults to boxed.
   */
  variant?: TabVariantType
}

export const TabNav = ({
  children,
  variant = TAB_VARIANT.BOXED,
  ...rest
}: TabNavProps) => (
  <StyledTabNav $variant={variant} {...rest}>
    <StyledTabs $variant={variant}>
      {Children.map(children, (child) =>
        isValidElement<TabNavItemProps>(child)
          ? cloneElement(child, { variant })
          : child
      )}
    </StyledTabs>
  </StyledTabNav>
)
