import { styled } from 'styled-components'

import { Select } from '../../Select'
import { StyledInput } from '../../SelectBase/partials/StyledInput'
import { StyledInputWrapper } from '../../SelectBase/partials/StyledInputWrapper'
import { StyledLabel } from '../../TextInput/partials/StyledLabel'

// Size the select to its floated label rather than the input's default 20ch.
export const StyledSelect = styled(Select)`
  ${StyledInputWrapper} {
    display: grid;
  }

  ${StyledLabel}, ${StyledInput} {
    grid-area: 1 / 1;
  }

  ${StyledLabel} {
    position: static;
    align-self: start;
  }

  ${StyledInput} {
    width: 0;
    min-width: 100%;
  }
`
