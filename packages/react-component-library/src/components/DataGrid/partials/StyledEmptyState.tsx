import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledEmptyStateCell = styled.td`
  height: 100%;
  padding: 0;
`

export const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing('6')};
  height: 100%;
  min-height: 5.5rem;
  padding: ${spacing('12')} ${spacing('8')};
  text-align: center;

  /* Auto margins centre the content while there is room and collapse to zero
     when there is not, so a short table body clips nothing off the top. */
  > *:first-child {
    margin-top: auto;
  }

  > *:last-child {
    margin-bottom: auto;
  }
`

export const StyledEmptyStateIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* The circle gives up height first so the message always survives. */
  width: auto;
  height: 5.5rem;
  min-height: 0;
  flex-shrink: 1;
  aspect-ratio: 1;

  border-radius: 50%;
  background: ${color('neutral', '100')};
  color: ${color('neutral', '300')};

  svg {
    width: 45%;
    height: 45%;
  }
`

export const StyledEmptyStateTitle = styled.p`
  margin: 0;
  flex-shrink: 0;
  color: ${color('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: 600;
`
