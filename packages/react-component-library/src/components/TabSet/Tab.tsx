import React from 'react'

export interface TabProps {
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

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>
}

Tab.displayName = 'Tab'
