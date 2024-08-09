import React from 'react'
import styled from 'styled-components'

import { fontSize, TypographySize } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'

// TODO - Remove this once the stack PR is merged
type PrefixKeys<T, Prefix extends string> = {
  [K in keyof T as `${Prefix}${Extract<K, string>}`]: T[K]
}

export const textAlignments = {
  start: 'start',
  center: 'center',
  end: 'end',
  justify: 'justify',
}

export type Alignment = (typeof textAlignments)[keyof typeof textAlignments]

export const textElements = {
  // dt: 'dt',
  // dd: 'dd',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  strong: 'strong',
  legend: 'legend',
} as const

type Element = (typeof textElements)[keyof typeof textElements]

export interface TextProps extends ComponentWithClass {
  size?: TypographySize
  align?: Alignment
  /**
   * The type of element to use for the root node, `'p'` by default.
   */
  el?: Element
}

type StyledTextProps = PrefixKeys<
  Omit<TextProps, 'children' | 'className'>,
  '$'
>

export const StyledComponent = styled.div<StyledTextProps>`
  font-size: ${({ $size }) => fontSize($size!)};
  text-align: ${({ $align }) => $align};
  max-width: 50ch;
  line-height: 1.7;
`

export const Text = ({
  children,
  size = 'base',
  align = 'start',
  el = 'p',
}: TextProps) => {
  return (
    <StyledComponent as={el} $size={size} $align={align}>
      {children}
    </StyledComponent>
  )
}
