import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing } = selectors

export const StyledDescription = styled.p`
  color: ${color('neutral', '400')};
  padding-top: ${spacing('4')};
`
