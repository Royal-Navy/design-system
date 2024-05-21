import styled from 'styled-components'
import { color, spacing, zIndex } from '@royalnavy/design-tokens'

import { StyledInput } from '../../../TextInput/partials/StyledInput'
import { StyledOuterWrapper } from '../../../TextInput/partials/StyledOuterWrapper'
import { StyledTextInput } from '../../../TextInput/partials/StyledTextInput'

export const StyledForm = styled.form`
  z-index: ${zIndex('overlay', 1)};
  display: flex;
  align-items: center;
  background-color: ${color('neutral', '400')};
  height: 59px;

  ${StyledTextInput} {
    margin: 0;
    flex-grow: 1;
  }

  ${StyledOuterWrapper} {
    border: 0;
    background: transparent;
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }

  ${StyledInput} {
    padding: ${spacing('8')};
    color: ${color('neutral', 'white')};
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${color('neutral', 'white')};
    }
  }
`
