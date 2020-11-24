import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing('10')} ${spacing('8')};
  background-color: ${color('neutral', '500')};
`
