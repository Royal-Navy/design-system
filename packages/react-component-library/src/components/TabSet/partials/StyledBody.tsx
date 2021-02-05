import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { StyledTabSetProps } from './StyledTabSet'

const { color, spacing } = selectors

export const StyledBody = styled.div<StyledTabSetProps>`
  padding: ${spacing('12')} 0;
  overflow-y: auto;

  ${({ $isScrollable }) =>
    $isScrollable &&
    css`
      border-top: 1px solid ${color('neutral', '200')};
    `}
`
