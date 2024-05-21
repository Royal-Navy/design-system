import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

import { StyledHeadTitle } from './StyledHeadTitle'

export const StyledHeadIcon = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  background-color: ${color('neutral', '500')};
  padding: 0.55rem;
  min-width: 18px;

  & + ${StyledHeadTitle} {
    position: absolute;
    top: 50%;
    left: ${spacing('15')};
    transform: translateY(-50%);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`
