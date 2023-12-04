import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledUserItem = styled.div`
  display: flex;
  align-items: center;
  margin: ${spacing('4')};
`
