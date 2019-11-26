import React from 'react'
import classNames from 'classnames'

import { TabProps } from '.'

interface TabContentProps {
  isActive: boolean
  children: React.ReactElement<TabProps>
}

export const TabContent: React.FC<TabContentProps> = ({
  isActive,
  children,
}) => {
  const classes = classNames('rn-tab-set__content', { 'is-active': isActive })

  return (
    <div className={classes} data-testid="content">
      {children}
    </div>
  )
}
