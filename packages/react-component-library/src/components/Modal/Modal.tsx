import React from 'react'
import { IconForward } from '@defencedigital/icon-library'

import { ButtonProps } from '../Button'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { Footer } from './Footer'
import { Header } from './Header'
import { StyledModal } from './partials/StyledModal'
import { StyledMain } from './partials/StyledMain'
import { useExternalId } from '../../hooks/useExternalId'
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

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  descriptionId: externalDescriptionId,
  isOpen = false,
  onClose,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  title,
  titleId: externalTitleId,
  ...rest
}) => {
  const { handleOnClose, open } = useOpenClose(isOpen, onClose)
  const primaryButtonWithIcon = primaryButton && {
    icon: <IconForward data-testid="modal-primary-confirm" />,
    ...primaryButton,
  }

  const descriptionId = useExternalId(
    'modal-description',
    externalDescriptionId
  )
  const titleId = useExternalId('modal-title', externalTitleId)

  return (
    <StyledModal
      $isOpen={open}
      className={className}
      role="dialog"
      aria-modal
      aria-labelledby={title || externalTitleId ? titleId : undefined}
      aria-describedby={descriptionId}
      data-testid="modal-wrapper"
      {...rest}
    >
      <StyledMain data-testid="modal-main">
        {title && (
          <Header titleId={titleId} title={title} onClose={handleOnClose} />
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
