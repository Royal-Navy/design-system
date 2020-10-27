import React from 'react'
import { components } from 'react-select'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

const StyledIcon = styled.span`
  position: relative;
  top: ${spacing('px')};
`

const StyledLabel = styled.span`
  ${StyledIcon} + & {
    margin-left: ${spacing('3')};
  }
`

export const DropdownPlaceholder: React.FC<any> = (props) => {
  const {
    selectProps: { labelIcon: icon },
  } = props

  return (
    <components.Placeholder {...props}>
      {icon && <StyledIcon data-testid="placeholder-icon">{icon}</StyledIcon>}
      <StyledLabel data-testid="placeholder-label">
        {props.children}
      </StyledLabel>
    </components.Placeholder>
  )
}

DropdownPlaceholder.displayName = 'DropdownPlaceholder'
