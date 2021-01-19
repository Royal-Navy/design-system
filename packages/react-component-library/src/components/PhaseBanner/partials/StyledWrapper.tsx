import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

const { spacing } = selectors

const CONTENT_WIDTH = '1280px'

interface StyledWrapperProps {
  $isFullWidth: boolean
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  ${({ $isFullWidth }) =>
    !$isFullWidth &&
    css`
      max-width: ${CONTENT_WIDTH};
      margin-left: auto;
      margin-right: auto;
      padding-left: ${spacing('12')};
      padding-right: ${spacing('12')};
    `}
`
