import React, { useState } from 'react'
import { IconInfo, IconErrorOutline, IconCheckBox } from '@royalnavy/icon-library'
import classNames from 'classnames'

import { ALERT_VARIANT } from './constants'

const VARIANT_ICON_MAP = {
  [ALERT_VARIANT.DANGER]: (
    <IconErrorOutline data-testid={`icon-${ALERT_VARIANT.DANGER}`} />
  ),
  [ALERT_VARIANT.INFO]: <IconInfo data-testid={`icon-${ALERT_VARIANT.INFO}`} />,
  [ALERT_VARIANT.SUCCESS]: <IconCheckBox data-testid={`icon-${ALERT_VARIANT.SUCCESS}`} />,
}

interface AlertProps {
  children: string
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  title?: string
  variant?:
    | ALERT_VARIANT.DANGER
    | ALERT_VARIANT.INFO
    | ALERT_VARIANT.SUCCESS
}

export const Alert: React.FC<AlertProps> = ({
  children,
  onClose,
  title,
  variant = ALERT_VARIANT.INFO,
}) => {
  const [closed, setClosed] = useState(false)

  function handleClick(event: React.FormEvent<HTMLButtonElement>) {
    setClosed(true)

    if (onClose) {
      onClose(event)
    }
  }

  const classes = classNames('rn-alert', `rn-alert--${variant}`)
  const closeClasses = classNames(
    'rn-alert__close',
    `rn-alert__close--${variant}`
  )
  const iconClasses = classNames(
    'rn-alert__icon',
    `rn-alert__icon--${variant}`
  )
  const titleClasses = classNames(
    'rn-alert__title',
    `rn-alert__title--${variant}`
  )
  const descriptionClasses = classNames(
    'rn-alert__description',
    `rn-alert__description--${variant}`
  )

  return (
    !closed && (
      <div className={classes} data-testid="alert">
        <button
          className={closeClasses}
          onClick={handleClick}
          data-testid="close"
        >
          &times;
        </button>
        {title && (
          <div className="rn-alert__header" data-testid="header">
            <div className={iconClasses} data-testid="header-icon">
              {VARIANT_ICON_MAP[variant]}
            </div>
            <div className={titleClasses} data-testid="header-title">
              {title}
            </div>
          </div>
        )}
        <div className="rn-alert__content" data-testid="content">
          {!title && (
            <div className="rn-alert__icon" data-testid="content-icon">
              {VARIANT_ICON_MAP[variant]}
            </div>
          )}
          <div
            className={descriptionClasses}
            data-testid="content-description"
          >
            {children}
          </div>
        </div>
      </div>
    )
  )
}
