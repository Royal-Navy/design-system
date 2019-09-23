import React, { useState, useEffect } from 'react'
import { ButtonProps } from '../Button'

import { Header } from './Header'
import { Footer } from './Footer'

import { IconButtonConfirm } from '@royalnavy/icon-library'

export interface ModalProps extends ComponentWithClass {
  className?: string
  children?: any
  onClose?: (event: React.SyntheticEvent) => void
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  tertiaryButton?: ButtonProps
  title?: string
  isOpen?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  className = '',
  children,
  onClose,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  title,
  isOpen = false,
}) => {
  const [open, setOpen] = useState(isOpen)

  function handleOnClose(event: React.SyntheticEvent) {
    setOpen(false)
    onClose(event)
  }

  if (primaryButton) {
    primaryButton.icon = (
      <span className="rn-modal__btn-icon">
        <IconButtonConfirm />
      </span>
    )
  }

  const classes = `
    rn-modal
    ${open ? 'is-open' : 'is-closed'}
    ${className}
  `

  return (
    <div className={classes}>
      <article className="rn-modal__main">
        {title && <Header title={title} onClose={handleOnClose} />}
        <section className="rn-modal__body">{children}</section>
        {(primaryButton || secondaryButton || tertiaryButton) && (
          <Footer
            primaryButton={primaryButton}
            secondaryButton={secondaryButton}
            tertiaryButton={tertiaryButton}
          />
        )}
      </article>
    </div>
  )
}

Modal.displayName = 'Modal'
