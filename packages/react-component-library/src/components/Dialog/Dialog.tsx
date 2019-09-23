import React, { useState } from 'react'
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
  isOpen = false,
  ...rest
}) => {
  const [open, setOpen] = useState(isOpen)

  const confirmButton: ButtonProps = {
    onClick: onConfirm,
    children: 'Confirm',
    variant: 'primary',
    color: danger ? 'danger' : undefined,
  }

  const cancelButton: ButtonProps = {
    onClick: (event: React.SyntheticEvent) => {
      setOpen(false)
      onCancel(event)
    },
    children: 'Cancel',
    variant: 'tertiary',
  }

  return (
    <Modal
      className={`rn-dialog ${danger ? 'rn-dialog--danger' : ''}`}
      primaryButton={confirmButton}
      secondaryButton={cancelButton}
      isOpen={open}
      {...rest}
    >
      <span className="rn-dialog__title">{title}</span>
      <p className="rn-dialog__description">{description}</p>
    </Modal>
  )
}

Dialog.displayName = 'Dialog'
