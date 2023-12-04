import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledScrollButton } from './StyledScrollButton'

const { spacing } = selectors

export const StyledScrollRight = styled(StyledScrollButton)`
  margin-left: ${spacing('2')};
`
