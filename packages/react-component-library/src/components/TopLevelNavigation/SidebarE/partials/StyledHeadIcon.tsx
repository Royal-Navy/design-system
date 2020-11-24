import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledHeadIcon = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  background-color: ${color('neutral', '500')};
  padding: 0.55rem;
  margin-right: ${spacing('7')};

  svg {
    width: 18px;
    height: 18px;
  }
`
