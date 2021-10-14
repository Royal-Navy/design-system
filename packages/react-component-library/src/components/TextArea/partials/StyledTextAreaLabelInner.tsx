import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledTextAreaLabelProps } from './StyledTextAreaLabel'

const { spacing } = selectors

export const StyledTextAreaLabelInner = styled.span<StyledTextAreaLabelProps>`
  display: inline-block;
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${({ $hasContent, $hasFocus }) => {
    if ($hasContent || $hasFocus) {
      return css`
        transform: none;
      `
    }

    return css`
      transform: translate(0, ${spacing('2')}) scale(1.2);
    `
  }}
`
