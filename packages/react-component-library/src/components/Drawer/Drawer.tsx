import React from 'react'
import classNames from 'classnames'
import { IconClose } from '@royalnavy/icon-library'
import { useOpenClose } from '../../hooks/useOpenClose'
import { PropsWithClassName } from '../../types/PropsWithClassName'

interface DrawerProps extends PropsWithClassName {
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  onClose,
  isOpen,
}) => {
  const { handleOnClose, open } = useOpenClose(isOpen, onClose)

  const classes = classNames('rn-drawer', {
    'is-open': open,
  })

  return (
    <div className={classes} data-testid="drawer-wrapper">
      <div className="rn-drawer__inner">
        <button
          className="rn-drawer__close"
          onClick={handleOnClose}
          data-testid="drawer-close"
          aria-label="close"
        >
          <IconClose />
        </button>
        <div className="rn-drawer__content" data-testid="drawer-content">
          {children}
        </div>
      </div>
    </div>
  )
}

Drawer.displayName = 'Drawer'
