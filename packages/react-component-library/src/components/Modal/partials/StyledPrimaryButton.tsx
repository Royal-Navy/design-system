import { mq, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledButton } from './StyledButton'

export const StyledPrimaryButton = styled(StyledButton)`
  ${mq({ gte: 'xs' })`
    margin-left: ${spacing('4')};
  `}
`
