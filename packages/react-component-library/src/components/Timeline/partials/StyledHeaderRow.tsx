import styled, { css } from 'styled-components'

import { TimelineRow } from '../TimelineRow'

export const StyledHeaderRow = styled<any>(TimelineRow)`
  width: 100%;
  ${({ isShort }) =>
    isShort &&
    css`
      height: 2.5rem;
    `}
`
