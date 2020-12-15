import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: ${spacing('2')};

  svg {
    color: ${color('neutral', '300')};
  }
`
