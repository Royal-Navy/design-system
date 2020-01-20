import React from 'react'

export interface HeaderProps {
  title?: string
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
}

export const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
  return (
    <header className="rn-modal__header" data-testid="modal-header">
      <span className="rn-modal__title">{title}</span>
      <button
        className="rn-modal__close-button"
        type="button"
        onClick={onClose}
        data-testid="modal-close"
      >
        &times;
      </button>
    </header>
  )
}
