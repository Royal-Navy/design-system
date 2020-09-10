import React, { useState } from 'react'
import {
  IconInfo,
  IconError,
  IconCheckCircle,
  IconWarning,
} from '@royalnavy/icon-library'
import classNames from 'classnames'

import { ALERT_VARIANT } from './constants'
import { getId } from '../../helpers'

const VARIANT_ICON_MAP = {
  [ALERT_VARIANT.DANGER]: (
    <IconError data-testid={`icon-${ALERT_VARIANT.DANGER}`} />
  ),
  [ALERT_VARIANT.INFO]: <IconInfo data-testid={`icon-${ALERT_VARIANT.INFO}`} />,
  [ALERT_VARIANT.SUCCESS]: (
    <IconCheckCircle data-testid={`icon-${ALERT_VARIANT.SUCCESS}`} />
  ),
  [ALERT_VARIANT.WARNING]: (
    <IconWarning data-testid={`icon-${ALERT_VARIANT.WARNING}`} />
  ),
}

interface AlertProps {
  children: string
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  title?: string
  variant?:
    | typeof ALERT_VARIANT.DANGER
    | typeof ALERT_VARIANT.INFO
    | typeof ALERT_VARIANT.SUCCESS
    | typeof ALERT_VARIANT.WARNING
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
  const iconClasses = classNames('rn-alert__icon', `rn-alert__icon--${variant}`)
  const descriptionClasses = classNames(
    'rn-alert__description',
    `rn-alert__description--${variant}`
  )

  const titleId = title ? getId('alert-title') : null
  const descriptionId = getId('alert-description')

  return (
    !closed && (
      <div
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        className={classes}
        data-testid="alert"
        role="alert"
      >
        <div
          aria-hidden="true"
          className={iconClasses}
          data-testid="state-icon"
        >
          {VARIANT_ICON_MAP[variant]}
        </div>
        <div className="rn-alert__content" data-testid="content">
          {title && (
            <h2
              className="rn-alert__title"
              data-testid="content-title"
              id={titleId}
            >
              {title}
            </h2>
          )}
          <p
            className={descriptionClasses}
            data-testid="content-description"
            id={descriptionId}
          >
            {children}
          </p>
          <div className="rn-alert__footer">
            <button
              className={closeClasses}
              onClick={handleClick}
              data-testid="close"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    )
  )
}
