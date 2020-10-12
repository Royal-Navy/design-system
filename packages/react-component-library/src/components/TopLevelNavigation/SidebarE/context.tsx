import React, { createContext, useState } from 'react'

interface SidebarContextDefaults {
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
}

interface SidebarProviderProps {
  children?: React.ReactNode
}

const sidebarContextDefaults: SidebarContextDefaults = {
  isOpen: false,
  setIsOpen: (isOpen) => undefined,
}

export const SidebarContext = createContext(sidebarContextDefaults)

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}
