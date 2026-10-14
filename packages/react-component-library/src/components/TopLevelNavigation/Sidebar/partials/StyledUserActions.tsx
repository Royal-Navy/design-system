import styled, { css } from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

import { SheetButton } from '../../Sheet/SheetButton'

const actionIconStyles = css`
  display: block;
  width: 1.65rem;
  height: 1.65rem;
  color: ${color('neutral', 'white')};
  background-color: ${color('neutral', '400')};
  border-radius: 2px;
  padding: ${spacing('2')};
`

export const StyledUserActions = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing('4')};
`

export const StyledUserAction = styled.span`
  display: inline-flex;

  svg {
    ${actionIconStyles}
  }
`

export const StyledUserMoreButton = styled(SheetButton)`
  margin: 0;
  padding: 0;

  svg {
    ${actionIconStyles}
  }
`
