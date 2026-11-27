import { styled } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

export const StyledToggle = styled.label`
  display: flex;
  align-items: center;
  gap: ${spacing('4')};
  position: relative;
  width: fit-content;
  min-width: 24px;
  min-height: 24px;
`
