import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledButton } from './StyledButton'

const { mq, spacing } = selectors

export const StyledPrimaryButton = styled(StyledButton)`
  ${mq({ gte: 'xs' })`
    margin-left: ${spacing('4')};
  `}
`
