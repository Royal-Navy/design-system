import React from 'react'
import classNames from 'classnames'
import { Modal } from '../Modal'
import { ButtonProps } from '../Button'

export interface DialogProps extends ComponentWithClass {
  title?: string
  description?: string
  danger?: boolean
  onConfirm?: (event: React.FormEvent<HTMLInputElement>) => void
  onCancel?: (event: React.FormEvent<HTMLInputElement>) => void
  isOpen?: boolean
}

export const Dialog: React.FC<DialogProps> = ({
  className = '',
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

  const classes = classNames(className, {
    'rn-dialog': true,
    'rn-dialog--danger': danger,
  })

  return (
    <Modal
      className={classes}
      primaryButton={confirmButton}
      secondaryButton={cancelButton}
      {...rest}
    >
      {title && (
        <span className="rn-dialog__title" data-testid="rn-dialog-title">
          {title}
        </span>
      )}
      {description && (
        <p
          className="rn-dialog__description"
          data-testid="rn-dialog-description"
        >
          {description}
        </p>
      )}
    </Modal>
  )
}

Dialog.displayName = 'Dialog'
