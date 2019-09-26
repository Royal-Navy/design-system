import React from 'react'
import { Button, ButtonProps } from '../Button'

export interface FooterProps {
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  tertiaryButton?: ButtonProps
}

export const Footer: React.FC<FooterProps> = ({
  primaryButton,
  secondaryButton,
  tertiaryButton,
}) => {
  return (
    <footer className="rn-modal__footer" data-testid="footer">
      {tertiaryButton && (
        <Button
          className="rn-modal__tertiary-button"
          type="button"
          variant="secondary"
          {...tertiaryButton}
          data-testid="btn-tertiary"
        />
      )}
      {secondaryButton && (
        <Button
          className="rn-modal__secondary-button"
          type="button"
          variant="secondary"
          {...secondaryButton}
          data-testid="btn-secondary"
        />
      )}
      {primaryButton && (
        <Button
          className="rn-modal__primary-button"
          type="button"
          variant="primary"
          {...primaryButton}
          data-testid="btn-primary"
        />
      )}
    </footer>
  )
}
