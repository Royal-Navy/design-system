import React from 'react'
import { ButtonProps } from '../Button'

import { Header } from './Header'
import { Footer } from './Footer'

export interface ModalProps extends ComponentWithClass {
  children?: any
  onClose: (event: React.SyntheticEvent) => void
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  tertiaryButton?: ButtonProps
  title: string
}

export const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  title,
}) => (
  <div className="rn-modal">
    <article className="rn-modal__main">
      <Header title={title} onClose={onClose} />
      <section className="rn-modal__body">{children}</section>
      <Footer
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        tertiaryButton={tertiaryButton}
      />
    </article>
  </div>
)

Modal.displayName = 'Modal'
