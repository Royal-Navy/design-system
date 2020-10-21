import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing, color, fontSize } = selectors

interface StartAdornmentProps {
  children: React.ReactNode | string
}

const StyledStartAdornment = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: ${spacing('6')};
  order: 0;
  background-color: ${color('neutral', '000')};
  border-right: 1px solid ${color('neutral', '200')};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  color: ${color('neutral', '400')};
  font-weight: 600;
  line-height: 1;
  font-size: ${fontSize('base')};

  > svg {
    color: ${color('neutral', '300')};
  }
`

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
