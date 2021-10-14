import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { IconArrowDropDown } from '@defencedigital/icon-library'

const { color } = selectors

interface StyledIconArrowDropDownProps {
  $isOpen: boolean
}

export const StyledIconArrowDropDown = styled(
  IconArrowDropDown
)<StyledIconArrowDropDownProps>`
  position: relative;
  width: 26px;
  height: 26px;
  left: -4px;

  color: ${({ $isOpen }) =>
    $isOpen ? color('action', '600') : color('neutral', '200')};
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: ${({ $isOpen }) =>
    $isOpen ? css`translateY(-2px) rotate(180deg)` : ''};
`
