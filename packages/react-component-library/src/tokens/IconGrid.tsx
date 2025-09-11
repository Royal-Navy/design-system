import React from 'react'

import * as Icons from '@royalnavy/icon-library'
import { SVGIconProps } from '@royalnavy/icon-library'
import styled from 'styled-components'

import { Stack, Text } from '..'

const StyledGridLayout = styled.div<{ $size: number }>`
  display: grid;
  ${({ $size }) =>
    `grid-template-columns: repeat(auto-fill, minmax(${$size * 2}px, 1fr));`}
  grid-gap: 1rem;
  padding: 1rem;
`

const StyledStack = styled(Stack)`
  overflow: hidden;
  overflow-wrap: break-word; /* preferred */
  word-wrap: break-word; /* legacy support */
  word-break: break-word; /* some browsers */
  &:hover {
    overflow: visible;
    z-index: 1; /* keeps it above neighbors */
  }
`

interface IconGridProps {
  size?: number
}

type ComponentEntry = [string, React.ComponentType<SVGIconProps>]

interface GridProps {
  entries: ComponentEntry[]
  size: number
}

const Grid = ({ entries, size }: GridProps) => {
  return (
    <StyledGridLayout $size={size}>
      {entries.map(([name, Comp]) => {
        const C = Comp as React.ComponentType<SVGIconProps>
        return (
          <StyledStack align="center" key={name}>
            <C size={size} />
            <Text variant="small" wordWrap={false}>
              {name}
            </Text>
          </StyledStack>
        )
      })}
    </StyledGridLayout>
  )
}

const DEFAULT_ICON_SIZE = 48

export const IconGrid = ({ size = DEFAULT_ICON_SIZE }: IconGridProps) => {
  const icons = Object.entries(Icons)
    .filter(([k, v]) => k !== 'default' && typeof v === 'function')
    .filter(([name]) => !name.startsWith('Silhouette'))
  return <Grid entries={icons} size={size} />
}

export const SilhouetteGrid = ({ size = DEFAULT_ICON_SIZE }: IconGridProps) => {
  const silhouettes = Object.entries(Icons)
    .filter(([k, v]) => k !== 'default' && typeof v === 'function')
    .filter(([name]) => name.startsWith('Silhouette'))
  return <Grid entries={silhouettes} size={size} />
}

function getText(prefix: string){

  return `
import { ${prefix}Name } from '@royalnavy/icon-library'

<${prefix}Name size={${DEFAULT_ICON_SIZE}} />
`
}

export const IconText= getText('Icon')
export const SilhouetteText = getText('Silhouette')
