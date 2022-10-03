import React from 'react'
import styled, { css } from 'styled-components'

import { TimelineRow, TimelineRowProps } from '../TimelineRow'

interface StyledHeaderRowProps extends TimelineRowProps {
  isShort?: boolean
}

export const StyledHeaderRow = styled<
  React.ComponentType<StyledHeaderRowProps>
>(TimelineRow)`
  width: 100%;
  ${({ isShort }) =>
    isShort &&
    css`
      height: 2.5rem;
    `}
`
