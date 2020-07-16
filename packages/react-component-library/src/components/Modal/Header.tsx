import React from 'react'

export interface HeaderProps {
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  title?: string
  titleId: string
}

export const Header: React.FC<HeaderProps> = ({ onClose, title, titleId }) => {
  return (
    <header className="rn-modal__header" data-testid="modal-header">
      <span
        id={titleId}
        className="rn-modal__title"
        data-testid="modal-header-text"
      >
        {title}
      </span>
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
