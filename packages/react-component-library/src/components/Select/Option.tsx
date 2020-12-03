import React from 'react'
import { components } from 'react-select'
import { OptionProps } from 'react-select/src/components/Option'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { Badge, BADGE_SIZE } from '../Badge'

const { color, fontSize, spacing } = selectors

export interface SelectOptionWithBadgeType {
  badge?: string | number
  icon?: React.ReactNode
  label: string
  value: string
}

const StyledOption = styled(components.Option)`
  position: relative;
  border-radius: 2px;
  color: ${color('neutral', '500')};
  display: flex;
  align-items: center;

  .rn-select__option--is-focused {
    background-color: ${color('neutral', '100')};
    color: ${color('neutral', '500')};
  }

  .rn-select__option--is-selected {
    background-color: ${color('action', '600')};
    color: ${color('neutral', 'white')};
  }

  &&& {
    padding: ${spacing('4')};
    margin: 0;
  }
`

const StyledLabel = styled.span`
  font-size: ${fontSize('base')};
  font-weight: 500;
`

const StyledEndAdornment = styled.span`
  position: absolute;
  right: ${spacing('4')};
  top: 50%;
  transform: translateY(-50%);
  height: ${spacing('7')};
`

const StyledBadge = styled(Badge)`
  transform: translateY(-1px);
  margin-left: ${spacing('2')};
`

export const Option: React.FC<
  OptionProps<SelectOptionWithBadgeType, boolean>
> = (props) => {
  const {
    data: { badge, icon, label },
  } = props

  return (
    <StyledOption data-testid="select-option" {...props}>
      <StyledLabel data-testid="select-option-label">{label}</StyledLabel>
      {badge && <StyledBadge size={BADGE_SIZE.SMALL}>{badge}</StyledBadge>}
      {icon && <StyledEndAdornment>{icon}</StyledEndAdornment>}
    </StyledOption>
  )
}
