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
    <footer className="rn-modal__footer">
      {tertiaryButton && (
        <Button
          className="rn-modal__tertiary-button"
          type="button"
          variant="secondary"
          {...tertiaryButton}
        />
      )}
      {secondaryButton && (
        <Button
          className="rn-modal__secondary-button"
          type="button"
          variant="secondary"
          {...secondaryButton}
        />
      )}
      {primaryButton && (
        <Button
          className="rn-modal__primary-button"
          type="button"
          variant="primary"
          {...primaryButton}
        />
      )}
    </footer>
  )
}
