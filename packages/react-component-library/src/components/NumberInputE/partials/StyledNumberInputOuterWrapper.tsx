import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

import {
  getOuterWrapperBorder,
  StyledOuterWrapperProps,
} from '../../../styled-components/input'

const { color } = selectors

export const StyledNumberInputOuterWrapper = styled.div<StyledOuterWrapperProps>`
  display: inline-flex;
  flex-direction: row;
  background-color: ${color('neutral', 'white')};

  ${(props) => getOuterWrapperBorder(props)}
`
