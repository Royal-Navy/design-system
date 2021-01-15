import React from 'react'
import { IconForward } from '@royalnavy/icon-library'

import { ButtonProps } from '../Button'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { Footer } from './Footer'
import { getId } from '../../helpers'
import { Header } from './Header'
import { StyledModal } from './partials/StyledModal'
import { StyledMain } from './partials/StyledMain'
import { useOpenClose } from '../../hooks/useOpenClose'

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

function getTitleId(title: string, titleId: string) {
  if (titleId) {
    return titleId
  }

  if (title) {
    return getId('modal-title')
  }

  return null
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
  titleId,
}) => {
  const { handleOnClose, open } = useOpenClose(isOpen, onClose)
  const primaryButtonWithIcon = primaryButton && {
    icon: <IconForward data-testid="modal-primary-confirm" />,
    ...primaryButton,
  }

  const modalTitleId = getTitleId(title, titleId)

  return (
    <StyledModal
      $isOpen={open}
      className={className}
      role="dialog"
      aria-modal
      aria-labelledby={modalTitleId}
      aria-describedby={descriptionId}
      data-testid="modal-wrapper"
    >
      <StyledMain>
        {title && (
          <Header
            titleId={modalTitleId}
            title={title}
            onClose={handleOnClose}
          />
        )}
        <section id={descriptionId} data-testid="modal-body">
          {children}
        </section>
        {(primaryButton || secondaryButton || tertiaryButton) && (
          <Footer
            primaryButton={primaryButtonWithIcon}
            secondaryButton={secondaryButton}
            tertiaryButton={tertiaryButton}
          />
        )}
      </StyledMain>
    </StyledModal>
  )
}

Modal.displayName = 'Modal'
