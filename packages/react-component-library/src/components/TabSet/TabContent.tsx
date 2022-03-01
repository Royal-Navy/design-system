import React from 'react'

import { StyledContent } from './partials/StyledContent'
import { TabSetItemProps } from '.'

interface TabContentProps {
  tabId: string
  isActive: boolean
  children: React.ReactElement<TabSetItemProps>
}

export const TabContent: React.FC<TabContentProps> = ({
  tabId,
  isActive,
  children,
  ...rest
}) => (
  <StyledContent
    $isActive={isActive}
    role="tabpanel"
    aria-labelledby={tabId}
    aria-hidden={!isActive}
    id={tabId}
    tabIndex={0}
    data-testid="tab-set-content"
    {...rest}
  >
    {children}
  </StyledContent>
)
