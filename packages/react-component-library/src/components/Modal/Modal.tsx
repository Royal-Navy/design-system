import React from 'react'
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
}

export const Modal: React.FC<ModalProps> = ({
  className,
  children,
  onClose,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  title,
}) => {
  if (primaryButton) {
    primaryButton.icon = (
      <span className="rn-modal__btn-icon">
        <IconButtonConfirm />
      </span>
    )
  }

  return (
    <div className={`rn-modal ${className}`}>
      <article className="rn-modal__main">
        {title && <Header title={title} onClose={onClose} />}
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
