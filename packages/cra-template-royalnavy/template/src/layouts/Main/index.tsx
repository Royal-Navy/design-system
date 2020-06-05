import React from 'react'

export interface MainProps {
  children?: React.ReactNode
}

export const Main: React.FC<MainProps> = ({ children }) => <>{children}</>

Main.displayName = 'Main-Layout'
