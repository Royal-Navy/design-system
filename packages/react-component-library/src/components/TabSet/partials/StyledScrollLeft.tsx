import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledScrollButton } from './StyledScrollButton'

const { spacing } = selectors

export const StyledScrollLeft = styled(StyledScrollButton)`
  margin-right: ${spacing('2')};
`
