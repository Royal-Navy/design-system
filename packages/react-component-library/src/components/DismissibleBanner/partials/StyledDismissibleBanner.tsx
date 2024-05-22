import { color, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledDismissibleBanner = styled.div`
  background: ${color('neutral', 'white')};
  border: ${spacing('px')} solid ${color('neutral', '100')};
  border-radius: 4px;
`
