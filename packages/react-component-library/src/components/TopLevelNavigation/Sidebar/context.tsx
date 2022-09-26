import React, { createContext, useMemo, useState } from 'react'

export interface SidebarContextDefaults {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  hasMouseOver?: boolean
  setHasMouseOver: (hasMouseOver: boolean) => void
}

export interface SidebarProviderProps {
  children?: React.ReactNode
  initialIsOpen?: boolean
}

const sidebarContextDefaults: SidebarContextDefaults = {
  isOpen: false,
  setIsOpen: () => undefined,
  hasMouseOver: false,
  setHasMouseOver: () => undefined,
}

export const SidebarContext = createContext(sidebarContextDefaults)

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  initialIsOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen)
  const [hasMouseOver, setHasMouseOver] = useState<boolean>(false)
  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, hasMouseOver, setHasMouseOver }),
    [hasMouseOver, isOpen]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  )
}
