import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { mq, spacing } = selectors

export const StyledBody = styled.section`
  padding: ${spacing('8')};

  ${mq({ gte: 'xs' })`
    padding: ${spacing('11')} ${spacing('12')};
  `}
`
