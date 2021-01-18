import React, { useState } from 'react'

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

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getId } from '../../helpers'
import { StyledToast } from './partials/StyledToast'
import { StyledToastHeader } from './partials/StyledToastHeader'
import { StyledToastTitle } from './partials/StyledToastTitle'
import { StyledToastLabel } from './partials/StyledToastLabel'
import { StyledToastTime } from './partials/StyledToastTime'
import { StyledToastButton } from './partials/StyledToastButton'
import { StyledToastContent } from './partials/StyledToastContent'
import { StyledToastDescription } from './partials/StyledToastDescription'

export interface ToastProps extends BaseToastProps, ComponentWithClass {
  label?: string
  dateTime?: Date
}

function getAppearanceIcon(appearance: string): React.ReactNode {
  const appearanceIconMap = {
    success: <IconCheckCircle aria-hidden data-testid="toast-icon" />,
    error: <IconError aria-hidden data-testid="toast-icon" />,
    warning: <IconWarning aria-hidden data-testid="toast-icon" />,
    info: <IconInfo aria-hidden data-testid="toast-icon" />,
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
  className,
}) => {
  const [time] = useState<string>(
    (dateTime || new Date()).toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  )

  const titleId = label ? getId('toast-title') : null
  const descriptionId = children ? getId('toast-description') : null

  return (
    <StyledToast
      className={className}
      $appearance={appearance}
      style={{
        transition: `
          transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1),
          opacity ${transitionDuration}ms
        `,
        ...transitionStates(placement)[transitionState],
      }}
      role="alert"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-testid="toast-wrapper"
    >
      <StyledToastHeader>
        <StyledToastTitle id={titleId} data-testid="toast-title">
          <StyledToastLabel>
            {getAppearanceIcon(appearance)}
            {label}
          </StyledToastLabel>
          <StyledToastTime>{time}</StyledToastTime>
        </StyledToastTitle>
        {onDismiss && (
          <StyledToastButton
            onClick={(_) => onDismiss()}
            data-testid="toast-dismiss"
          >
            Dismiss
          </StyledToastButton>
        )}
      </StyledToastHeader>
      <StyledToastContent>
        <StyledToastDescription
          id={descriptionId}
          data-testid="toast-description"
        >
          {children}
        </StyledToastDescription>
      </StyledToastContent>
    </StyledToast>
  )
}

Toast.displayName = 'Toast'
