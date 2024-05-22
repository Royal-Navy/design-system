import { mq, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledBody = styled.section`
  padding: ${spacing('8')};

  ${mq({ gte: 'xs' })`
    padding: ${spacing('11')} ${spacing('12')};
  `}
`
