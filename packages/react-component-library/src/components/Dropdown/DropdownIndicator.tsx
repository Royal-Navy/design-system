import React from 'react'
import { components } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'
import { IconArrowDropDown } from '@royalnavy/icon-library'

const { color } = selectors

interface StyledIconArrowDropDownProps {
  isOpen: boolean
}

const StyledIconArrowDropDown = styled(IconArrowDropDown)<
  StyledIconArrowDropDownProps
>`
  position: relative;
  left: -4px;
  color: ${({ isOpen }) =>
    isOpen ? color('action', '600') : color('neutral', '200')};
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: ${({ isOpen }) => (isOpen ? css`translateY(-2px) rotate(180deg)` : '')};
`

export const DropdownIndicator: React.FC<any> = (props) => {
  const {
    selectProps: { menuIsOpen: isOpen },
  } = props

  return (
    <components.DropdownIndicator {...props}>
      <StyledIconArrowDropDown isOpen={isOpen} viewBox="4 5 8 8" />
    </components.DropdownIndicator>
  )
}

DropdownIndicator.displayName = 'DropdownIndicator'
