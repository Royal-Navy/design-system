import styled, { css } from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

interface StyledCellProps {
  $alignment?: 'left' | 'right' | 'center'
  $width?: number
  $hasBorder?: boolean
}

export const StyledCell = styled.td<StyledCellProps>`
  padding: ${spacing('9')} ${spacing('4')} ${spacing('9')} ${spacing('8')};
  width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};
  font-size: ${fontSize('s')};
  color: ${color('neutral', '400')};
  text-align: ${({ $alignment }) => $alignment || 'left'};
  border-bottom: ${({ $hasBorder }) =>
    $hasBorder && css`1px solid ${color('neutral', '200')};`}

  &:last-of-type {
    border-right: unset;
  }
`
