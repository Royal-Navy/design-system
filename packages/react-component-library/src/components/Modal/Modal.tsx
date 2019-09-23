import React from 'react'
import { ButtonProps } from '../Button'

import { Header } from './Header'
import { Footer } from './Footer'

import { RightArrow } from '../../icons'

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
  primaryButton.icon = <RightArrow />

  return (
    <div className={`rn-modal ${className}`}>
      <article className="rn-modal__main">
        {(title || onClose) && <Header title={title} onClose={onClose} />}
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
