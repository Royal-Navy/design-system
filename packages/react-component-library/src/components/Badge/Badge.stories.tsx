import React from 'react'
import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'
import { Meta, StoryFn } from '@storybook/react'

import {
  Badge,
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
  BadgeProps,
} from '.'
import { SectionDivider } from '../SectionDivider'

export default { component: Badge, title: 'Components/Badge' } as Meta<
  typeof Badge
>

export const Default: StoryFn<typeof Badge> = ({
  color,
  colorVariant,
  size,
  variant,
  children,
}) => (
  <Badge
    color={color}
    colorVariant={colorVariant}
    size={size}
    variant={variant}
  >
    {children}
  </Badge>
)

Default.args = {
  color: BADGE_COLOR.ACTION,
  colorVariant: BADGE_COLOR_VARIANT.SOLID,
  size: BADGE_SIZE.REGULAR,
  variant: BADGE_VARIANT.REGULAR,
  children: 'Hello, World!',
}

Default.argTypes = {
  color: {
    control: 'select',
    options: [...Object.values(BADGE_COLOR)],
  },
  colorVariant: {
    control: 'select',
    options: [...Object.values(BADGE_COLOR_VARIANT)],
  },
  size: {
    control: 'select',
    options: [...Object.values(BADGE_SIZE)],
  },
  variant: {
    control: 'select',
    options: [...Object.values(BADGE_VARIANT)],
  },
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${spacing('4')};
  margin: ${spacing('8')} 0 ${spacing('12')};
`

const StyledBadgeContainer = styled.div`
  text-align: center;
`

const BadgeGrid = (
  props: Pick<BadgeProps, 'color' | 'colorVariant' | 'size' | 'variant'>
) => {
  const { colorVariant, size, variant } = props
  return (
    <StyledGrid>
      {Object.values(BADGE_COLOR).map((color) => (
        <StyledBadgeContainer>
          <Badge
            key={color}
            color={color}
            colorVariant={colorVariant}
            size={size}
            variant={variant}
          >
            {color}
          </Badge>
        </StyledBadgeContainer>
      ))}
    </StyledGrid>
  )
}

export const KitchenSink: StoryFn<typeof Badge> = (args) => {
  return (
    <>
      <SectionDivider title="Regular" />
      <BadgeGrid {...args} />
      <SectionDivider title="BADGE_COLOR_VARIANT.FADED" />
      <BadgeGrid {...args} colorVariant={BADGE_COLOR_VARIANT.FADED} />
      <SectionDivider title="BADGE_VARIANT.PILL" />
      <BadgeGrid {...args} variant={BADGE_VARIANT.PILL} />

      {Object.entries(BADGE_SIZE).map(([key, size]) => (
        <>
          <SectionDivider title={`BADGE_SIZE.${key}`} />
          <BadgeGrid {...args} size={size} />
        </>
      ))}
    </>
  )
}

KitchenSink.parameters = {
  docs: {
    description: {
      story: 'Combinations of Badge variants',
    },
  },
}
