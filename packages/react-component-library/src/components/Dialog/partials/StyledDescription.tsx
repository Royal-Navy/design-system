import { color, fontSize, mq } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledDescription = styled.div`
  font-size: ${fontSize('m')};
  color: ${color('neutral', '400')};

  ${mq({ gte: 's' })`
    font-size: ${fontSize('base')};
  `}
`
