import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../../common/ComponentWithClass'

export interface SheetButtonProps extends ComponentWithClass {
  children?: React.ReactElement
  icon: React.ReactElement
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const { spacing } = selectors

const StyledSheetButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: block;
  line-height: 0;
  margin: 0 auto;
  padding: ${spacing('2')};
  position: relative;
`

export const SheetButton: React.FC<SheetButtonProps> = ({
  children,
  className,
  icon,
  onClick,
  ...rest
}) => {
  return (
    <StyledSheetButton
      aria-haspopup
      className={className}
      onClick={onClick}
      type="button"
      {...rest}
    >
      {icon}
      {children}
    </StyledSheetButton>
  )
}
