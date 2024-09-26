import React, { useState } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ButtonProps } from '../Button'
import { StyledBody } from './partials/StyledBody'
import { StyledDialog } from './partials/StyledDialog'
import { StyledDescription } from './partials/StyledDescription'
import { StyledTitle } from './partials/StyledTitle'
import { useExternalId } from '../../hooks/useExternalId'
import { ModalProps, ModalImperativeHandle } from '../Modal'

export interface DialogProps
  extends ComponentWithClass,
    Pick<ModalProps, 'isOpen'> {
  /**
   * Optional override for the accessible name of the Modal.
   */
  'aria-label'?: string
  /**
   * Arbitrary JSX representing a description to display under the component title.
   */
  description?: React.ReactNode
  /**
   * Toggles whether to display the type of the component (style varies accordingly).
   */
  isDanger?: boolean
  /**
   * Optional handler called when the Cancel button is clicked.
   */
  onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Optional handler called when the Confirm button is clicked.
   */
  onConfirm?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | Promise<void>
  /**
   * Optional text title to display at the top of the component.
   *
   * If no title is set, you should set aria-label instead to ensure
   * the Modal is accessible.
   */
  title?: string
}

export const Dialog = React.forwardRef<ModalImperativeHandle, DialogProps>(
  (
    {
      description,
      isDanger = false,
      onCancel,
      onConfirm,
      title,
      ...rest
    }: DialogProps,
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(false)

    const confirmButton: ButtonProps = {
      onClick: async (event) => {
        setIsLoading(true)

        await onConfirm?.(event)

        setIsLoading(false)
      },
      children: 'Confirm',
      variant: isDanger ? 'danger' : 'primary',
      isLoading,
    }

    const cancelButton: ButtonProps = {
      onClick: onCancel,
      children: 'Cancel',
      variant: 'secondary',
      isDisabled: isLoading,
    }

    const titleId = useExternalId('dialog-title')
    const descriptionId = useExternalId('dialog-description')

    return (
      <StyledDialog
        ref={ref}
        titleId={title ? titleId : undefined}
        descriptionId={descriptionId}
        primaryButton={confirmButton}
        secondaryButton={cancelButton}
        {...rest}
      >
        <StyledBody data-testid="dialog-body">
          {title && (
            <StyledTitle id={titleId} data-testid="dialog-title">
              {title}
            </StyledTitle>
          )}
          {description && (
            <StyledDescription data-testid="dialog-description">
              {description}
            </StyledDescription>
          )}
        </StyledBody>
      </StyledDialog>
    )
  }
)

Dialog.displayName = 'Dialog'
