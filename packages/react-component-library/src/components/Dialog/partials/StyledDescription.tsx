import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { color, fontSize, mq } = selectors

export const StyledDescription = styled.div`
  font-size: ${fontSize('m')};
  color: ${color('neutral', '400')};

  ${mq({ gte: 's' })`
    font-size: ${fontSize('base')};
  `}
`
