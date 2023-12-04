import React, { useState } from 'react'

import {
  AppearanceTypes,
  ToastProps as BaseToastProps,
} from 'react-toast-notifications'

import {
  IconInfo,
  IconWarning,
  IconError,
  IconCheckCircle,
} from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledToast } from './partials/StyledToast'
import { StyledToastHeader } from './partials/StyledToastHeader'
import { StyledToastTitle } from './partials/StyledToastTitle'
import { StyledToastLabel } from './partials/StyledToastLabel'
import { StyledToastTime } from './partials/StyledToastTime'
import { StyledToastButton } from './partials/StyledToastButton'
import { StyledToastContent } from './partials/StyledToastContent'
import { StyledToastDescription } from './partials/StyledToastDescription'
import { useExternalId } from '../../hooks/useExternalId'

export interface ToastProps
  extends BaseToastProps,
    Omit<ComponentWithClass, 'children'> {
  /**
   * Text label to display at the top of the component.
   */
  label?: string
  /**
   * Date and time of the event.
   */
  dateTime?: Date
}

function getAppearanceIcon(appearance: AppearanceTypes): React.ReactNode {
  const appearanceIconMap = {
    success: <IconCheckCircle aria-hidden data-testid="toast-icon" />,
    error: <IconError aria-hidden data-testid="toast-icon" />,
    warning: <IconWarning aria-hidden data-testid="toast-icon" />,
    info: <IconInfo aria-hidden data-testid="toast-icon" />,
  }

  return appearanceIconMap[appearance] || appearanceIconMap.info
}

export const Toast: React.FC<ToastProps> = ({
  label,
  children,
  onDismiss,
  appearance,
  placement,
  transitionDuration,
  transitionState,
  dateTime,
  ...rest
}) => {
  const [time] = useState<string>(
    (dateTime || new Date()).toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  )

  const titleId = useExternalId('toast-title')
  const descriptionId = useExternalId('toast-description')

  return (
    <StyledToast
      $appearance={appearance}
      $placement={placement}
      $transitionState={transitionState}
      $transitionDuration={transitionDuration}
      role="alert"
      aria-labelledby={label ? titleId : undefined}
      aria-describedby={children ? descriptionId : undefined}
      data-testid="toast-wrapper"
      {...rest}
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
