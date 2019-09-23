import React from 'react'

export interface HeaderProps {
  title?: string
  onClose?: (event: React.SyntheticEvent) => void
}

export const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
  return (
    <header className="rn-modal__header">
      <span className="rn-modal__title">{title}</span>
      <button
        className="rn-modal__close-button"
        type="button"
        onClick={onClose}
      >
        &times;
      </button>
    </header>
  )
}
