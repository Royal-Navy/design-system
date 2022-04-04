import React from 'react'

export interface TabSetItemProps {
  /**
   * Text title to display within the tab.
   */
  title: React.ReactElement | string
  /**
   * Arbitrary JSX to display within the main tab content area.
   */
  children: React.ReactElement | string
  /**
   * Toggles whether the tab should be selected upon initial render.
   */
  isActive?: boolean
}

export const TabSetItem: React.FC<TabSetItemProps> = ({
  children,
  title: _title,
  isActive: _isActive,
}) => {
  return <>{children}</>
}

TabSetItem.displayName = 'TabSetItem'
