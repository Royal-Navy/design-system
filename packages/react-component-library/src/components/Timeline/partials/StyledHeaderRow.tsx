import styled, { css } from 'styled-components'

import { TimelineRow } from '../TimelineRow'

export const StyledHeaderRow = styled<any>(TimelineRow)`
  ${({ isShort }) =>
    isShort &&
    css`
      height: 2.5rem;
    `}
`
