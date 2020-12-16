import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ALERT_FOOTER_BORDER_COLOR } from '../constants'

const { spacing, breakpoint } = selectors

export const StyledFooter = styled.div`
  border-top: ${spacing('px')} solid ${ALERT_FOOTER_BORDER_COLOR};
  padding-top: ${spacing('6')};
  margin-top: ${spacing('6')};

  @media only screen and (min-width: ${breakpoint('xs').breakpoint}) {
    border-top: none;
    padding-top: 0;
    margin-top: 0;
  }
`
