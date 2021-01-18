import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing } = selectors

export const StyledDismissibleBanner = styled.div`
  background: ${color('neutral', 'white')};
  border: ${spacing('px')} solid ${color('neutral', '100')};
  border-radius: 4px;
`
