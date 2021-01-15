import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { Button } from '../../Button'

const { mq } = selectors

export const StyledSecondaryButton = styled(Button)`
  ${mq({ gte: 'xs' })`
    margin-bottom: 0;
    margin-left: auto;
  `}
`
