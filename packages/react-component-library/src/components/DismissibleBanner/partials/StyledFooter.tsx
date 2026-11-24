import { themeColor, spacing } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledFooter = styled.div`
  background: ${themeColor('neutral', '000')};
  display: flex;
  justify-content: space-between;
  padding: ${spacing('4')};

  > div {
    display: flex;
  }
`
