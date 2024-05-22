import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import { StyledAdornment } from './StyledAdornment'
import { StyledIcon } from './StyledIcon'

export const StyledStartAdornment = styled(StyledAdornment)`
  padding-right: ${spacing('4')};

  ${StyledIcon} + & {
    margin-left: ${spacing('3')};
  }
`
