import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { SWITCH_BORDER_COLOR, SWITCH_BACKGROUND_COLOR } from '../constants'

const { spacing } = selectors

export const StyledContainer = styled.div`
  display: inline-flex;
  padding: ${spacing('2')};
  border: 1px solid ${SWITCH_BORDER_COLOR};
  background-color: ${SWITCH_BACKGROUND_COLOR};
  border-radius: 4px;
`
