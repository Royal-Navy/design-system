import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledCellProps {
  $alignment?: 'left' | 'right' | 'center'
  $width?: number
}

const { spacing, fontSize, color } = selectors

export const StyledCell = styled.td<StyledCellProps>`
  padding: ${spacing('9')} ${spacing('4')} ${spacing('9')} ${spacing('8')};
  width: ${({ $width }) => $width || 'auto'};
  font-size: ${fontSize('s')};
  color: ${color('neutral', '400')};
  text-align: ${({ $alignment }) => $alignment || 'left'};
  border-bottom: 1px solid ${color('neutral', '200')};

  &:last-of-type {
    border-right: unset;
  }
`
