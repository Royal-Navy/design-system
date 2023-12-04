import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { StyledIcon } from './StyledIcon'

const { spacing } = selectors

export const StyledSuffix = styled(StyledIcon)`
  padding-right: ${spacing('6')};
`
