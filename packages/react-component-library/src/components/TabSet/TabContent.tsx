import React from 'react'
import classNames from 'classnames'

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
}) => {
  const classes = classNames('rn-tab-set__content', { 'is-active': isActive })

  return (
    <div
      className={classes}
      role="tabpanel"
      aria-labelledby={tabId}
      aria-hidden={!isActive}
      id={tabId}
      tabIndex={0}
      data-testid="tab-set-content"
    >
      {children}
    </div>
  )
}
