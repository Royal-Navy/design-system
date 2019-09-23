import React from 'react'
import { Modal } from '../Modal'
import { ButtonProps } from '../Button'

export interface DialogProps {
  title?: string
  description?: string
  danger?: boolean
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  description,
  danger = false,
}) => {
  const primaryButton: ButtonProps = {
    onClick: event => console.log('primary'),
    children: 'Confirm',
  }

  const secondaryButton: ButtonProps = {
    onClick: event => console.log('secondary'),
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
