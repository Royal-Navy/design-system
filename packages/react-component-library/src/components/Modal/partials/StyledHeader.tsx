import { themeColor, spacing } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${spacing('11')};
  border-bottom: 1px solid ${themeColor('neutral', '100')};
`
