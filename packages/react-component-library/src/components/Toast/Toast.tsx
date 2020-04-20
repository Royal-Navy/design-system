import React, { useState } from 'react'
import classNames from 'classnames'

import {
  ToastProps as BaseToastProps,
  Placement,
} from 'react-toast-notifications'

import {
  IconInfo,
  IconWarning,
  IconError,
  IconCheckCircle,
} from '@royalnavy/icon-library'

export interface ToastProps extends BaseToastProps, ComponentWithClass {
  label?: string
  dateTime?: Date
}

function getAppearanceIcon(appearance: string): React.ReactNode {
  const appearanceIconMap = {
    success: <IconCheckCircle />,
    error: <IconError />,
    warning: <IconWarning />,
    info: <IconInfo />,
  }

  return appearanceIconMap[appearance] || appearanceIconMap.info
}

function getTranslate(placement: Placement): string {
  const pos = placement.split('-')
  const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1]

  const translateMap = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -120%, 0)',
  }

  return translateMap[relevantPlacement]
}

const transitionStates = (placement: Placement) => ({
  entering: { transform: getTranslate(placement) },
  entered: { transform: 'translate3d(0,0,0)' },
})

export const Toast: React.FC<ToastProps> = ({
  label,
  children,
  onDismiss,
  appearance,
  placement,
  transitionDuration,
  transitionState,
  dateTime,
}) => {
  const [time] = useState<string>(
    (dateTime || new Date()).toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  )

  const classes = classNames('rn-toast', `rn-toast--${appearance}`)

  return (
    <div
      className={classes}
      style={{
        transition: `
          transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1),
          opacity ${transitionDuration}ms
        `,
        ...transitionStates(placement)[transitionState],
      }}
      data-testid="toast-wrapper"
    >
      <div className="rn-toast__header">
        <div className="rn-toast__title">
          <span className="rn-toast__label">
            {getAppearanceIcon(appearance)}
            {label}
          </span>
          <span className="rn-toast__time">{time}</span>
        </div>
        {onDismiss && (
          <button
            className="rn-toast__btn"
            onClick={_ => onDismiss()}
            data-testid="toast-dismiss"
          >
            Dismiss
          </button>
        )}
      </div>
      <div className="rn-toast__content">
        <span className="rn-toast__description">{children}</span>
      </div>
    </div>
  )
}

Toast.displayName = 'Toast'
