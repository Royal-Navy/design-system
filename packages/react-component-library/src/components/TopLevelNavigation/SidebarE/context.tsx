import React, { createContext, useState } from 'react'

interface SidebarContextDefaults {
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
  hasMouseOver?: boolean
  setHasMouseOver: (hasMouseOver: boolean) => void
}

interface SidebarProviderProps {
  children?: React.ReactNode
  initialIsOpen?: boolean
}

const sidebarContextDefaults: SidebarContextDefaults = {
  isOpen: false,
  setIsOpen: (isOpen: boolean) => undefined,
  hasMouseOver: false,
  setHasMouseOver: (hasMouseOver: boolean) => undefined,
}

export const SidebarContext = createContext(sidebarContextDefaults)

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  initialIsOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen)
  const [hasMouseOver, setHasMouseOver] = useState<boolean>(false)

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, hasMouseOver, setHasMouseOver }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
