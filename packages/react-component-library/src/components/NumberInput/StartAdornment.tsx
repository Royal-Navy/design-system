import React from 'react'

interface StartAdornmentProps {
  children: React.ReactNode | string
}

export const StartAdornment: React.FC<StartAdornmentProps> = ({ children }) => {
  return children ? (
    <div
      className="rn-numberinput__start-adornment"
      data-testid="number-input-start-adornment"
    >
      {children}
    </div>
  ) : null
}

StartAdornment.displayName = 'StartAdornment'
