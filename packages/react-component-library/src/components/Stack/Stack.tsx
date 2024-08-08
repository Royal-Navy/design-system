import React, { type JSX } from 'react'
import type * as CSS from 'csstype'
import styled from 'styled-components'
import { type Spacing, spacing } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { PrefixKeys } from '../../helpers'

type HTMLElementName = keyof JSX.IntrinsicElements

interface StackProps extends ComponentWithClass {
  /**
   * Controls the gap between children, `'0'` by default.
   */
  gap?: Spacing
  /**
   * Controls `justify-content` CSS property, `'flex-start'` by default.
   */
  justify?: CSS.Properties['justifyContent']
  /**
   * Controls `align-items` CSS property, `'stretch'` by default.
   */
  align?: CSS.Properties['alignItems']
  /**
   * The type of element to use for the root node, `'div'` by default.
   */
  el?: HTMLElementName
}

type StyledStackProps = PrefixKeys<
  Omit<StackProps, 'el' | 'children' | 'className'>,
  '$'
>

const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => spacing($gap!)};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
`

export const Stack = ({
  children,
  className,
  el = 'div',
  gap = '0',
  align = 'stretch',
  justify = 'flex-start',
}: StackProps) => {
  return (
    children && (
      <StyledStack
        as={el}
        className={className}
        $gap={gap}
        $align={align}
        $justify={justify}
      >
        {children}
      </StyledStack>
    )
  )
}
