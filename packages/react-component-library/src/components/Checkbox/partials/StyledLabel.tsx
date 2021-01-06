import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing } = selectors

export const StyledLabel = styled.label`
  color: ${color('neutral', '400')};
  padding: ${spacing('1')} 0;
`
