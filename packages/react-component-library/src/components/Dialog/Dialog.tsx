import React from 'react'
import classNames from 'classnames'

import { Modal } from '../Modal'
import { ButtonProps } from '../Button'
import { getId } from '../../helpers'

export interface DialogProps extends ComponentWithClass {
  title?: string
  description?: string
  isDanger?: boolean
  onConfirm?: (event: React.FormEvent<HTMLButtonElement>) => void
  onCancel?: (event: React.FormEvent<HTMLButtonElement>) => void
  isOpen?: boolean
}

export const Dialog: React.FC<DialogProps> = ({
  className = '',
  title,
  description,
  isDanger = false,
  onConfirm,
  onCancel,
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

  const classes = classNames(
    'rn-dialog',
    {
      'rn-dialog--danger': isDanger,
    },
    className
  )

  const titleId = getId('dialog-title')
  const descriptionId = getId('dialog-description')

  return (
    <Modal
      titleId={titleId}
      descriptionId={descriptionId}
      className={classes}
      primaryButton={confirmButton}
      tertiaryButton={cancelButton}
      {...rest}
    >
      <section className="rn-dialog__body" data-testid="dialog-body">
        {title && (
          <span
            id={titleId}
            className="rn-dialog__title"
            data-testid="dialog-title"
          >
            {title}
          </span>
        )}
        {description && (
          <p
            className="rn-dialog__description"
            data-testid="dialog-description"
          >
            {description}
          </p>
        )}
      </section>
    </Modal>
  )
}

Dialog.displayName = 'Dialog'
