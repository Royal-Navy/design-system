import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ContainerSizeType } from '../Container'
import { CONTAINER_CONTENT_WIDTH } from '../constants'

const { spacing } = selectors

interface StyledContainerProps {
  $size: ContainerSizeType
}

const sizeStyles = {
  small: css`
    padding-left: ${spacing('12')};
    padding-right: ${spacing('12')};
  `,
  regular: css`
    padding-left: ${spacing('12')};
    padding-right: ${spacing('12')};
  `,
  large: css`
    padding-left: ${spacing('13')};
    padding-right: ${spacing('13')};
  `,
}

export const StyledContainer = styled.div<StyledContainerProps>`
  max-width: ${CONTAINER_CONTENT_WIDTH};
  margin-left: auto;
  margin-right: auto;

  ${({ $size }) => sizeStyles[$size]}
`
