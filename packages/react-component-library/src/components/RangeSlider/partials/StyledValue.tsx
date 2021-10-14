import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize, spacing, color } = selectors

export const StyledValue = styled.span`
  position: absolute;
  transform: translate(-50%, -155%);
  font-size: ${fontSize('xs')};
  color: ${color('neutral', '600')};
  opacity: 1;
  transition: opacity 0.15s ease-in-out;
  padding: ${spacing('2')} ${spacing('3')};
  border-radius: 12px;
  font-weight: 600;
`
