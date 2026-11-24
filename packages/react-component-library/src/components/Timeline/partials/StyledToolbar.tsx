import { styled } from 'styled-components'
import { themeColor, spacing } from '@royalnavy/design-tokens'

export const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${spacing('px')} solid ${themeColor('neutral', '100')};
  background-color: ${themeColor('neutral', 'white')};
`
