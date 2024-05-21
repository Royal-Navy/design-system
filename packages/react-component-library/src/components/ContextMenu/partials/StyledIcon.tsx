import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: ${spacing('2')};

  svg {
    color: ${color('neutral', '300')};
  }
`
