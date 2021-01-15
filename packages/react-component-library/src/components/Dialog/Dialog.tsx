import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ButtonProps } from '../Button'
import { getId } from '../../helpers'
import { StyledBody } from './partials/StyledBody'
import { StyledDialog } from './partials/StyledDialog'
import { StyledDescription } from './partials/StyledDescription'
import { StyledTitle } from './partials/StyledTitle'

export interface DialogProps extends ComponentWithClass {
  description?: string
  isDanger?: boolean
  isOpen?: boolean
  onCancel?: (event: React.FormEvent<HTMLButtonElement>) => void
  onConfirm?: (event: React.FormEvent<HTMLButtonElement>) => void
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
      titleId={titleId}
      descriptionId={descriptionId}
      primaryButton={confirmButton}
      tertiaryButton={cancelButton}
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
