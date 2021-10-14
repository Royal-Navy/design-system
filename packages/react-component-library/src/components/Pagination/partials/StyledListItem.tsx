import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

export const StyledListItem = styled.li`
  padding: 0 ${spacing('2')};
  display: inline-flex;
  align-items: center;
  position: relative;

  &:first-of-type {
    padding-left: 0;
  }

  &:first-of-type {
    padding-right: 0;
  }
`
