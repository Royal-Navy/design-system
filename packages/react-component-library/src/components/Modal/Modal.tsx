import React, { useState } from 'react'
import { IconButtonConfirm } from '@royalnavy/icon-library'

import { ButtonProps } from '../Button'

import { Header } from './Header'
import { Footer } from './Footer'

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
  const mutatedPrimaryButton = primaryButton

  function handleOnClose(event: React.SyntheticEvent) {
    setOpen(false)
    onClose(event)
  }

  if (mutatedPrimaryButton) {
    mutatedPrimaryButton.icon = (
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
    <div className={classes} data-testid="wrapper">
      <article className="rn-modal__main">
        {title && <Header title={title} onClose={handleOnClose} />}
        <section className="rn-modal__body" data-testid="body">
          {children}
        </section>
        {(primaryButton || secondaryButton || tertiaryButton) && (
          <Footer
            primaryButton={mutatedPrimaryButton}
            secondaryButton={secondaryButton}
            tertiaryButton={tertiaryButton}
          />
        )}
      </article>
    </div>
  )
}

Modal.displayName = 'Modal'
