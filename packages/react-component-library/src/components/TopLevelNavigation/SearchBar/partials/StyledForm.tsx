import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { zIndex, color, spacing } = selectors

export const StyledForm = styled.form`
  z-index: ${zIndex('overlay', 1)};
  display: flex;
  align-items: center;
  background-color: ${color('neutral', '400')};
  height: 59px;

  .rn-textinput {
    margin: 0;
    flex-grow: 1;
  }

  .rn-textinput__outer-wrapper,
  .rn-textinput.has-focus .rn-textinput__outer-wrapper {
    border: 0;
    background: transparent;
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }

  .rn-textinput__input {
    padding: ${spacing('8')};
    color: ${color('neutral', 'white')};
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${color('neutral', 'white')};
    }
  }
`
