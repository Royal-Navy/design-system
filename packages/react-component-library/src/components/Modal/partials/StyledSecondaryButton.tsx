import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

import { StyledButton } from './StyledButton'

const { mq } = selectors

export const StyledSecondaryButton = styled(StyledButton)`
  ${mq({ gte: 'xs' })`
    margin-left: auto;
  `}
`
