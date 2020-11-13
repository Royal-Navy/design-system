import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { NO_DATA_MESSAGE } from './constants'

const { color, spacing, zIndex } = selectors

const StyledNoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: inherit;

  span {
    background-color: ${color('neutral', 'white')};
    padding: ${spacing('2')};
    z-index: ${zIndex('body', 1)};
  }
`

export const TimelineNoData: React.FC = () => (
  <StyledNoData role="row" data-testid="timeline-no-data">
    <span role="cell">{NO_DATA_MESSAGE}</span>
  </StyledNoData>
)

TimelineNoData.displayName = 'TimelineNoData'
