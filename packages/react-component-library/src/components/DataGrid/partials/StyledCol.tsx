import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing } = selectors

interface StyledColProps {
  $isSortable?: boolean
  $alignment?: 'left' | 'right' | 'center'
  $width?: number
}

export const StyledCol = styled.th<StyledColProps>`
  padding: ${spacing('8')} ${spacing('4')} ${spacing('8')} ${spacing('8')};
  width: ${({ $width }) => $width || 'auto'};
  text-align: left;
  font-size: ${fontSize('s')};
  font-weight: 600;
  text-transform: uppercase;
  text-align: ${({ $alignment }) => $alignment || 'left'};

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
