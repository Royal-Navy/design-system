import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledUserItem = styled.li`
  display: flex;
  align-items: center;
  margin: ${spacing('4')};
`
