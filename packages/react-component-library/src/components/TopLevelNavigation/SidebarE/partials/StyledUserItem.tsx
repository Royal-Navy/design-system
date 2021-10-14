import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

export const StyledUserItem = styled.li`
  display: flex;
  align-items: center;
  margin: ${spacing('4')};
`
