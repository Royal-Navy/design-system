import React from 'react'
import { Modal } from '../Modal'
import { ButtonProps } from '../Button'

export interface DialogProps {
  title?: string
  description?: string
  danger?: boolean
  onConfirm?: (event: React.SyntheticEvent) => void
  onCancel?: (event: React.SyntheticEvent) => void
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  description,
  danger = false,
  onConfirm,
  onCancel,
}) => {
  const primaryButton: ButtonProps = {
    onClick: onConfirm,
    children: 'Confirm',
  }

  const secondaryButton: ButtonProps = {
    onClick: onCancel,
    children: 'Cancel',
  }

  return (
    <Modal
      className={`rn-dialog ${danger ? 'rn-dialog--danger' : ''}`}
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
    >
      <span className="rn-dialog__title">{title}</span>
      <p className="rn-dialog__description">{description}</p>
    </Modal>
  )
}

Dialog.displayName = 'Dialog'
