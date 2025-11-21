import React, { useRef, useImperativeHandle, useState } from 'react'
import { IconForward } from '@royalnavy/icon-library'

import { ButtonProps } from '../Button'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { Footer } from './Footer'
import { Header } from './Header'
import { StyledModal } from './partials/StyledModal'
import { StyledMain } from './partials/StyledMain'
import { useExternalId } from '../../hooks/useExternalId'

export interface ModalProps extends ComponentWithClass {
  /**
   * Optional override for the accessible name of the Modal.
   */
  'aria-label'?: string
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
   * Denotes whether the component is visible or hidden from view.
   *
   * You should use the imperative handle to manage the state of the Modal.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
   */
  isOpen?: boolean
  /**
   * Optional handler invoked when the component is opened.
   */
  onOpen?: () => void
  /**
   * Optional handler invoked when the component is closed.
   */
  onClose?: () => void
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
   *
   * If no title is set, you should set aria-label instead to ensure
   * the Modal is accessible.
   */
  title?: string
  /**
   * A11y `aria-labelledby` attribute value.
   * @private
   */
  titleId?: string
}

export interface ModalImperativeHandle {
  /**
   * Method that opens the Dialog or Modal when invoked.
   */
  open: () => void
  /**
   * Method that closes the Dialog or Modal when invoked.
   */
  close: () => void
  /**
   * Denotes whether or not the Modal is currently open.
   */
  isOpen: boolean
}

export const Modal = React.forwardRef<ModalImperativeHandle, ModalProps>(
  (
    {
      'aria-label': ariaLabel,
      children,
      className,
      descriptionId: externalDescriptionId,
      isOpen,
      onOpen,
      onClose,
      primaryButton,
      secondaryButton,
      tertiaryButton,
      title,
      titleId: externalTitleId,
      ...rest
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [isLoading, setIsLoading] = useState(false)

    const primaryButtonWithIcon = primaryButton && {
      ...primaryButton,
      icon:
        'icon' in primaryButton ? (
          primaryButton.icon
        ) : (
          <IconForward data-testid="modal-primary-confirm" />
        ),
      onClick: async (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsLoading(true)

        await primaryButton.onClick?.(event)

        setIsLoading(false)
      },
      isLoading,
    }

    const modifiedSecondaryButton = secondaryButton && {
      ...secondaryButton,
      isDisabled: isLoading || secondaryButton.isDisabled,
    }

    const modifiedTertiaryButton = tertiaryButton && {
      ...tertiaryButton,
      isDisabled: isLoading || tertiaryButton.isDisabled,
    }

    const descriptionId = useExternalId(
      'modal-description',
      externalDescriptionId
    )
    const titleId = useExternalId('modal-title', externalTitleId)

    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef?.current?.showModal?.()
        onOpen?.()
      },
      close: () => {
        dialogRef?.current?.close?.()
        onClose?.()
      },
      get isOpen() {
        return dialogRef.current?.open ?? false
      },
    }))

    return (
      <StyledModal
        ref={dialogRef}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={
          (title || externalTitleId) && !ariaLabel ? titleId : undefined
        }
        aria-describedby={descriptionId}
        {...rest}
        open={!!isOpen}
      >
        <StyledMain data-testid="modal-main">
          {title && (
            <Header
              titleId={titleId}
              title={title}
              onClose={(_) => {
                dialogRef?.current?.close?.()
                onClose?.()
              }}
            />
          )}
          <section id={descriptionId} data-testid="modal-body">
            {children}
          </section>
          {(primaryButton || secondaryButton || tertiaryButton) && (
            <Footer
              primaryButton={primaryButtonWithIcon}
              secondaryButton={modifiedSecondaryButton}
              tertiaryButton={modifiedTertiaryButton}
            />
          )}
        </StyledMain>
      </StyledModal>
    )
  }
)

Modal.displayName = 'Modal'
