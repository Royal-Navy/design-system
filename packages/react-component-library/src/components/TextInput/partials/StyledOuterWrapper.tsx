import styled from 'styled-components'

import {
  StyledOuterWrapper as StyledOuterWrapperBase,
  StyledOuterWrapperProps,
} from '../../../styled-components'

export const StyledOuterWrapper = styled(
  StyledOuterWrapperBase
)<StyledOuterWrapperProps>`
  display: inline-flex;
  flex-direction: row;
`
