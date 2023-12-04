import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { Modal } from '../../Modal'
import { StyledMain } from '../../Modal/partials/StyledMain'

const { mq } = selectors

export const StyledDialog = styled(Modal)`
  ${StyledMain} {
    ${mq({ gte: 'xs' })`
      width: 100%;
      max-width: 480px;
    `}
  }
`
