import React from 'react'
import { ColorItem } from '@storybook/blocks'
import { ColorGroup, ColorShade, selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

const shades = [
  '000',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as ColorShade[]

type PaletteProps = {
  group: ColorGroup
  title: string
  subtitle?: string
}

const StyledColorItem = styled(ColorItem)`
  border: solid 3px hotpink !important;
`

export const DesignSystemColorItem = (props: PaletteProps) => {
  const { group, title, subtitle = '' } = props

  const colors = shades.reduce((acc, shade) => {
    acc[shade] = color(group, shade)
    return acc
  }, {} as Record<string, string>)

  return <StyledColorItem title={title} subtitle={subtitle} colors={colors} />
}
