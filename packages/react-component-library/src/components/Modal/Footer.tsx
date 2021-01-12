import React from 'react'

import { Button, BUTTON_VARIANT, ButtonProps } from '../Button'
import { StyledButtonGroup } from '../ButtonGroup/partials/StyledButtonGroup'
import { StyledFooter } from './partials/StyledFooter'
import { StyledPrimaryButton } from './partials/StyledPrimaryButton'
import { StyledSecondaryButton } from './partials/StyledSecondaryButton'
import { StyledTertiaryButton } from './partials/StyledTertiaryButton'

export interface FooterProps {
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  tertiaryButton?: ButtonProps
}

export const Footer: React.FC<FooterProps> = ({
  primaryButton,
  secondaryButton,
  tertiaryButton,
}) => (
  <StyledFooter
    $hasTertiaryButton={!!tertiaryButton}
    data-testid="modal-footer"
  >
    {tertiaryButton && (
      <StyledTertiaryButton
        type="button"
        variant={BUTTON_VARIANT.TERTIARY}
        {...tertiaryButton}
        data-testid="modal-tertiary"
      />
    )}
    <StyledButtonGroup>
      {secondaryButton && (
        <StyledSecondaryButton
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
    </StyledButtonGroup>
  </StyledFooter>
)
