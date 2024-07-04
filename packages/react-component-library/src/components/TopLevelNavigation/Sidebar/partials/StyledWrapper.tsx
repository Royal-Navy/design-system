import styled from 'styled-components'

import { SIDEBAR_CLOSED_WIDTH } from './StyledSidebar'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;

  > *:nth-child(2) {
    margin-left: ${SIDEBAR_CLOSED_WIDTH};
  }
`
