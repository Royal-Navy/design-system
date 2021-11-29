import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize, spacing, color } = selectors

export const StyledValue = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -125%);
  font-size: ${fontSize('m')};
  color: ${color('neutral', '500')};
  opacity: 1;
  transition: opacity 0.15s ease-in-out;
  padding: ${spacing('3')} ${spacing('4')};
  border-radius: 8px;
  border: 1px solid ${color('neutral', '200')};
  font-weight: 600;
`
