import styled from 'styled-components'

import { TextInput } from '../../TextInput'
import { StyledInput } from '../../TextInput/partials/StyledInput'

export const StyledTextInput = styled(TextInput)`
  width: 51px;
  margin: 0;

  ${StyledInput} {
    height: 31px;
  }
`
