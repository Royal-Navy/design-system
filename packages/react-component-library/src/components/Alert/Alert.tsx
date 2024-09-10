import React from 'react'
import {
  IconInfo,
  IconError,
  IconCheckCircle,
  IconWarning,
} from '@royalnavy/icon-library'

import { ALERT_VARIANT } from './constants'
import { useOpenClose } from '../../hooks'
import { StyledAlert } from './partials/StyledAlert'
import { StyledIcon } from './partials/StyledIcon'
import { StyledContent } from './partials/StyledContent'
import { StyledTitle } from './partials/StyledTitle'
import { StyledDescription } from './partials/StyledDescription'
import { StyledFooter } from './partials/StyledFooter'
import { StyledCloseButton } from './partials/StyledCloseButton'
import { useExternalId } from '../../hooks/useExternalId'
import { ValueOf } from '../../helpers'

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

export type AlertVariantType = ValueOf<typeof ALERT_VARIANT>

export interface AlertProps {
  /**
   * Description text to display under the component title.
   */
  children: React.ReactNode
  /**
   * Optional handler to be invoked when the component is closed.
   */
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  /**
   * Optional title to display above the description text.
   */
  title?: string
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: AlertVariantType
  /**
   * Optional flag to hide the Dismiss button.
   */
  hideDismiss?: boolean
}

export const Alert = ({
  children,
  onClose,
  title,
  variant = ALERT_VARIANT.INFO,
  hideDismiss = false,
  ...rest
}: AlertProps) => {
  const { open, handleOnClose } = useOpenClose(true, onClose)
  const titleId = useExternalId('alert-title')
  const descriptionId = useExternalId('alert-description')

  if (!open) {
    return null
  }

  return (
    <StyledAlert
      $variant={variant}
      aria-describedby={descriptionId}
      aria-labelledby={title ? titleId : undefined}
      role="alert"
      {...rest}
    >
      <StyledIcon
        $variant={variant}
        aria-hidden="true"
        data-testid="state-icon"
      >
        {VARIANT_ICON_MAP[variant]}
      </StyledIcon>
      <StyledContent data-testid="content">
        {title && (
          <StyledTitle $variant={variant} id={titleId}>
            {title}
          </StyledTitle>
        )}
        <StyledDescription id={descriptionId}>{children}</StyledDescription>
        <StyledFooter>
          {!hideDismiss && (
            <StyledCloseButton onClick={handleOnClose}>
              Dismiss
            </StyledCloseButton>
          )}
        </StyledFooter>
      </StyledContent>
    </StyledAlert>
  )
}
