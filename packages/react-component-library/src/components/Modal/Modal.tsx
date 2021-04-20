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
  /**
   * Optional arbitrary JSX content to display in the main body of the component.
   */
  children?: React.ReactNode
  /**
   * A11y `aria-describedby` attribute value.
   * @private
   */
  descriptionId?: string
  /**
   * Toggles whether the component is visible or hidden from view.
   */
  isOpen?: boolean
  /**
   * Optional handler called when the close button is clicked.
   */
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  /**
   * Optional primary action button to display in the component.
   */
  primaryButton?: ButtonProps
  /**
   * Optional secondary action button to display in the component.
   */
  secondaryButton?: ButtonProps
  /**
   * Optional tertiary action button to display in the component.
   */
  tertiaryButton?: ButtonProps
  /**
   * Optional text title to display at the top of the component.
   */
  title?: string
  /**
   * A11y `aria-labelledby` attribute value.
   * @private
   */
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
  ...rest
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
      {...rest}
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
