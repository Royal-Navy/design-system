import { color, fontSize, spacing } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

const getColorStyles = (isSecret?: boolean, inSidebar?: boolean) => {
  if (isSecret) {
    return css`
      background-color: ${color('danger', '600')};
      color: ${color('neutral', '000')};
    `
  }

  if (inSidebar) {
    return css`
      background-color: ${color('neutral', '400')};
      color: ${color('neutral', '000')};
    `
  }

  return css`
    background-color: ${color('neutral', '100')};
    color: ${color('neutral', '400')};
  `
}

export const StyledClassificationBar = styled.div<{
  $isSecret?: boolean
  $inSidebar?: boolean
}>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: ${fontSize('base')};
  font-weight: 700;
  ${({ $isSecret, $inSidebar }) => getColorStyles($isSecret, $inSidebar)};
  padding: ${spacing('1')} 0;
`
