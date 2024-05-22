import { memo } from 'react'
import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import { TextInput } from '../../TextInput'
import { StyledInput } from '../../TextInput/partials/StyledInput'

export const StyledTextInput = memo(styled(TextInput)`
  width: 51px;
  margin: 0;

  ${StyledInput} {
    height: 31px;
    padding: 0 0 0 ${spacing('6')};
  }
`)
