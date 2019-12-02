import React, { useState } from 'react'
import classNames from 'classnames'

interface DrawerProps extends ComponentWithClass {
  children?: React.ReactNode
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  isOpen?: boolean
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  onClose,
  isOpen = false,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(isOpen)

  const classes = classNames('rn-drawer', {
    'is-open': drawerOpen,
  })

  function handleClick(event: React.FormEvent<HTMLButtonElement>) {
    setDrawerOpen(false)

    if (onClose) {
      onClose(event)
    }
  }

  return (
    <div className={classes} data-testid="drawer-wrapper">
      <div className="rn-drawer__inner">
        <button
          className="rn-drawer__close"
          onClick={handleClick}
          data-testid="drawer-close"
        >
          &times;
        </button>
        <div className="rn-drawer__content" data-testid="drawer-content">
          {children}
        </div>
      </div>
    </div>
  )
}

Drawer.displayName = 'Drawer'
