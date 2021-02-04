import React from 'react'

import { NO_DATA_MESSAGE } from './constants'
import { StyledNoData } from './partials/StyledNoData'

export const TimelineNoData: React.FC = () => (
  <StyledNoData role="row" data-testid="timeline-no-data">
    <span role="cell">{NO_DATA_MESSAGE}</span>
  </StyledNoData>
)

TimelineNoData.displayName = 'TimelineNoData'
