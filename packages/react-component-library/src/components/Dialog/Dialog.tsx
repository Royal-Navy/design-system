import React from 'react'
import { Modal } from '../Modal'
import { ButtonProps } from '../Button'

export interface DialogProps {
  title?: string
  description?: string
  danger?: boolean
  onConfirm?: (event: React.SyntheticEvent) => void
  onCancel?: (event: React.SyntheticEvent) => void
  isOpen?: boolean
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  description,
  danger = false,
  onConfirm,
  onCancel,
  ...rest
}) => {
  const confirmButton: ButtonProps = {
    onClick: onConfirm,
    children: 'Confirm',
    variant: 'primary',
    color: danger ? 'danger' : undefined,
  }

  const cancelButton: ButtonProps = {
    onClick: onCancel,
    children: 'Cancel',
    variant: 'tertiary',
  }

  return (
    <Modal
      className={`rn-dialog ${danger ? 'rn-dialog--danger' : ''}`}
      primaryButton={confirmButton}
      secondaryButton={cancelButton}
      {...rest}
    >
      <span className="rn-dialog__title" data-testid="title">
        {title}
      </span>
      <p className="rn-dialog__description" data-testid="description">
        {description}
      </p>
    </Modal>
  )
}

Dialog.displayName = 'Dialog'
