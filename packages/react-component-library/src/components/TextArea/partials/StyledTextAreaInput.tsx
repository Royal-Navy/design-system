import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing } = selectors

interface StyledTextAreaInputProps {
  $hasLabel: boolean
}

export const StyledTextAreaInput = styled.textarea<StyledTextAreaInputProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  border: 0;
  background: none;
  font-size: ${fontSize('base')};
  resize: vertical;
  overflow: auto;
  min-height: 80px;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: 0;
  }

  ${({ $hasLabel }) => {
    if ($hasLabel) {
      return css`
        padding: 0 ${spacing('6')} ${spacing('2')};
      `
    }

    return css`
      padding: 0 ${spacing('6')} ${spacing('6')};
    `
  }}
`
