import styled from 'styled-components'

import {
  StyledInput as StyledTextInputInput,
  StyledInputProps,
} from '../../TextInput/partials/StyledInput'

export const StyledInput = styled(StyledTextInputInput)<StyledInputProps>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 0;

  &:enabled {
    cursor: pointer;
  }
`
