import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledButton } from '../../Button/partials/StyledButton'

const { mq, spacing } = selectors

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${mq({ gte: 'xs' })`
    flex-direction: row;
  `}

  ${StyledButton} + ${StyledButton} {
    margin-bottom: ${spacing('4')};
  }
`
