import styled from 'styled-components'

import { isIE11 } from '../../../helpers'
import {
  StyledOuterWrapper as StyledOuterWrapperBase,
  StyledOuterWrapperProps,
} from '../../../styled-components'

export const StyledOuterWrapper = styled(
  StyledOuterWrapperBase
)<StyledOuterWrapperProps>`
  position: relative;
  padding: ${isIE11() ? '21px' : '19px'} 8px 8px 8px;
`
