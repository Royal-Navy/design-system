import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledContainer } from './partials/StyledContainer'

export type ContainerSizeType = 'small' | 'regular' | 'large'

export interface ContainerProps extends ComponentWithClass {
  size?: ContainerSizeType
}

export const Container = ({
  className,
  size = 'regular',
  children,
}: ContainerProps) => {
  return (
    <StyledContainer $size={size} className={className} data-testid="container">
      {children}
    </StyledContainer>
  )
}
