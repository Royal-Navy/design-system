import React, { useState } from 'react'
import { IconInfo } from '@royalnavy/icon-library'

import { ALERT_VARIANT } from './constants'

const VARIANT_ICON_MAP = {
  [ALERT_VARIANT.INFO]: <IconInfo data-testid={`icon-${ALERT_VARIANT.INFO}`} />,
}

interface AlertProps {
  children: string
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  title?: string
  variant?: ALERT_VARIANT.INFO
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

  return (
    !closed && (
      <div className="rn-alert" data-testid="alert">
        <button
          className="rn-alert__close"
          onClick={handleClick}
          data-testid="close"
        >
          &times;
        </button>
        {title && (
          <div className="rn-alert__header" data-testid="header">
            <div className="rn-alert__icon" data-testid="header-icon">
              {VARIANT_ICON_MAP[variant]}
            </div>
            <div className="rn-alert__title" data-testid="header-title">
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
            className="rn-alert__description"
            data-testid="content-description"
          >
            {children}
          </div>
        </div>
      </div>
    )
  )
}
