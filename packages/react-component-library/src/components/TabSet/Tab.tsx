import React from 'react'

interface TabProps {
  title: string
  children?: any
}

const Tab: React.FC<TabProps> = ({ title, children }) => {
  return <>{children}</>
}

export default Tab
