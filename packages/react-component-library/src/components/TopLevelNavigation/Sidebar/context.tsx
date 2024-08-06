import React, { createContext, useContext, useMemo, useState } from 'react'

export interface SidebarClientContext {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export interface SidebarContextDefaults extends SidebarClientContext {
  hasMouseOver?: boolean
  setHasMouseOver: (hasMouseOver: boolean) => void
}

export interface SidebarProviderProps {
  children?: React.ReactNode
}

const sidebarContextDefaults: SidebarContextDefaults = {
  isOpen: false,
  setIsOpen: () => undefined,
  hasMouseOver: false,
  setHasMouseOver: () => undefined,
}

export const SidebarContext = createContext(sidebarContextDefaults)

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
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

export const useSidebar = () => {
  return useContext(SidebarContext) as SidebarClientContext
}
