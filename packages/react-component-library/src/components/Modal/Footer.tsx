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
    <footer className="rn-modal__footer" data-testid="modal-footer">
      {tertiaryButton && (
        <Button
          className="rn-modal__tertiary-button"
          type="button"
          variant="tertiary"
          {...tertiaryButton}
          data-testid="modal-tertiary"
        />
      )}
      <div className="rn-modal__btn-group">
        {secondaryButton && (
          <Button
            className="rn-modal__secondary-button"
            type="button"
            variant="secondary"
            {...secondaryButton}
            data-testid="modal-secondary"
          />
        )}
        {primaryButton && (
          <Button
            className="rn-modal__primary-button"
            type="button"
            variant="primary"
            {...primaryButton}
            data-testid="modal-primary"
          />
        )}
      </div>
    </footer>
  )
}
