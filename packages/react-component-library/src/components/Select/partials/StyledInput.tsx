import { components } from 'react-select'
import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { fontSize, spacing } = selectors

interface StyledInputProps {
  name: string
}

export const StyledInput = styled(components.Input)<StyledInputProps>`
  font-size: ${fontSize('base')};
  margin: ${spacing('8')} 0 0;
`
