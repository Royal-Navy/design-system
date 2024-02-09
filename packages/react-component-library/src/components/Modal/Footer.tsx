import React from 'react'

import { BUTTON_VARIANT, ButtonProps } from '../Button'
import { StyledFooter } from './partials/StyledFooter'
import { StyledPrimaryButton } from './partials/StyledPrimaryButton'
import { StyledButton } from './partials/StyledButton'

export interface FooterProps {
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  tertiaryButton?: ButtonProps
}

export const Footer = ({
  primaryButton,
  secondaryButton,
  tertiaryButton,
}: FooterProps) => (
  <StyledFooter
    $hasTertiaryButton={!!tertiaryButton}
    data-testid="modal-footer"
  >
    {tertiaryButton && (
      <StyledButton
        type="button"
        variant={BUTTON_VARIANT.TERTIARY}
        {...tertiaryButton}
        data-testid="modal-tertiary"
      />
    )}
    {secondaryButton && (
      <StyledButton
        type="button"
        variant={BUTTON_VARIANT.SECONDARY}
        {...secondaryButton}
        data-testid="modal-secondary"
      />
    )}
    {primaryButton && (
      <StyledPrimaryButton
        type="button"
        variant={BUTTON_VARIANT.PRIMARY}
        {...primaryButton}
        data-testid="modal-primary"
      />
    )}
  </StyledFooter>
)
