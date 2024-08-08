import React, { type JSX } from 'react'
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
   * Controls `justify-content` CSS property, `'flex-start'` by default.
   */
  justify?: CSS.Properties['justifyContent']
  /**
   * Controls `align-items` CSS property, `'center'` by default.
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
   * Determines whether children should take only dedicated amount of
   * space (`max-width` style is set based on the number of children)
   * , `true` by default.
   */
  preventGrowOverflow?: boolean
  /**
   * The type of element to use for the root node, `'div'` by default.
   */
  el?: HTMLElementName
}

type StyledGroupProps = PrefixKeys<
  Omit<GroupProps, 'el' | 'children' | 'className'>,
  '$'
>

const StyledGroup = styled.div<StyledGroupProps>`
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => spacing($gap!)};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  flex-wrap: ${({ $wrap }) => $wrap};

  ${({ $grow, $gap, $preventGrowOverflow }) =>
    $grow &&
    css`
      > * {
        flex-grow: 1;
        ${$preventGrowOverflow &&
        css`
          max-width: ${$gap === '0'
            ? '33.333333333333336%'
            : `calc(33.333333333333336% - (${spacing($gap!)} / 3))`};
        `}
      }
    `}
`

export const Group = ({
  children,
  className,
  el = 'div',
  gap = '0',
  align = 'stretch',
  justify = 'flex-start',
  wrap = 'wrap',
  grow = false,
  preventGrowOverflow = true,
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
        $preventGrowOverflow={preventGrowOverflow}
      >
        {children}
      </StyledGroup>
    )
  )
}
