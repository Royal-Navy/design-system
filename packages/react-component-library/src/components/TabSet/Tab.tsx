import React from 'react'

interface TabProps {
  title: string
  children?: any
}

const Tab: React.FC<TabProps> = ({ title, children }) => {
  return <>{children}</>
}

Tab.displayName = 'Tab'

export default Tab
