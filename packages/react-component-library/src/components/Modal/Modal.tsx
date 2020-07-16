import React from 'react'
import classNames from 'classnames'
import { IconForward } from '@royalnavy/icon-library'

import { ButtonProps } from '../Button'
import { Header } from './Header'
import { Footer } from './Footer'
import { useOpenClose } from '../../hooks/useOpenClose'
import { getId } from '../../helpers'

export interface ModalProps extends ComponentWithClass {
  children?: React.ReactNode
  descriptionId?: string
  isOpen?: boolean
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  tertiaryButton?: ButtonProps
  title?: string
  titleId?: string
}

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  descriptionId = getId('modal-description'),
  isOpen,
  onClose,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  title,
  titleId = getId('modal-title'),
}) => {
  const { handleOnClose, open } = useOpenClose(isOpen, onClose)
  const classes = classNames(
    'rn-modal',
    {
      'is-open': open,
      'is-closed': !open,
    },
    className
  )

  const primaryButtonWithIcon = primaryButton && {
    ...primaryButton,
    icon: <IconForward data-testid="modal-primary-confirm" />,
  }

  return (
    <div
      className={classes}
      role="dialog"
      aria-modal
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-testid="modal-wrapper"
    >
      <article className="rn-modal__main">
        {title && (
          <Header titleId={titleId} title={title} onClose={handleOnClose} />
        )}
        <section
          id={descriptionId}
          className="rn-modal__body"
          data-testid="modal-body"
        >
          {children}
        </section>
        {(primaryButton || secondaryButton || tertiaryButton) && (
          <Footer
            primaryButton={primaryButtonWithIcon}
            secondaryButton={secondaryButton}
            tertiaryButton={tertiaryButton}
          />
        )}
      </article>
    </div>
  )
}

Modal.displayName = 'Modal'
