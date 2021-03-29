import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { getOuterWrapperBorder } from '../../../styled-components'

const { color } = selectors

interface StyledOuterWrapperProps {
  $isOpen?: boolean
}

export const StyledOuterWrapper = styled.div<StyledOuterWrapperProps>`
  display: inline-flex;
  flex-direction: row;
  background-color: ${color('neutral', 'white')};

  ${({ $isOpen }) => getOuterWrapperBorder({ $hasFocus: $isOpen })}
`
