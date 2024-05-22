import styled from 'styled-components'
import { fontSize } from '@royalnavy/design-tokens'

import { ALERT_DESCRIPTION_COLOR } from '../constants'

export const StyledDescription = styled.div`
  color: ${ALERT_DESCRIPTION_COLOR};
  font-size: ${fontSize('base')};
  font-weight: 400;
`
