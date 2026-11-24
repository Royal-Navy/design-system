import { styled } from 'styled-components'
import { themeColor, spacing } from '@royalnavy/design-tokens'

export const StyledIconLeft = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${themeColor('neutral', '400')};
    overflow: visible;
    margin-right: ${spacing('6')};
  }
`
