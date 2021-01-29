import { components } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing } = selectors

export const StyledOption = styled(components.Option)`
  position: relative;
  border-radius: 2px;
  color: ${color('neutral', '500')};
  display: flex;
  align-items: center;

  &.rn-select__option--is-focused {
    background-color: ${color('neutral', '100')};
    color: ${color('neutral', '500')};
  }

  &.rn-select__option--is-selected {
    background-color: ${color('action', '600')};
    color: ${color('neutral', 'white')};
  }

  &&& {
    padding: ${spacing('4')};
    margin: ${spacing('2')} 0;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
