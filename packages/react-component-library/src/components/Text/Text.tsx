import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getTextStyles, TextElement, TextVariant } from './textStyles'
import { StyledTextComponent } from './StyledTextComponent'

export const textAlignments = {
  start: 'start',
  center: 'center',
  end: 'end',
  justify: 'justify',
}

export type Alignment = (typeof textAlignments)[keyof typeof textAlignments]

export interface TextProps extends ComponentWithClass {
  align?: Alignment
  /**
   * The type of element to use for the root node, `'p'` by default.
   */
  el?: TextElement
  /**
   * Optional id attribute for the root node
   */
  id?: string
  /*
    The display variant to use, 'body' by default
   */
  variant?: TextVariant
  /**
   * Optional CSS color value for the text color
   */
  color?: string
  /**
   * Optional CSS color value for the background color
   */
  backgroundColor?: string
  /**
   * Optional whether text should be wrapped on to multiple lines. Defaults to true
   */
  wordWrap?: boolean
}

export const Text = ({
  children,
  align = 'start',
  el = 'p',
  color,
  backgroundColor = 'none',
  variant,
  wordWrap = true,
  ...rest
}: TextProps) => {
  const { fontSize, lineHeight, defaultColor, element, display } =
    getTextStyles(el, variant)

  const textColor = color || defaultColor
  const extraStyles = display ? { display } : {}

  return (
    <StyledTextComponent
      as={element}
      $align={align}
      $backgroundColor={backgroundColor}
      $lineHeight={lineHeight}
      $noWrap={!wordWrap}
      $size={fontSize}
      $textColor={textColor}
      style={extraStyles}
      {...rest}
    >
      {children}
    </StyledTextComponent>
  )
}

/**
 * @deprecated Use Text instead
 */
export const TextE = Text

/**
 * @deprecated Use TextProps instead
 */
export type TextEProps = TextProps
