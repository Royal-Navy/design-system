import React from 'react'

export interface TabProps {
  title: string
  children?: any
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>
}

Tab.displayName = 'Tab'
