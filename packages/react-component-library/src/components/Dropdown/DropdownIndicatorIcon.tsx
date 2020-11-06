import React from 'react'
import { IconArrowDropDown } from '@royalnavy/icon-library'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

const { color } = selectors

interface DropdownIndicatorProps {
  isOpen: boolean
}

interface StyledIconArrowDropDownProps {
  $isOpen: boolean
}

const StyledIconArrowDropDown = styled(IconArrowDropDown)<
  StyledIconArrowDropDownProps
>`
  position: relative;
  left: -4px;
  
  color: ${({ $isOpen }) =>
    $isOpen ? color('action', '600') : color('neutral', '200')};
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: ${({ $isOpen }) =>
    $isOpen ? css`translateY(-2px) rotate(180deg)` : ''};
`

export const DropdownIndicatorIcon: React.FC<DropdownIndicatorProps> = ({
  isOpen,
}) => <StyledIconArrowDropDown $isOpen={isOpen} viewBox="4 5 8 8" />

DropdownIndicatorIcon.displayName = 'DropdownIndicatorIcon'
