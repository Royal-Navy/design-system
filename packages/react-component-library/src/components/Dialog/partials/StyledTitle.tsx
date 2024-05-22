import { color, fontSize, mq, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledTitle = styled.span`
  display: block;
  font-size: ${fontSize('xl')};
  color: ${color('neutral', '700')};
  margin-bottom: ${spacing('4')};
  text-align: center;

  ${mq({ gte: 'xs' })`
    text-align: left;
  `}
`
