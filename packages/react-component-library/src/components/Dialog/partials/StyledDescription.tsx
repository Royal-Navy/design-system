import { themeColor, fontSize, mq } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledDescription = styled.div`
  font-size: ${fontSize('m')};
  color: ${themeColor('neutral', '400')};

  ${mq({ gte: 's' })`
    font-size: ${fontSize('base')};
  `}
`
