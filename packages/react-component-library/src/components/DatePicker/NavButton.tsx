import React from 'react'

export interface NavButtonProps extends ComponentWithClass {
  children: React.ReactElement | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const NavButton: React.FC<NavButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="rn-date-picker__btn-nav"
      type="button"
      onClick={onClick}
      data-testid="datepicker-nav-button"
    >
      {children}
    </button>
  )
}

NavButton.displayName = 'NavButton'
