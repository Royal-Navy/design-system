import React from 'react'
import { components } from 'react-select'
import { OptionProps } from 'react-select/src/components/Option'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { Badge } from '../Badge'

const { spacing } = selectors

export interface SelectOptionWithBadgeType {
  badge?: string | number
  icon?: React.ReactNode
  label: string
  value: string
}

const StyledOption = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
`

const StyledEndAdornment = styled.span`
  position: absolute;
  top: ${spacing('px')};
  right: 0;
`

export const Option: React.FC<OptionProps<SelectOptionWithBadgeType>> = (
  props
) => {
  const {
    data: { badge, icon, label },
  } = props

  return (
    <components.Option {...props} data-testid="select-option">
      <StyledOption>
        <span data-testid="select-option-label">{label}</span>
        {badge && (
          <Badge className="rn-select__badge rn_ml-3" size="small">
            {badge}
          </Badge>
        )}
        {icon && <StyledEndAdornment>{icon}</StyledEndAdornment>}
      </StyledOption>
    </components.Option>
  )
}
