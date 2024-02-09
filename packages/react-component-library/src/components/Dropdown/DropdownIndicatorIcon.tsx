import React from 'react'

import { StyledIconArrowDropDown } from './partials/StyledIconArrowDropDown'

interface DropdownIndicatorProps {
  isOpen: boolean
}

export const DropdownIndicatorIcon = ({ isOpen }: DropdownIndicatorProps) => (
  <StyledIconArrowDropDown $isOpen={isOpen} />
)

DropdownIndicatorIcon.displayName = 'DropdownIndicatorIcon'
