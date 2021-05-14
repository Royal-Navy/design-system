import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export interface StyledTextAreaLabelProps {
  $hasContent: boolean
  $hasFocus: boolean
}

export const StyledTextAreaLabel = styled.label<StyledTextAreaLabelProps>`
  display: block;
  position: absolute;
  padding-bottom: ${spacing('2')};
  top: 0;
  left: 0;
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('s')};
  background-color: white;
  border-radius: 3px 3px 0 0;

  ${({ $hasContent, $hasFocus }) => {
    if ($hasContent || $hasFocus) {
      return css`
        transform: translate(${spacing('6')}, 6px) scale(0.8);
      `
    }

    return css`
      transform: translate(${spacing('6')}, ${spacing('6')}) scale(1);
    `
  }}
`
