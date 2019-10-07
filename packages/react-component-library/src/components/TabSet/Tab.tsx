import React from 'react'

interface TabProps {
  title: string
  children?: any
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>
}

Tab.displayName = 'Tab'

export default Tab
