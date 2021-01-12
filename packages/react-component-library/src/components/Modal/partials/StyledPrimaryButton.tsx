import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { Button } from '../../Button'

const { mq, spacing } = selectors

export const StyledPrimaryButton = styled(Button)`
  ${mq({ gte: 'xs' })`
    margin-bottom: 0;
    margin-left: ${spacing('4')};
  `}
`
