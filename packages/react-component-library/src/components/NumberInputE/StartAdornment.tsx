import React from 'react'

import { StyledStartAdornment } from './partials/StyledStartAdornment'

interface StartAdornmentProps {
  children: React.ReactNode | string
}

export const StartAdornment: React.FC<StartAdornmentProps> = ({ children }) => {
  if (!children) {
    return null
  }

  return (
    <StyledStartAdornment data-testid="number-input-start-adornment">
      {children}
    </StyledStartAdornment>
  )
}

StartAdornment.displayName = 'StartAdornment'
