import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ALERT_DESCRIPTION_COLOR } from '../constants'

const { fontSize } = selectors

export const StyledDescription = styled.p`
  color: ${ALERT_DESCRIPTION_COLOR};
  font-size: ${fontSize('base')};
  font-weight: 400;
`
