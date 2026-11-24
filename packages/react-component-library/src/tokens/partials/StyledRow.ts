import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledRow = styled.div`
  border-bottom: solid 1px ${themeColor('neutral', '100')};
  padding: ${spacing('8')} 0;
  display: flex;
  gap: ${spacing('8')};
  height: ${spacing('12')};
  color: ${themeColor('neutral', '400')};
  align-items: center;

  div {
    font-size: ${fontSize('base')} !important;
  }
`
