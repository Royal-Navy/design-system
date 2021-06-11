import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import {
  getOuterWrapperBorder,
  StyledOuterWrapperProps,
} from '../../../styled-components/inpute'

const { color } = selectors

export const StyledOuterWrapper = styled.div<StyledOuterWrapperProps>`
  display: inline-flex;
  flex-direction: row;
  background-color: ${({ $isDisabled }) =>
    $isDisabled ? color('neutral', '000') : color('neutral', 'white')};

  ${(props) => getOuterWrapperBorder(props)}
`
