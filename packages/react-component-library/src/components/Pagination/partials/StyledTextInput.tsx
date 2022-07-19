import { memo } from 'react'
import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { TextInput } from '../../TextInput'
import { StyledInput } from '../../TextInput/partials/StyledInput'

const { spacing } = selectors

export const StyledTextInput = memo(styled(TextInput)`
  width: 51px;
  margin: 0;

  ${StyledInput} {
    height: 31px;
    padding: 0 0 0 ${spacing('6')};
  }
`)
