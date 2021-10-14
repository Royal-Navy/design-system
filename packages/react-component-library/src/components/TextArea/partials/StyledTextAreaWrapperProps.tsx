import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import {
  getOuterWrapperBorder,
  StyledOuterWrapperProps,
} from '../../../styled-components/input'

const { color, spacing } = selectors

interface StyledTextAreaWrapperProps extends StyledOuterWrapperProps {
  $hasLabel: boolean
}

export const StyledTextAreaWrapper = styled.div<StyledTextAreaWrapperProps>`
  position: relative;
  background: ${color('neutral', 'white')};

  ${(props) => getOuterWrapperBorder(props)}

  padding-top: ${({ $hasLabel }) => ($hasLabel ? spacing('10') : spacing('6'))};
`
