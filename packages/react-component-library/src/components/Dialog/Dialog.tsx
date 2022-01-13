import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ButtonProps } from '../Button'
import { getId } from '../../helpers'
import { StyledBody } from './partials/StyledBody'
import { StyledDialog } from './partials/StyledDialog'
import { StyledDescription } from './partials/StyledDescription'
import { StyledTitle } from './partials/StyledTitle'

export interface DialogProps extends ComponentWithClass {
  /**
   * Optional text description to display under the component title.
   */
  description?: string
  /**
   * Toggles whether to display the type of the component (style varies accordingly).
   */
  isDanger?: boolean
  /**
   * Toggles whether the component is visible or hidden from view.
   */
  isOpen?: boolean
  /**
   * Optional handler called when the Cancel button is clicked.
   */
  onCancel?: (event: React.FormEvent<HTMLButtonElement>) => void
  /**
   * Optional handler called when the Confirm button is clicked.
   */
  onConfirm?: (event: React.FormEvent<HTMLButtonElement>) => void
  /**
   * Optional text title to display at the top of the component.
   */
  title?: string
}

export const Dialog: React.FC<DialogProps> = ({
  description,
  isDanger = false,
  onCancel,
  onConfirm,
  title,
  ...rest
}) => {
  const confirmButton: ButtonProps = {
    onClick: onConfirm,
    children: 'Confirm',
    variant: 'primary',
    color: isDanger ? 'danger' : undefined,
  }

  const cancelButton: ButtonProps = {
    onClick: onCancel,
    children: 'Cancel',
    variant: 'secondary',
  }

  const titleId = getId('dialog-title')
  const descriptionId = getId('dialog-description')

  return (
    <StyledDialog
      data-testid="dialog"
      titleId={titleId}
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

Dialog.displayName = 'Dialog'
