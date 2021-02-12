import React from 'react'

import { StyledContent } from './partials/StyledContent'
import { TabProps } from '.'

interface TabContentProps {
  tabId: string
  isActive: boolean
  children: React.ReactElement<TabProps>
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
