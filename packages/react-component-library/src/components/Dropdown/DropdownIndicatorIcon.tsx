import React from 'react'

import { StyledIconArrowDropDown } from './partials/StyledIconArrowDropDown'

interface DropdownIndicatorProps {
  isOpen: boolean
}

export const DropdownIndicatorIcon: React.FC<DropdownIndicatorProps> = ({
  isOpen,
}) => <StyledIconArrowDropDown $isOpen={isOpen} />

DropdownIndicatorIcon.displayName = 'DropdownIndicatorIcon'
