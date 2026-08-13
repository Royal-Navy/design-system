import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledEmptyStateCell = styled.td`
  padding: 0;
`

export const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing('8')};
  min-height: 17rem;
  padding: ${spacing('12')} ${spacing('8')};
  text-align: center;
`

export const StyledEmptyStateIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background: ${color('neutral', '100')};
  color: ${color('neutral', '300')};

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const StyledEmptyStateTitle = styled.p`
  margin: 0;
  color: ${color('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: 600;
`
