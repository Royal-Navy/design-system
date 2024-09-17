import React, { type JSX, Children } from 'react'
import type * as CSS from 'csstype'
import styled, { css } from 'styled-components'
import { type Spacing, spacing } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { PrefixKeys } from '../../helpers'

type HTMLElementName = keyof JSX.IntrinsicElements

interface GroupProps extends ComponentWithClass {
  /**
   * Controls the gap between children, `'0'` by default.
   */
  gap?: Spacing
  /**
   * Controls horizontal `justify-content` CSS property, `'flex-start'` by default.
   */
  justify?: CSS.Properties['justifyContent']
  /**
   * Controls vertical `align-items` CSS property, `'center'` by default.
   */
  align?: CSS.Properties['alignItems']
  /**
   * Controls `flex-wrap` CSS property, `'wrap'` by default.
   */
  wrap?: CSS.Properties['flexWrap']
  /**
   * Determines whether each child element should have `flex-grow: 1`
   * style, `false` by default.
   */
  grow?: boolean
  /**
   * The type of element to use for the root node, `'div'` by default.
   */
  el?: HTMLElementName
}

type StyledGroupProps = PrefixKeys<
  Omit<GroupProps, 'el' | 'children' | 'className'>,
  '$'
> & {
  $childCount: number
}

const StyledGroup = styled.div<StyledGroupProps>`
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => spacing($gap!)};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  flex-wrap: ${({ $wrap }) => $wrap};

  ${({ $grow, $childCount }) =>
    $grow &&
    css`
      > * {
        flex: 1;
        max-width: ${100 / $childCount}%;
      }
    `}
`

export const Group = ({
  children,
  className,
  el = 'div',
  gap = '0',
  align = 'center',
  justify = 'flex-start',
  wrap = 'wrap',
  grow = false,
}: GroupProps) => {
  return (
    children && (
      <StyledGroup
        as={el}
        className={className}
        $gap={gap}
        $align={align}
        $justify={justify}
        $wrap={wrap}
        $grow={grow}
        $childCount={Children.count(children)}
      >
        {children}
      </StyledGroup>
    )
  )
}
