import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import {
  getOuterWrapperBorder,
  StyledOuterWrapperProps,
} from '../../../styled-components/input'

const { color } = selectors

export const StyledTextAreaWrapper = styled.div<StyledOuterWrapperProps>`
  position: relative;
  background: ${color('neutral', 'white')};

  ${(props) => getOuterWrapperBorder(props)}
`
