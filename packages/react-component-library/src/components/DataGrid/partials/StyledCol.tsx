import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing } = selectors

interface StyledColProps {
  $isSortable?: boolean
}

export const StyledCol = styled.th<StyledColProps>`
  padding: ${spacing('8')} ${spacing('4')};
  text-align: left;
  font-size: ${fontSize('s')};
  font-weight: 600;
  text-transform: uppercase;

  ${({ $isSortable }) =>
    $isSortable &&
    css`
      cursor: pointer;
      user-select: none;
    `}

  & svg {
    position: relative;
    top: 2px;
    left: ${spacing('2')};
    width: ${spacing('6')};
    height: ${spacing('6')};
  }
`
